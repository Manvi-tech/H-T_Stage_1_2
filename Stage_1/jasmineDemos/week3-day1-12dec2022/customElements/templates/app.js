
// let template = document.getElementById("myTemplate");
// let content = template.content;
// document.body.appendChild(content);

customElements.define('my-template', 
    class extends HTMLElement{
        constructor(){
            super();
            let template = document.getElementById("myTemplate");
            let content = template.content;

            const shadowRoot = this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)