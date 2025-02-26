import React from "react";
import ReactDOM from "react-dom/client";
import "./textbox.css";


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

// class CustomTextBox extends HTMLElement {
//   connectedCallback() {
//     const placeholder = this.getAttribute("placeholder") || "";
//     const className = this.getAttribute("class") || "input-field";
//     const id = this.getAttribute("id") || "";

//     const shadow = this.attachShadow({ mode: "open" });
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "./src/textbox.css";  
//     shadow.appendChild(link);

//     shadow.appendChild = `
//     <div class="${className}">
//         <input type="text" id="${id}" placeholder="${placeholder}" />
//         <label>${placeholder}</label>
//       </div>
//   `;

//     for (const attr of this.getAttributeNames()) {
//       if (attr.startsWith("on")) {
//         const eventType = attr.slice(2).toLowerCase();
//         shadow.querySelector("input").addEventListener(eventType, new Function("event", this.getAttribute(attr)));
//       }
//     }
 
//   }
// }

// customElements.define("bsdk-textbox", CustomTextBox);
