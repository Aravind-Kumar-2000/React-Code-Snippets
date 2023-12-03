import React from "react";
import {useState} from "react";

function UseStateHook(){

    //Increment and Decrement using useState()
    const [count,setCount] = useState(0);
    function increment(){
        setCount(()=>{
            return count + 1;
        })
    }
    function decrement(){
        setCount(()=>{
            return count - 1;
        })
    }

    //Name change using useState()
    const [name, setName] = useState("Aravind");
    function nameChange(){
        const name = ["Praveen", "Sharan", "Aravind"];
        const int = Math.floor(Math.random()*3);
        setName(()=>{
            return name[int];
        })
    }


    return(
        <div>
            <div>
                <p style={{marginLeft:"90px"}}>{count}</p>
                <button onClick={increment}>Increment +</button>
                <button onClick={decrement}>Decrement -</button>
            </div>
            <div>
                <p>My name is {name}</p>
                <button onClick={nameChange}>Change</button>
            </div>
        </div>
    )
}

export default UseStateHook;