import { LoginForm } from "@/components/login-form"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useNavigate } from "react-router"
import { useRedirect } from "@/lib/redirect"
export default function SignupPage() {
const [emailInp,setEmailInp]=useState('')
const [passwordInp,setPasswordlInp]=useState('')
const [userName,setUserName] = useState('')
const navigate = useNavigate()
useRedirect()
    async function signupUser(){
      try {const { data, error } = await supabase.auth.signUp({
        email: emailInp,
        password: passwordInp,
        options:{
          data:{
            name:userName
          }
        }
      })
      navigate('/login')
        if (error) throw error
      } catch (error) {
        console.log(error.message);
      }
    }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm pageTitile={'SignUp Now'} userNameLabel={<Label htmlFor="email">Full Name</Label>
} userNameInput={<Input id="user" type="text" placeholder="John" required onChange={(e)=>setUserName(e.target.value)} />} emailInput={(e)=>{setEmailInp(e.target.value)}} passwordInput={(e)=>{setPasswordlInp(e.target.value)}} btnTitle1={'SignUp'} btnFunc={signupUser} btnTitle2={'Login'} link={'/login'} />
      </div>
    </div>
  )
}
