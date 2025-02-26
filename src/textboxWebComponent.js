// class CustomTextBox extends HTMLElement {
//     connectedCallback() {
//       const placeholder = this.getAttribute("placeholder") || "";
//       const className = this.getAttribute("class") || "input-field";
//       const id = this.getAttribute("id") || "";
  
//       // ✅ Create Shadow DOM
//       const shadow = this.attachShadow({ mode: "open" });
  
//       // Style
//       const style = document.createElement("style");
//     style.textContent = `
//       .input-field {
//         display: flex;
//         justify-content: center;
//         position: relative;
//         width: 80%;
//         min-height: 40px;
//         min-width : 200px;
//       }
//       .input-field input {
//         width: 100%;
//         padding: 10px;
//         font-size: 16px;
//         border: 2px solid #ccc;
//         border-radius: 5px;
//         outline: none;
//         transition: border 0.3s ease-in-out;
//       }
//       .input-field label {
//         position: absolute;
//         top: 45% !important;
//         left: 5% !important;
//         transform: translateY(-50%);
//         font-size: 20px;
//         color: #6c6c6c;
//         pointer-events: none;
//         transition: 0.3s;
//       }
//       .input-field input:focus {
//         border: 3px solid red;
//       }
//       .input-field input:focus ~ label,
//       .input-field input:valid ~ label {
//         top: 10px !imoprtant;
//         left: 1%;
//         font-size: 14px;
//         padding: 0 5px;
//         background: transparent;
//         color: white;
//       }
//     `;


//       // ✅ Load CSS inside Shadow DOM
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "./src/textbox.css"; // Update with your real CDN
//       shadow.appendChild(link);
  
//       // ✅ Create input and label
//       const wrapper = document.createElement("div");
//       wrapper.className = className;
  
//       const input = document.createElement("input");
//       input.type = "text";
//       input.id = id;
//       //input.placeholder = placeholder;
  
//       const label = document.createElement("label");
//       label.textContent = placeholder;
  
//       shadow.appendChild(style);
//       wrapper.appendChild(input);
//       wrapper.appendChild(label);
//       shadow.appendChild(wrapper);
  
//       // ✅ Attach user-defined event listeners
//       for (const attr of this.getAttributeNames()) {
//         if (attr.startsWith("on")) {
//           const eventType = attr.slice(2).toLowerCase();
//           input.addEventListener(eventType, new Function("event", this.getAttribute(attr)));
//         }
//       }
//     }
//   }
  
//   // ✅ Define custom element
//   customElements.define("bsdk-textbox", CustomTextBox);





class CustomTextBox extends HTMLElement {
    connectedCallback() {
      const placeholder = this.getAttribute("placeholder") || "";
      const className = this.getAttribute("class") || "";
      const id = this.getAttribute("id") || "";
  
      // ✅ Create wrapper for the input field
      const wrapper = document.createElement("div");
      wrapper.className = `input-field ${className}`; // Allows user-defined class
  
      const input = document.createElement("input");
      input.type = "text";
      input.id = id;
      input.placeholder = "";
  
      const label = document.createElement("label");
      label.textContent = placeholder;
  
      // ✅ Append everything inside the custom element (no Shadow DOM)
      wrapper.appendChild(input);
      wrapper.appendChild(label);
      this.appendChild(wrapper);
  
      // ✅ Fix transition issues
      input.addEventListener("focus", () => wrapper.classList.add("active"));
      input.addEventListener("blur", () => {
        if (!input.value) wrapper.classList.remove("active");
      });
  
      // ✅ Attach user-defined event listeners
      for (const attr of this.getAttributeNames()) {
        if (attr.startsWith("on")) {
          const eventType = attr.slice(2).toLowerCase();
          input.addEventListener(eventType, new Function("event", this.getAttribute(attr)));
        }
      }
    }
  }
  
  // ✅ Register the custom element
  customElements.define("bsdk-textbox", CustomTextBox);
  