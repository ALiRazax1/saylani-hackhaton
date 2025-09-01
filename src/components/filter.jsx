import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp,Search } from "lucide-react"
import { useState } from "react"





export function Filter(){
    const[order,setOrder] = useState("A-Z")
function changeOrder(){
    if(order == "A-Z"){setOrder("Z-A")}
    else{setOrder("A-Z")}

}
    return(
        <div className="flex flex-wrap gap-4 items-center p-4 ">
           <div className="flex items-center relative"> <Search  className="absolute left-[85%] cursor-pointer hover:text-amber-400" strokeWidth={1.5} size={20}/><Input placeholder="Search" className={"w-[250px]"}  /></div>
<Select  >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select Status" />
      </SelectTrigger >
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Approved">Approved</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button onClick={changeOrder} variant={"outline"} className={""}>{order =="A-Z"? <><ArrowUp/>A-Z</>:<><ArrowDown/>Z-A</>}</Button>
        </div>
    )
}
