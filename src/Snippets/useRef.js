import React from "react";
import { useRef } from "react";

const UseRefHook = () => {
  const refer = useRef(0);

  //Accessing DOM
  const inputReference = useRef();

  return (
    <div>
      <h1>Current Value:{refer.current}</h1>
      <form>
        <input type="text" ref={inputReference} required />
        <button type="submit" onClick={() => inputReference.current.focus()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefHook;
