import React from "react";
import './button.module.css';

function Button(props){
  // if (props.element === "border"){
  return (
    <div>
      <button className={props.element}>{props.content}</button>
    </div>
  );
}

export default Button;