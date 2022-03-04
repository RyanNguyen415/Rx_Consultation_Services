import { createContext, useEffect, useState } from "react"

export const ContextApi = createContext([]);

function Context({children}) {

    const [carts,setCarts] = useState(null);
    const [consultation,setConsultation] = useState(null);

    const cartStorageName = 'pharmacy_nextjs_carts'
    const consultationStorageName = 'pharmacy_nextjs_consultation'

    useEffect(()=>{
        const cartData = localStorage.getItem(cartStorageName);
        if(cartData){
            const newData = JSON.parse(cartData)
            if(newData.length > 0){
                setCarts(newData)
            }
            // console.log(newData)
        }
        const consultationData = localStorage.getItem(consultationStorageName);
        if(consultationData){
            const newData = JSON.parse(consultationData)
            if(Object.keys(newData).length > 0){
                setConsultation(newData)
            }
            // console.log(newData)
        }
    },[])
    //its job is only to update localstorage when items are added
    useEffect(()=>{
        const cartData = localStorage.getItem(cartStorageName);
        if(!carts) return
        if(!cartData){
            const jsonData = JSON.stringify(carts)
            localStorage.setItem(cartStorageName,jsonData);
        }else{
            const jsonData = JSON.stringify(carts)
            localStorage.setItem(cartStorageName,jsonData);
        }
        return 'success'
    },[carts])
    
    //its job is only to update localstorage when items are added
    useEffect(()=>{
        const consultationData = localStorage.getItem(consultationStorageName);
        if(!consultation){
            return
        }
        if(!consultationData){
            const jsonData = JSON.stringify(consultation)
            localStorage.setItem(consultationStorageName,jsonData);
        }else{
            const jsonData = JSON.stringify(consultation)
            localStorage.setItem(consultationStorageName,jsonData);
        }
        return 'success'
    },[consultation])

    return (
        <ContextApi.Provider value={{carts,setCarts,consultation,setConsultation, cartStorageName,consultationStorageName}}>
            {children}
        </ContextApi.Provider>
    )
}

export default Context
