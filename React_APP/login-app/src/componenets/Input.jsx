import React from "react";

function Input(props) {
  return (
    <div>
      <input 
        type = {props.text} 
        placeholder = {props.placeholder} 
        autoComplete = {props.autoComplete}
        onChange = {props.onChange}
        value = {props.value}
        
        />
    </div>
  )
}

export default Input;