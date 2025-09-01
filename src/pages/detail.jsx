import { useParams } from "react-router"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { Header } from "@/components/header"
import { useContext } from "react"
import { Context as dataContext } from "@/context/event-data"
import { Card, CardTitle,CardDescription,CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export function ViewDetails(){
    const {id} = useParams()
    const {eventData} = useContext(dataContext)
    const data = eventData.find((e)=> e.id == id)
return (
    <SidebarProvider>
    <AppSidebar/>
    <Header data={
<>

<Card className="mx-2 px-10 gap-y-4">
    <div className="mx-auto max-w-[1000px]"><img src={data.img_url} alt="" /></div> 
   <div className="grid  grid-cols-2 gap-3">
    <CardTitle>
        <h1 className="text-2xl font-semibold my-0">Title</h1>
    <p className="my-0 py-0">{data.title}</p>
    </CardTitle>
        <div>
            <Badge className={'text-[14px] rounded-sm'}>{data.status}</Badge>

        </div>
         
    </div>
    <CardDescription>
        <h2 className="text-xl font-semibold my-0">Description</h2>
    <p className="my-0 py-0">{data.description}</p>
    </CardDescription>
        <div className="grid grid-cols-2 gap-3">
            
    <div>
        <h3>Location</h3>
        <p>{data.location}</p>
    </div>
    <div><h3>Category</h3>
         <p>{data.category}</p>
    </div>
    <div><h3>Creator</h3>
         <p>{data.created_by}</p>
    </div>
    <div><h3>Creation Date</h3>
         <p>{ data.created_at.slice(0,9)} </p>
    </div>
    <div>
        Participants
    </div>
        </div>
    </Card>


</>

    }/>
    </SidebarProvider>
)
}