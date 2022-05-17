import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { onBlast, children, name } = props;
  
  return (
      <button onClick={onBlast}>{children}</button>
    )
};

const Application = () => {
  const [name, setName] = useState("");
  // your code here

  const reset = () => {
    console.log("reset");
   
      setName("")
    
    // your code here
  };

  return (
    <main>
      <input
        placeholder="type your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      {name && <Button onBlast={reset} name={name}>Reset</Button>}
      {/* <Button onClick={() => {console.log("you clicked submit")}}>Submit</Button> */}
      {/* your code here -- this entire line including the curly braces can be removed */}

      {name &&<h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
