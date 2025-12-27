import { useState } from "react"
import LightSwitch from "./LightSwitch";
export default function Room () {
    const [isOn,setIsOn] = useState(false);

    const toggleLight = () =>{
        setIsOn(prev => !prev);
    };

    return(
        <div>
            <p>{isOn? "THE ROOM IS BRIGHT":"THE ROOM IS DARK"}</p>
            <LightSwitch isOn= {isOn} toggleLight={toggleLight}/>
        </div>
    );
}