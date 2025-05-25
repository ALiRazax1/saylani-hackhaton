import { GalleryVerticalEnd } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { LoginForm } from "@/components/login-form";
import { Navigate, useNavigate } from "react-router";
import { useState } from "react";
import { Context } from "@/context/user";
import { useContext } from "react";
export default function LoginPage() {
  const navigate = useNavigate();
  const [emailInput, setEmailInp] = useState("");
  const [passwordInput, setPasswordlInp] = useState("");
  const { updateUser } = useContext(Context);
  async function loginUser() {

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput,
      });

      if (data) {
        console.log(data.user);
        updateUser(data.user);
    navigate("/");

      }
      if (error) throw error;
    } catch (error) {}
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm
              pageTitile={"Login To Your Account"}
              btnTitle1={"Login"}
              btnTitle2={"Signup"}
              link={"/Signup"}
              emailInput={(e) => {
                setEmailInp(e.target.value);
              }}
              passwordInput={(e) => {
                setPasswordlInp(e.target.value);
              }}
              btnFunc={loginUser}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://media.istockphoto.com/id/540526464/photo/brilliant-ideas-in-the-making.jpg?s=612x612&w=0&k=20&c=N0YpZIKuldV0LfmKeLUl_nIkQrjDWbqk8W1vaEyyOrY="
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
