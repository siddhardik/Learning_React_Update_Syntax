import { useState,useEffect } from "react";

export default function Input(){

    const [name,setName] = useState("Harry");
    const [lastName,setLastname] = useState("Potter");
    const a = 0;
   

    // Use as componentDidMount And componentDidUpdate

    /* useEffect(()=>{
        document.title = name+" "+lastName;
     });
     */

    useEffect(()=>{
        document.title = name+" "+lastName;
    },[name,lastName]); 
    // For [] use as componentDidMount Other use as componentDidUpdate
   
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input"
                            value={name} 
                            onChange={(e)=> setName(e.target.value)}
                    />
            </Row >
            <Row label="Last Name">
                    <input className="input"
                            value={lastName} 
                            onChange={(e)=> setLastname(e.target.value)}
                    />
            </Row >
        </div>

        <h2>Hello, {name + " " +lastName}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
