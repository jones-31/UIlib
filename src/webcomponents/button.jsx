import "./../styles/button.css";
import React from "react";
import ReactDOM from "react-dom/client";


const Button = ({ label, className, id, ...props }) => {
  return (
    <button className={className} id={id} {...props}>
      {label}
    </button>
  );
};
export default Button;

class CustomButton extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") || "Submit";
    const className = this.getAttribute("class") || "btn-success";
    const id = this.getAttribute("id") || "";

    // Automatically get user-defined events like onclick, onkeydown
    const props = {};
    for (const attr of this.getAttributeNames()) {
      if (attr.startsWith("on")) {
        const eventType = attr.slice(2).toLowerCase();
        props[eventType] = new Function("event", this.getAttribute(attr));
      }
    }

    const root = ReactDOM.createRoot(this);
    root.render(<Button label={label} className={className} id={id} {...props} />);
  }
}

customElements.define("bsdk-button", CustomButton);


