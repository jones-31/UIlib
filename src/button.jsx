import './button.css';
import React from 'react';
import ReactDOM from 'react-dom/client'

const Button = ({label,className }) => {
return(
    <button className={className}  >
       {label}
    </button>
);
}

class CustomButton extends HTMLElement{
    connectedCallback(){
        const label = this.getAttribute("label") || "Submit";
        const className = this.getAttribute("class") || "btn-success";
        const root = ReactDOM.createRoot(this);
        root.render(<Button label={label} className={className} />);
    } 
}


customElements.define("Bsdk-Button",CustomButton);