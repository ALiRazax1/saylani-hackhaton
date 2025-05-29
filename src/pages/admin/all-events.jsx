import { supabase } from "@/lib/supabase"
import { Context as dataContext } from "@/context/event-data";
import { useContext, useState, useEffect } from "react";
import { useRedirect } from "@/lib/redirect";
import { Context } from "@/context/user";
import { Header } from "@/components/header";
import { Card,CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {MapPin,UsersRound} from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard";
export function AllEvents (){
    useRedirect()
    const {eventData,setEventData} = useContext(dataContext)
    const {user} = useContext(Context)
    const [filteredData,setFilteredData] = useState([])
    
     useEffect(()=>{
            console.log("user:",user);

        
            async function getData(){
                try {
                    
 const { data, error } = await supabase
      .from('events')
      .select();
      if (error ) throw error
      if (data&& user){
        // console.log(data);
        // console.log(user);
        console.log("if condition is running");
        console.log(data);
        
        // const filtered =  data.filter((e)=>e.user_id == user.id ) 
         setFilteredData(data)
         setEventData(data)

        console.log(eventData);
        
        
        
 
      }

                } catch (error) {
                    console.log(error.message);
                    
                }
   
     }
        getData()},[])
        useEffect(() => {
  console.log("Current filteredData:", filteredData);
}, [filteredData]);
setEventData(filteredData)        
    return(
        <>
        <SidebarProvider>
            <AppSidebar/>
                    <Header data={<>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-2'}>
                  {filteredData.map((e,key)=>{
                    return(
                      <>
                      <Card key={key} className={'gap-2'}>
                        <img className="w-full min-h-[180px]" src={e.img_url} alt={e.title} />
                        <CardTitle >{e.title} </CardTitle>
                        <div className="flex justify-between items-center flex-wrap gap-y-1.5">
                       <div className=" flex gap-x-2"> <Badge variant={'destructive'}>{e.category}</Badge>
                        <Badge variant={e.status.toLowerCase()==='approved'? 'default':'secondary'}>{e.status}</Badge></div>
                        <Button disabled={e.status.toLowerCase()==='pending'} className={'text-[12px] px-1 border-amber-400 border bg-transparent text-black cursor-pointer transition duration-500 hover:border hover:border-amber-400'} >Add Participant</Button>
</div><MapPin className="py-0 my-0" size={18} strokeWidth={0.5} /><span className="flex gap-x-2 items-center text-[14px]"> <UsersRound size={18} strokeWidth={0.5}></UsersRound> asd</span><UsersRound size={18} strokeWidth={0.5}/>
<Button>View Details</Button>

                      </Card>
                      </>
                    )
                  })}

                </div>
                        </>}/>

            </SidebarProvider>
         
        </>
    )
}