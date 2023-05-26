import React from "react"
// 
import Input from "./Input";

function LoggedOut() {
  return (
    <form action="" className="form">
      <Input type="text" placeholder="Username" autoComplete="on" />
      <Input type="password" placeholder="Password" autoComplete="on"/>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoggedOut;