import React, {useState} from "react";

function Form() {
  // 
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  // 
  function handleChange(event) {
    setName(event.target.value);
  }

  // 
  function handleClick(event) {
    setHeadingText(name);

    // This will prevent default behaiviour of form refersh on button click
    event.preventDefault();
  }

  return(
    <div>
      <h1>Hello {headingText}</h1>
    
      <form>
        <input type="text" placeholder="Username" 
          autoComplete="on" onChange = {handleChange} 
          value = {name} />
        <input type="password" placeholder="Password" autoComplete="on" />
        <input type="password" placeholder="Confirm Password" autoComplete="on" />
        <button type="submit" onClick = {handleClick}>Register</button>
      </form>
    </div>
  );  
}

export default Form;