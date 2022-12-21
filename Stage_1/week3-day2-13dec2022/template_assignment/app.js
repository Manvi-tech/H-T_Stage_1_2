
customElements.define('left-template', 
    class extends HTMLElement{
        constructor(){
            super();
            let template = document.getElementById("left");
        
            let div = document.createElement('div');
            div.innerHTML = `<h1>bhaaaww </h1>`;

            template.content.appendChild(div);

            let content = template.content;

            const shadowRoot = this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)

customElements.define('right-template', 
    class extends HTMLElement{
        constructor(){
            super();
            let template = document.getElementById("right");
        
            let div = document.createElement('div');
            div.innerHTML = `<h1> bhaaaww </h1>`;

            template.content.appendChild(div);

            let content = template.content;

            const shadowRoot = this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)

customElements.define('bottom-template', 
    class extends HTMLElement{
        constructor(){
            super();
            let template = document.getElementById("bottom");
        
            let div = document.createElement('div');
            div.innerHTML = `<h1> bhaaaww </h1>`;
            div.classList.add("flexBox");
            template.content.appendChild(div);

            let content = template.content;

            const shadowRoot = this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)