// import LoginPage from "./pages/login"
// export function App(){
//   return(
//     <>
//     <LoginPage></LoginPage>
//     </>
//   )
// }

// import { Header } from "./components/header"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/dashboard"
import { useRedirect } from "./lib/redirect"

// export  function App() {
//   return (  

//     <SidebarProvider>
//       <AppSidebar />
//       <Header/>
//     </SidebarProvider>

//   )
// }




import { Header } from "./components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { Card,CardTitle,CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "./components/ui/skeleton"
import { MapPin,UsersRound,Clock,CircleCheckBig } from "lucide-react"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { Context as dataContext } from "./context/event-data"
import { Context as userContext } from "./context/user"
export function App(){
  const {eventData,setEventData} = useContext(dataContext)
  const {user} = useContext(userContext)
  const [filteredData, setFilteredData] = useState([])
  const [totalEvevnts,setTotalEvents] = useState(0)
  const [pendingEvents,setPendingEvents] = useState(0)
  const [ApprovedEvents,setApprovedEvents] = useState(0)

    useRedirect()
    useEffect(()=>{
        async function getData(){
const { data, error } = await supabase
  .from('events')
  .select();
  if (error ) throw error
  if (data){
    console.log(data);
    const filtered = data.filter((e)=>e.user_id == user.id ) 
    setFilteredData(filtered)
    let pending =0
    let approved =0
  filtered.forEach((e)=> {if(e.status.toLowerCase()=='pending'){  pending++}
else if(e.status.toLowerCase()=='approved'){ approved++ }
})
setTotalEvents(filtered.length)
setApprovedEvents(approved)
setPendingEvents(pending)
  
  
  
  }
 }
    getData(); 
},[])
 setEventData(filteredData)

return(



  







    <>
    
    <SidebarProvider>
      <AppSidebar/> 
      <Header data={<>
        
         <div className=" my-4 mx-2 grid grid-cols-2  md:grid-cols-4 gap-3">

                    

                
<Card>
                    <CardTitle className={'flex justify-between'}>Total Events </CardTitle>
                                        <CardContent>{totalEvevnts}</CardContent>

                </Card>
                <Card>
                    <CardTitle className={'flex justify-between'}>Approved Events <CircleCheckBig strokeWidth={0.5} /></CardTitle>
                    <CardContent>{ApprovedEvents}</CardContent>
                </Card>
                <Card>
                    <CardTitle className={'flex justify-between'}>Pending Events <Clock strokeWidth={0.5}/></CardTitle>
                                        <CardContent>{pendingEvents}</CardContent>

                </Card>
                <Card>
                    <CardTitle>Participants</CardTitle>
                    <CardContent>{0}</CardContent>
                </Card>
                </div>

                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-2'}>
                  {filteredData.map((e)=>{
                    return(
                      <>
                      <Card className={'gap-2'}>
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
