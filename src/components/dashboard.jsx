import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Link, useLocation } from "react-router"
import { NavLink } from "react-router"

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
    url: '/',
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
    url:'/login',
    icon:Home,
  }
]


// for admin
const admin = [
    {
      title: "All Events",
      url: "/admin/all-events",
      icon: Home,
    },
    {
      title: "Pending events",
      url: "/admin/pending-events",
      icon: Inbox,
    },
    {
      title: "Costumers List",
      url: "admin//list",
      icon: Calendar,
    },
   {
    title:'Logout',
    url:'/login',
    icon:Home
   }
  ]
export function AppSidebar() {
  const location = useLocation()
  let sidebarItems;
  if(location.pathname.includes('admin')){ sidebarItems = admin}
  else{sidebarItems = customers}
async function logOut(){
  const { error } = await supabase.auth.signOut()
}


  return (
    <Sidebar >
      <SidebarContent className={'shadow-md hover:shadow-lg transition-shadow duration-300 shadow-gray-400'}>
        <SidebarGroup >
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu >
              {sidebarItems.map((item) => (
                  <NavLink key={item.title} className={({ isActive }) => 
                    isActive ? "text-shadow-black  bg-amber-300" : ""
  } onClick={item.title=='Logout'? logOut:null} to={item.url}>
                <SidebarMenuItem >
                  <SidebarMenuButton className={'font-semibold hover:bg-amber-300'} asChild>
                  <div><item.icon />
                      <span>{item.title}</span></div>
                      
                    
                  </SidebarMenuButton>
                </SidebarMenuItem></NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
