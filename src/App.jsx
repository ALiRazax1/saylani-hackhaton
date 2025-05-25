// import LoginPage from "./pages/login"
// export function App(){
//   return(
//     <>
//     <LoginPage></LoginPage>
//     </>
//   )
// }

import { Header } from "./components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { useRedirect } from "./lib/redirect"

export  function App() {
  useRedirect()
  return (  

    <SidebarProvider>
      <AppSidebar />
      <Header/>
    </SidebarProvider>

  )
}
