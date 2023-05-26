import React from "react";

function Form() {
  return(
    <form>
      <input type="text" placeholder="Username" autoComplete="on" />
      <input type="password" placeholder="Password" autoComplete="on" />
      <input type="password" placeholder="Confirm Password" autoComplete="on" />
      <button type="submit">Register</button>
    </form>
  );  
}

export default Form;