import { SidebarTrigger } from "./ui/sidebar";
export function Header({data}) {
  return (
    <>
      <div className="flex flex-col col w-full ">
        <div className="bg-amber-300 h-[60px]" >
        <SidebarTrigger/>

        </div>
       {data}
      </div>
    </>
  );
}
