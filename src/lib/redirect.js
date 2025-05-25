import { supabase } from "@/supabase"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
export  function useRedirect(){
   const location = useLocation()
    const navigator = useNavigate()
    useEffect(()=>{async function checkSession(){ const { data, error } = await supabase.auth.getSession()
    try {
        if (error) throw error
        if (data.session){ navigator("/dashboard")}
        if(!data.session && (location.pathname == ("/Dashboard" ||"/"))){navigator("/signup")}
    } catch (error) {
        console.log(error.message);
        
    }}checkSession()},[])
    
   
}