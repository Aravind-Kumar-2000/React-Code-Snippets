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

    return(
        <div>
            <div>
                <p style={{marginLeft:"90px"}}>{count}</p>
                <button onClick={increment}>Increment +</button>
                <button onClick={decrement}>Decrement -</button>
            </div>
        </div>
    )
}

export default UseStateHook;