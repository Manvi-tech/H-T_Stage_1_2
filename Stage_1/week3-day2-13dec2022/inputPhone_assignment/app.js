
let form = document.getElementById("phoneForm");

form.addEventListener('submit', function(ev){

    let phone_no = document.getElementById("phoneInput").value;

     // (+91)-123
     let len = phone_no.length;

    //format: (+91)- 
    let a = phone_no.startsWith("(+");
    let b = phone_no.charAt(2)+phone_no.charAt(3);
    let d = phone_no.charAt(4);
    let e = phone_no.charAt(5);

    //check no after (+91)- i.e  (+91)-anndn123 is invalid
    let f = parseInt(phone_no.substr(6, len-6));
    let temp = String(f).length;

    if(!a || d!=')' || e!='-' || parseInt(b)==NaN){
        alert('phone starts with: (+61)-')
    }

    else if(len<12 && len<16){
        alert('min length is 12 and max length is 15');
    }

    else if(temp!= len-6){
        alert('enter a number');
    }
    
    else{
        alert('phone no added');   
    }

    ev.preventDefault();
});