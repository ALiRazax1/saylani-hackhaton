import { supabase } from "@/lib/supabase";
import { Context as dataContext } from "@/context/event-data";
import { useContext, useState, useEffect } from "react";
import { useRedirect } from "@/lib/redirect";
import { Context } from "@/context/user";
import { Header } from "@/components/header";
import { Filter } from "@/components/filter";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, UsersRound } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard";
import {Link} from "react-router"
export function AllEvents() {
  const [eventID, setEventId] = useState();
  const [eventStatus, setEventStatus] = useState();
  useRedirect();
  const { eventData, setEventData } = useContext(dataContext);
  const { user } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("user:", user);

    async function getData() {
      try {
        const { data, error } = await supabase.from("events").select();
        if (error) throw error;
        if (data && user) {
          // console.log(data);
          // console.log(user);
          console.log("if condition is running");
          console.log(data);

          // const filtered =  data.filter((e)=>e.user_id == user.id )
          setFilteredData(data);
          setEventData(data);

          console.log(eventData);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [eventStatus]);
  useEffect(() => {
    console.log("Current filteredData:", filteredData);
  }, [filteredData]);
  setEventData(filteredData);
  // update status of event
  async function addOrRejectEvent() {
    console.log(eventID, eventStatus);
    const { error } = await supabase
      .from("events")
      .update({ status: eventStatus })
      .eq("id", eventID);
  }

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Header
          data={
            <>
              <div className={" mx-2"}>
                <Filter></Filter>
                <Table className={" "}>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event Name</TableHead>
                      
                      <TableHead>Location</TableHead>

                      <TableHead>Created by</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((e) => {
                      return (
                        <>
                          <TableRow>
                            <TableCell>{e.title}</TableCell>
                           
                            <TableCell>{e.location}</TableCell>

                            <TableCell>{e.created_by}</TableCell>
                             <TableCell>
                              {" "}
                              <Badge variant={"destructive"}>
                                {e.category}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  e.status.toLowerCase() === "approved"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {e.status}
                              </Badge>
                            </TableCell>
                            <TableCell> <Link to={`/admin/${e.id}`}> <Button className={"bg-transparent text-black border transition duration-500 hover:text-white border-amber-400"}>View</Button></Link></TableCell>
                          </TableRow>
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </>
          }
        />
      </SidebarProvider>
    </>
  );
}
