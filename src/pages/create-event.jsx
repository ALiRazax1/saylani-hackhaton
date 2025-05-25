import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "../components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CreateEvent(){
  const [eventName,setEventName]=useState('')
  const [eventDes,setEventDes] = useState('')
  const [location,setLocation] = useState('')
  const [category,setCategory] = useState('')
  async function uploadData(){
try {
  const { error } = await supabase
  .from('events')
  .insert({ title: eventName,description:eventDes,status:'Pending',category:category,location })
} catch (error) {
  console.log(error);
}
    
  }
 

return(



  







    <>
    
    <SidebarProvider>
      <AppSidebar />
      <Header data={

<> <div className="max-w-4xl mx-auto mt-4 w-[2000px] px-3">
          <Label className="mb-2 text-sm text-slate-900 font-medium block">Event Name</Label>
          <div className="relative flex items-center my-3">
            <Input type="text" placeholder="Event Name" onChange={(e)=>setEventName(e.target.value)}
              className="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded transition-all" />
            



          </div>
          
          <Label className="mb-2 text-sm text-slate-900 font-medium block">Loaction</Label>
          <div className="relative flex items-center my-3">
            <Input type="text" placeholder="Location " onChange={(e)=>setLocation(e.target.value)}
              className="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded transition-all" />
            
          </div>
          
          <Label className="mb-2 text-sm text-slate-900 font-medium block">Category</Label>
          <div className="relative flex items-center my-3">
            <Input type="text" placeholder="Category " onChange={(e)=>setCategory(e.target.value)}
              className="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded transition-all" />
            
          </div>

          <Label>Description</Label>
          <Textarea onChange={(e)=>setEventDes(e.target.value)}/>

          
          </div>

<div className="flex justify-center ">
    <Label htmlFor="uploadFile1"
      className="bg-white w-[2000px] my-3 text-slate-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed  ">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-3 fill-gray-500" viewBox="0 0 32 32">
        <path
          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
          data-original="#000000" />
        <path
          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
          data-original="#000000" />
      </svg>
      Upload file

      <input type="file" id='uploadFile1' className="hidden" />
      <p className="text-xs font-medium text-slate-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
    </Label>
    </div>
    <Button onClick={uploadData} className={'w-[50%] mx-auto'}>Submit Request</Button>

    </>

      }/> <br />
     
    </SidebarProvider>


   
    </>
)


}