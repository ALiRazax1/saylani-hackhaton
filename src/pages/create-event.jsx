import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "../components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { Context } from "@/context/user"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRedirect } from "@/lib/redirect"


export function CreateEvent(){
  useRedirect()
  const [alert,setAlert] =useState(null)
  const [eventName,setEventName]=useState('')
  const [eventDes,setEventDes] = useState('')
  const [location,setLocation] = useState('')
  const [category,setCategory] = useState('')
  const [image,setImage] = useState('')
  // const [publicUrl,setPublicUrl] = useState('')
  const { user} = useContext(Context);
  // checking bucket
  let url=''

async function uploadFile(){
  if(!image) return console.log('Please upload a file');
  else if(!image.type.startsWith("image/")){console.log("Only image File Allowed");
  }
  try {
    
    const { data:imgData, error:imgError } = await supabase
  .storage
  .from('event-img/images')
  .upload(image.name, image, {
    cacheControl: '3600',
    upsert: false
  })
  const { data:urlData } = supabase
  .storage
  .from('event-img/images')
  .getPublicUrl(image.name)
  if(urlData){ url =urlData.publicUrl
  }
    if (imgError) throw imgError
  } catch (error) {
    console.log(error.message);
    
  }
}

  // alert message 
  async function showAlert(){
      if((!eventName || !eventDes || !category || !location) ){
       setAlert(false)
       console.log(user.id);
      }else{
        console.log(user);
       await uploadFile()
      await  uploadData()
      }
    }
  async function uploadData(){
    // console.log(publicUrl);
    
    
try {
  const { error } = await supabase
  .from('events')
  .insert({ user_id:user.id ,title: eventName,description:eventDes,status:'Pending',category:category,location,"created-by":user.user_metadata.name,img_url:url})
  setAlert(true)
 setCategory('')
  setEventDes('')
  setEventName('')
  setLocation('')
} catch (error) {
  console.log(error);
}
     
  }
 

return(



  







    <>
    
    <SidebarProvider>
      <AppSidebar />
      <Header data={

<> 
<div className="max-w-4xl mx-auto mt-4 px-3">
   
    
          <Label className="mb-2 mx-auto text-sm text-slate-900 font-medium block">Event Name</Label>
          <div className="relative flex items-center my-3">
            <Input type="text" placeholder="Event Name" onChange={(e)=>setEventName(e.target.value)}
              className="px-4 mx-auto py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded transition-all" />
            



          </div>
          <div className="grid grid-cols-2 gap-x-4 mb-3  mx-auto">
 <Label className={''}>Category</Label>
 <Label className={''}>Location</Label>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3  mx-auto">
<Select onValueChange={(value) => setLocation(value)} >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Location</SelectLabel>
          <SelectItem value="Karachi">Karachi</SelectItem>
          <SelectItem value="Lahore">Lahore</SelectItem>
          <SelectItem value="Islamabad">Islamabd</SelectItem>
          <SelectItem value="Quetta">Quetta</SelectItem>
          <SelectItem value="Faisalabad">Faisalabad</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>


    <Select onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className="w-full border hover:border-amber-300">
        <SelectValue placeholder="Select a Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem  value="hackaton">Hackaton</SelectItem>
          <SelectItem value="webinar">Webinar</SelectItem>
          <SelectItem value="seminar">Seminar</SelectItem>
          <SelectItem value="industry conferences">Industry Conferences</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>

</div>
<Label className={'mx-auto mb-3'}>Description</Label> 
<div className="flex items-center">
          
          <Textarea className={'mx-auto'} onChange={(e)=>setEventDes(e.target.value)}/>
</div>
          
          </div>
{/* fule input */}
<div className="mx-30  ">

  {image? <div className="text-center"><img className="my-3 text-center" src={URL.createObjectURL(image)} alt="" /></div> :<Label  htmlFor="uploadFile1"
      className="bg-white  my-3 text-slate-500 font-semibold text-base rounded  h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed  ">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-3 fill-gray-500" viewBox="0 0 32 32">
        <path
          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
          data-original="#000000" />
        <path
          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
          data-original="#000000" />
      </svg>
      Upload file

      <Input onChange={(e)=>setImage(e.target.files[0])} type="file" id='uploadFile1' className="hidden bg-black" />
      <p className="text-xs font-medium text-slate-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
    </Label>}
    
    </div>
    {/* <Button onClick={uploadData} className={'w-[50%] block mx-auto'}>Submit Request</Button> */}





<AlertDialog>
      <AlertDialogTrigger asChild>
         <Button onClick={showAlert} className={'w-[95%] md:w-[50%] block mx-auto'}>Submit Request</Button>
        {/* <Button variant="outline">Show Dialog</Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alert?"Success":"Error"}</AlertDialogTitle>
          <AlertDialogDescription>
            {alert?"Your Request Submitted Successfully" : "Please Fill All The Fields"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={'w-[90%] mx-auto md:mx-0  md:w-24'}>Ok</AlertDialogCancel>
          
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
 
<button onClick={uploadFile}>Bucket checker</button>


    </>

      }/> 
     
    </SidebarProvider>


   
    </>
)


}