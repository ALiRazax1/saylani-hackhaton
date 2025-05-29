import { SidebarTrigger } from "./ui/sidebar";
export function Header({data}) {
  return (
    <>
      <div className="w-full">
       <div id="header" className="bg-amber-300 h-[60px] mb-5 w-full"> <SidebarTrigger className={'text-black hover:bg-transparent hover:text-shadow-gray-400 cursor-pointer'}/></div>
       {data}
      
      </div>
      
    </>
  );
}
