import { createContext, useState } from "react";

export const Context = createContext("")


export function MyProvider({children}){

  

    const [user , setUser] = useState({})


    const values = {
        user ,
        updateUser: (data) => setUser(data)
    }

  


    return (
        <>
        <Context.Provider value={values} >
            {children}
        </Context.Provider>
        </>
    )
    
}