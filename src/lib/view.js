import { useNavigation } from "react-router"
import { Context as eventContext } from "@/context/event-data"
import { useContext } from "react"
export function vuewDetails(){
    const navigation = useNavigation()
    const {eventData} = useContext(eventContext)
    

}