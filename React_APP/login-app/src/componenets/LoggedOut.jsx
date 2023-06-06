import React, {useState} from "react"
// 
import Input from "./Input";

function LoggedOut() {
  // Change Heading on Login button
  const [headingText, setHeadingText] = useState("Hello");
  const [u_name, setU_Name] = useState("")

  function update_u_name(event) {
    const username = event.target.value;
    // console.log(username)
    setU_Name(username);
  
  }

  function handleClick(event) {
    setHeadingText("Logged In");  
    
    // This will prevent default behaiviour of form refersh on button click
    event.preventDefault();
  }

  // Change Heading on Login button
  const [isMousedOver, setMousedOver] = useState(false);
  function handleMouseOver() {
    setMousedOver(true)    
  }

  // Change Heading on Login button
  function handleMouseOut() {
    setMousedOver(false)    
  }

  return (
    <div>
    <h1>{headingText} {u_name}</h1>
    <form action = "" className = "form">
      {/* inputs will be passed to Input.jsx component */}
      <Input type = "text" placeholder = "Username" autoComplete = "on" 
        onChange = {update_u_name} value = {u_name}/>

      <Input type = "password" placeholder="Password" autoComplete = "on"/>

      <button type = "submit" onClick = {handleClick} 
        style = {{backgroundColor : isMousedOver ? "black" : "white", 
          cursor : isMousedOver ? "auto" : "pointer"}}
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
        >Login</button>

    </form>
    </div>
  );
}

export default LoggedOut;