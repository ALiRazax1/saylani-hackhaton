import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import {Header} from  "../components/header"
import { Card,CardTitle,CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin,UsersRound } from "lucide-react"
import { Context as dataContext } from "@/context/event-data"
import { useContext, useState,useEffect } from "react"
export function ApprovedEvent(){
    const {eventData,setEventData} = useContext(dataContext)



    return(
        <>
        <SidebarProvider>
            <AppSidebar/>
            <Header data={
                <>
                
               
               <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-2'}>
                  {eventData.map((e)=>{
                    return(
                      <>{e.status.toLowerCase() =='approved' && <Card className={'gap-2'}>
                        <img className="w-full min-h-[180px]" src={e.img_url} alt={e.title} />
                        <CardTitle >{e.title} </CardTitle>
                        <div className="flex justify-between items-center flex-wrap gap-y-1.5">
                       <div className=" flex gap-x-2"> <Badge variant={'destructive'}>{e.category}</Badge>
                        <Badge variant={e.status.toLowerCase()==='approved'? 'default':'secondary'}>{e.status}</Badge></div>
                        <Button disabled={e.status.toLowerCase()==='pending'} className={'text-[12px] px-1 border-amber-400 border bg-transparent text-black cursor-pointer transition duration-500 hover:border hover:border-amber-400'} >Add Participant</Button>
</div><MapPin className="py-0 my-0" size={18} strokeWidth={0.5} /><span className="flex gap-x-2 items-center text-[14px]"> <UsersRound size={18} strokeWidth={0.5}></UsersRound> asd</span><UsersRound size={18} strokeWidth={0.5}/>
<Button>View Details</Button>

                      </Card>}
                      
                      </>
                    )
                  })}

                </div>
                
                </>
            }/>


        </SidebarProvider>
        
        </>
    )
}