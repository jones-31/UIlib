class a extends HTMLElement {
  connectedCallback() {
    const i = this.getAttribute("placeholder") || "", c = this.getAttribute("class") || "", l = this.getAttribute("id") || "", e = document.createElement("div");
    e.className = `input-field ${c}`;
    const t = document.createElement("input");
    t.type = "text", t.id = l, t.placeholder = "";
    const s = document.createElement("label");
    s.textContent = i, e.appendChild(t), e.appendChild(s), this.appendChild(e);
    for (const n of this.getAttributeNames())
      if (n.startsWith("on")) {
        const o = n.slice(2).toLowerCase();
        t.addEventListener(o, new Function("event", this.getAttribute(n)));
      }
  }
}
customElements.define("bsdk-textbox", a);
