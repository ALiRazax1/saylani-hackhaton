import { supabase } from "@/lib/supabase"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { useContext } from "react"
import { Context } from "@/context/user"
export  function useRedirect(){
    const {updateUser} = useContext(Context)
    
   const location = useLocation()
    const navigator = useNavigate()
    useEffect(()=>{async function checkSession(){ const { data, error } = await supabase.auth.getSession()
    try {
        if (error) throw error
        if (data.session &&  ["/login", "/signup"].includes(location.pathname)){
            navigator("/");
        }
        if(!data.session &&  !["/login", "/signup"].includes(location.pathname)){navigator("/login")}
        console.log(data.session.user)
        updateUser(data.session.user)
        
    } catch (error) {
        console.log(error.message);
        
    }
    finally{
        
    }
}checkSession()},[])
    
   
}