import { Header } from "@/components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard"
import { Table } from "@/components/ui/table"

export function MyEvents(){
    return(
        <>
        <SidebarProvider>
<AppSidebar>
<Header />

</AppSidebar>

        </SidebarProvider>
        
        
        </>
    )
}