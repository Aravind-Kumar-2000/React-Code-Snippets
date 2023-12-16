import React from "react";
import {useState, useEffect} from "react";

function UseEffectHook(){
    const [count, setCount] = useState(1);

    function handleMultiplication(){
        setCount(()=>
            count * 2
        );//We can assign an anonymous function to a setCount()
    }

    function handleDivision(){
        const counting = count / 3;
        setCount(counting);//We can also assign a variable to a setCount()
    }

    useEffect(()=>{
        console.log("Changed");
    },[count]);//Whenever the count state changes, the function will executed in the terminal

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>handleMultiplication()}>Multiply</button>
            <button onClick={()=>handleDivision()}>Division</button>
        </div>
    )
}

export default UseEffectHook;