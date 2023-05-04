/* /* Multi line comment with Escape slashes *\/ */

// Data Types

/*
* String 
* Number 
* Boolean

You can check data type by using typeof(element)
*/

// Variables

/* 
var name = "Ganesh";
console.log(`My name is ${name}`);
// My name is Ganesh

*/

// Strings
/*

* index start at 0

* string concatination 
var a + var b ;

* get number of characters inside word using function - 
length()

* 
*/

// Numbers
/*
increment/ decrement
+=
-=
*=
/=
--------
*/

// Functions

/*

* Creatin Function
function functionName (Variables){
  logic
}

* Calling Function
functionName(varianles_input)

*/

// Comparators and Equality
/*
=== is equal to (equal to variable value and data type)
!== is not equal to (not equal to variable value and data type)
>   is greater than
<   is lesser than
>=  is greater than or equl to 
<=  is lesser than or equal to

&&  AND
||  OR
!   NOT

*/

// Control Statements
/*

* While Loop

while (something is true){
  // Do something
}

* For loop

      start   end     change
        |       |       |
for ( i=0;    i<2;    i++   ){
  // Do something
}

*/

// Dropdown Select menu
/*
$(document).ready(function () {
  $("#village-select-menu").change(function () {
    alert($("#village-select-menu option:selected").text());
  });
});
*/

// fibonacci series
/*
function fibonacciGenerator(n){
  var fibonacciArray = [];
  
  // Generating Numbers upto input number
      if (n === 1){
          fibonacciArray = [0];
      }
      else if (n === 2){
          fibonacciArray = [0,1];
      }
      else if (n >= 3) {
          fibonacciArray = [0 ,1];
          
          for (var i = 2; i < n; i++){
              fibonacciArray.push(
                  fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1]
              );
          };
      }
      else{
          console.log("error");
      }
  
  return (fibonacciArray);
};
*/