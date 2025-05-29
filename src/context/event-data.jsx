import { createContext, useState } from "react";

export const Context = createContext("")


export function DataProvider({children}){

  

    const [eventData , setEventData] = useState({})


  


    return (
        <>
        <Context.Provider value={{eventData, setEventData}} >
            {children}
        </Context.Provider>
        </>
    )
    
}