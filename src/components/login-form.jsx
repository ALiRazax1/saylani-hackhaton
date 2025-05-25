import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"
export function LoginForm({
  className,
  pageTitile,
  pageDes,
  userNameLabel,
  userNameInput,
  emailInput,
  passwordInput,
  btnTitle1,
  btnFunc,
btnTitle2,
link,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{pageTitile}</h1>
        <p className="text-muted-foreground text-sm text-balance">
{pageDes}
        </p>
      </div>-
      <div className="grid gap-6">
      <div className="grid gap-3">
          {userNameLabel}
          {userNameInput}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required onChange={emailInput} />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input onChange={passwordInput} id="password" type="password" required />
        </div>
        <Button onClick={btnFunc} type="button" className="w-full bg-amber-300">
          {btnTitle1}
        </Button>
       
        
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={link} className="underline underline-offset-4">
          {btnTitle2}
        </Link>
      </div>
    </form>
  );
}
