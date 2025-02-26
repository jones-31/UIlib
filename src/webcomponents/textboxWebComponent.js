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
  