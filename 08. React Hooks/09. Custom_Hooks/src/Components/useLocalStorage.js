 import { useState , useEffect } from "react";
 export default function useLocalStorage(){
    const [email, setEmail] = useState("");
    useEffect(() => {
        if(localStorage.getItem("email")){
          setEmail(localStorage.getItem("email"));
        }
      },[]);
    
    
      useEffect(() => {
        localStorage.setItem("email", email);
      },[email]);

      return {email,setEmail};
}