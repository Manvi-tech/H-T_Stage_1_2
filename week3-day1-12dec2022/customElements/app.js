
class Manvi extends HTMLElement{



    constructor(){

        super();

        this.attachShadow({mode:'open'});



        let p = document.createElement('p');

        p.style = this.getAttribute('style');

        p.innerText = this.getAttribute('message');



        this.shadowRoot.appendChild(p);




    }

}



customElements.define('my-manvi', Manvi);