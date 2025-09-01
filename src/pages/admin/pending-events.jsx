import { Context as dataContext } from "@/context/event-data";
import { supabase } from "@/lib/supabase";
import { useContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard";
import { Header } from "@/components/header";
import { Card,CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin,UsersRound } from "lucide-react";
import { Link } from "react-router";


export function PendingEvents(){
    const {eventData} = useContext(dataContext)
    const [data,setData] = useState()
    const [eventID,setEventId] = useState()
    const[eventStatus,setEventStatus] = useState()
    useEffect(()=>{
      setData(eventData)
    },[setEventStatus])
    async function addOrRejectEvent(event){
      
      if (event.currentTarget.id == 'approve') {
        try {
 const { error } = await supabase
  .from('events')
  .update({ status: eventStatus })
  .eq('id', eventID)
      } catch (error) {
        console.log(error);
        
      }
      } else {
        console.log("rejected");
        
        try {
 const { error } = await supabase
  .from('events')
  .update({ status: eventStatus })
  .eq('id', eventID)
      } catch (error) {
        console.log(error);
        
      }
      }
      
     
      
    }
return(<>
<SidebarProvider>
            <AppSidebar/>
                    <Header data={<>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-2'}>
                  {
                    eventData.map((e)=> {return (      e.status.toLowerCase() =='pending'&&
                        <Card key={e.id} className={'gap-2'}>
                        <img className="w-full min-h-[180px]" src={e.img_url} alt={e.title} />
                        <CardTitle >{e.title} </CardTitle>
                        <div className="flex justify-between items-center flex-wrap gap-y-1.5">
                       <div className=" flex gap-x-2"> <Badge variant={'destructive'}>{e.category}</Badge>
                        <Badge variant={e.status.toLowerCase()==='approved'? 'default':'secondary'}>{e.status}</Badge></div>
                        <div className="flex md:flex-col  gap-2  md:min-w-[80px]">
                           <Button id={'approve'} onClick={(event)=>{setEventId(e.id),setEventStatus("Approved"),addOrRejectEvent(event)}} className={'text-[12px] px-1 border-green-400 border bg-transparent text-black cursor-pointer transition duration-500 hover:text-green-900 hover:bg-green-400 hover:border hover:border-gren-400'} >Approve</Button>
                        <Button onClick={(event)=>{setEventId(e.id),setEventStatus("Rejected"),addOrRejectEvent(event)}} className={'text-[12px] px-1 border-red-400 border bg-transparent text-black cursor-pointer transition duration-500 hover:text-red-900 hover:bg-red-400 hover:border hover:border-gren-400'} >Reject</Button></div>
                       
</div><MapPin className="py-0 my-0" size={18} strokeWidth={0.5} /><span className="flex gap-x-2 items-center text-[14px]"> <UsersRound size={18} strokeWidth={0.5}></UsersRound> asd</span><UsersRound size={18} strokeWidth={0.5}/>
<Link to={`/${e.id}`}>
<Button  className={'w-full'}>View Details</Button></Link>

                      </Card>
                     )})
                  }
                  {/* {eventData.map((e)=>{
                    return(
                      <>
                      <Card key={e.id} className={'gap-2'}>
                        <img className="w-full min-h-[180px]" src={e.img_url} alt={e.title} />
                        <CardTitle >{e.title} </CardTitle>
                        <div className="flex justify-between items-center flex-wrap gap-y-1.5">
                       <div className=" flex gap-x-2"> <Badge variant={'destructive'}>{e.category}</Badge>
                        <Badge variant={e.status.toLowerCase()==='approved'? 'default':'secondary'}>{e.status}</Badge></div>
                        {e.status.toLowerCase() =='pending'?<div className="flex md:flex-col  gap-2  md:min-w-[80px]"> <Button onClick={()=>{setEventId(e.id),setEventStatus("Approved"),addOrRejectEvent()}} className={'text-[12px] px-1 border-green-400 border bg-transparent text-black cursor-pointer transition duration-500 hover:text-green-900 hover:bg-green-400 hover:border hover:border-gren-400'} >Approve</Button>
                        <Button  onClick={()=>{setEventId(e.id),setEventStatus("Rejected"),addOrRejectEvent()}} className={'text-[12px] px-1 border-red-400 border bg-transparent text-black cursor-pointer transition duration-500 hover:text-red-900 hover:bg-red-400 hover:border hover:border-gren-400'} >Reject</Button></div>:""}
                       
</div><MapPin className="py-0 my-0" size={18} strokeWidth={0.5} /><span className="flex gap-x-2 items-center text-[14px]"> <UsersRound size={18} strokeWidth={0.5}></UsersRound> asd</span><UsersRound size={18} strokeWidth={0.5}/>
<Link to={`/${e.id}`}>
<Button className={'w-full'}>View Details</Button></Link>

                      </Card>
                      </>
                    )
                  })} */}

                </div>
                        </>}/>

            </SidebarProvider>
</>)
} 