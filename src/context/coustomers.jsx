import { createContext, useState } from "react";

export const Customers = createContext("")


export function CustomersProvider({children}){

  

    const [customerData , setCustomerData] = useState({})


  


    return (
        <>
        <Customers.Provider value={{customerData, setCustomerData}} >
            {children}
        </Customers.Provider>
        </>
    )
    
}