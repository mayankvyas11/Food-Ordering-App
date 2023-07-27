import { useState , useEffect } from "react";
const useonline = ()=>{
  const [isonline , setisonline] = useState(true);
  useEffect(()=>{
   window.addEventListener("online",()=>{
    setisonline(true);
   })
   window.addEventListener("ofline",()=>{
    setisonline(false);
   })
  },[])
  return isonline;
}

export default useonline;