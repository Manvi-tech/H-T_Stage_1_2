
class Rectangle extends HTMLElement{

    static get observedAttributes(){
        return ['color', 'length', 'breadth'];
    }
    
    constructor(){
        
        super();
        const shadow = this.attachShadow({mode:'open'});

        const div = document.createElement('div');
        const style = document.createElement('style');

        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    // when ele s added to dom or page
    connectedCallback(){
        console.log('custom rectangle added to page');
        updateRect(this);
    }

    // when ele s removed from dom or page
    disconnectedCallback(){
        console.log('custom rectangle removed from page');   
    }

    adoptedCallback(){
        console.log(' rectangle moved to new page');  
    }

    attributeChangedCallback(name, oldVal, newVal){
        console.log("custom atrributes changed:");
        updateRect(this);
    }


}

customElements.define('custom-rect', Rectangle);

function updateRect(ele){
    const shadow = ele.shadowRoot;
    shadow.querySelector('style').textContent = `
        div{
            width: ${ele.getAttribute('breadth')}px;
            height: ${ele.getAttribute('length')}px;
            background-color: ${ele.getAttribute('color')};
        }
    `;
}

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');

let rectangle;

update.disabled = true;
remove.disabled = true;

function random(min, max){
    return Math.floor(Math.random()*(max-min+1)*min);
}

add.onclick = function(){
    rectangle = document.createElement('custom-rect');
    rectangle.setAttribute('length', 100);
    rectangle.setAttribute('breadth',200);
    rectangle.setAttribute('color', 'red');
    document.body.appendChild(rectangle);

    update.disabled = false;
    remove.disabled = false;
    add.disabled = true;

}

update.onclick = function(){
    rectangle.setAttribute('length',random(50, 400) );
    rectangle.setAttribute('breadth',random(50, 500) );
    rectangle.setAttribute('color',`rgb(${random(0,255)}, ${random(0, 255)}, ${random(0,255)})` );
}


remove.onclick = function(){
    document.body.removeChild(rectangle);
    update.disabled=true;
    remove.disabled=true;
    add.disabled=false;
}