
var op1 = "";
var op2 = "";
var operator = null;

var display = document.getElementById('display');
var buttons = document.getElementsByClassName('cell');

function changeDisplay(){
   display.innerText='';
}

function isOperator(val){
  if(val=='+' || val=='-' || val=='*' || val=='/' || val=='%')
    return true;
  else
    return false;
}
function isNumber(val){
  val2 = parseFloat(val);
  if(val2>=0 && val2<=9)
    return true;
  else
    return false;
}


for(var i=0;i<buttons.length;i++){

 buttons[i].addEventListener('click',function(){
       var value = this.getAttribute('data-value');
       
      if(isOperator(value)){
         operator= value;
         
         op1 = parseFloat(display.innerText);
      
         display.innerText='';
     }

     else if(isNumber(value) || value=='.'){
      display.innerText += value;
     }

     else if(value=='clear'){
       display.innerHTML=0;
       op1='';
       op2='';
       operator=null;
     }

     else if(value=='='){
          
          op2 = parseFloat(display.innerText);
           display.innerText='';

           var ans;
           ans = eval(op1 + "" + operator + "" + op2);
           
          display.innerText = `${op1} ${operator} ${op2} = ${ans}`;

          op1 = ans;
          op2 ='';
          operator=null;
    
     }
     
 
  });

}