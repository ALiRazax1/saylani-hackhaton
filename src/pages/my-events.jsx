
import { Header } from "../components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { Context as dataContext } from "@/context/event-data"
import { useContext } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect } from "react"


export function MyEvents(){
    useEffect(()=>{
        async function getData(){
const { data, error } = await supabase
  .from('events')
  .select();
  if (error ) throw error
  if (data)
    console.log('Events Data:',data);
    
    {setEventData(data)}
 }
    getData()},[])
 

return(



  







    <>
    
    <SidebarProvider>
      <AppSidebar/> 
      <Header data={<>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Event</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Location</TableHead>
      <TableHead>Creator</TableHead>
      <TableHead>Status</TableHead>


      <TableHead className="">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="">$250.00</TableCell>
            <TableCell className="">$250.00</TableCell>

      <TableCell className="">$250.00</TableCell>
 
    </TableRow>
  </TableBody>
</Table>

        </>}/>

    </SidebarProvider>


   
    </>
)


}