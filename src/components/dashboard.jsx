import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Link } from "react-router"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu customers.
// for customers
const customers = [
  {
    title: "My Events",
    url: '/my-events',
    icon: Home,
  },
  {
    title:'Approved Events',
    url:'/approved-events',
    icon:Home
  },
  {title:'Create Event',
  url:'/create-event',
  icon:Home

  },
  {
    title:'Logout',
    url:'login',
    icon:Home,
  }
]


// for admin
const admin = [
    {
      title: "All Events",
      url: "/all-events",
      icon: Home,
    },
    {
      title: "Pending events",
      url: "/pending-events",
      icon: Inbox,
    },
    {
      title: "Costumers List",
      url: "/list",
      icon: Calendar,
    },
   {
    title:'Logout',
    url:'login',
    icon:Home
   }
  ]

export function AppSidebar() {
async function logOut(){
  const { error } = await supabase.auth.signOut()
}


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customers.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
