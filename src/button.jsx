import "./button.css";
import React from "react";
import ReactDOM from "react-dom/client";

const Button = ({ label, className, events = {}, id }) => {
  return (
    <button
      className={className}
      id={id}
      ref={(btn) => {
        if (btn && events) {
          Object.keys(events).forEach((eventName) => {
            btn.addEventListener(eventName, events[eventName]);
          });
        }
      }}
      value={label}
    >{label}</button>
  );
};

class CustomButton extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") || "Submit";
    const className = this.getAttribute("class") || "btn-success";
    const id = this.getAttribute("id") || "";

    const events = {};
    for (const attr of this.getAttributeNames()) {
      if (attr.startsWith("on")) {
        const eventtype = attr.slice(2).toLowerCase();
        try {
          events[eventType] = (event) => new Function("event", this.getAttribute(attr)).call(this, event);
        } catch (error) {console.error(`Error processing ${attr}:`, error);}
      }
    }

    const root = ReactDOM.createRoot(this);
    root.render(
      <Button label={label} className={className} id={id} events={events} />
    );
  }
}

customElements.define("Bsdk-Button", CustomButton);

//export default Button;
