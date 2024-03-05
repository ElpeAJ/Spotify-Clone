import React from "react";
import './button.css';

function Button(props){
  // if (props.element === "border"){
  return (
    <div>
      <button className={props.element}>{props.content}</button>
    </div>
  );
// } else {
//   return (
//     <div>
//       <button>{props.content}</button>
//     </div>
//     )
//   }
}

export default Button;