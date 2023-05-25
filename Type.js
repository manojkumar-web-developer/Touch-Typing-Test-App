import { useContext,createContext,useState, useEffect } from "react";

export const TypeContext=createContext(null)

const TypeContextProvider=({children})=>{
    const [count,setCount]=useState(0)
    const [timer,setTimer]=useState(true)

    useEffect(()=>{
        let timerId;
        if(timer){
         setCount(60 * 5 ); 
         timerId=setInterval(()=>{
            setCount((count)=>count-1)
         },1000)
        }
        return()=>clearInterval(timerId)
    },[timer])

    useEffect(()=>{
        if(count<0 && timer){
            setTimer(false)
            setCount(0)
        }

    },[count,timer])

    const seconds=String(count%60).padStart(2,0);
    const minutes=String(Math.floor(count/60)).padStart(2,0);


    return(
        <TypeContext.Provider value={{minutes,seconds}}>
            {children}
        </TypeContext.Provider>
    )
}

export const UseTypeContext=()=>{
    const {minutes,seconds}=useContext(TypeContext)
    return {minutes,seconds};
}

export default TypeContextProvider