import React from "react";
import ReactDOM from "react-dom/client";
import "./../styles/textbox.css";


const Textbox = ({ placeholder = "", className = "input-field", id = "", ...props }) => {
  return (
    <div className={className}>
      <input
        placeholder={placeholder}
        id={id}
        {...props}
        type="text"
      ></input>
      <label>{placeholder}</label>
    </div>
  );
};

export default Textbox;

