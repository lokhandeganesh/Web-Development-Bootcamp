import React from 'react';
// 

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Form from "./Form";



// Conditional (ternary) operator
// condition ? exprIfTrue : exprIfFalse

// function example() {
//   return condition1 ? value1
//         : condition2 ? value2
//         : condition3 ? value3
//         : value4;
// }

// var isLoggedIn = false;
var userRegistered = true;

function App () {
  return (
    <div className="container">
      {/* {isLoggedIn ? <LoggedIn /> : <LoggedOut />} */}
      {userRegistered ? <LoggedOut /> : <Form />}
    </div>
  );
}

export default App;