

customElements.define('my-template', 

    class extends HTMLElement{
        constructor(){
            super();
            let template = document.getElementById("showDate");
        
            let div = document.createElement('div');
            div.innerHTML = `<h1> ${new Date(Date.now())} </h1>`;

            template.content.appendChild(div);

            let content = template.content;

            const shadowRoot = this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)