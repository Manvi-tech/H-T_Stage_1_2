let form = document.getElementById("inp-form");
form.addEventListener("submit", calculateInterest);

function calculateInterest(e){
    e.preventDefault();

    //principal 
    let principal = document.getElementById("principal").value;

    //interest
    let interest = document.getElementById("interest").value;

    //time
    let time = document.getElementById("time").value;

    //Simple interest
    let SI = (principal*interest*time)/100;

    // console.log(SI);

    let total_payment = document.getElementById("total_payment");
    let total_interest = document.getElementById("total_interest");
    let monthly_interest = document.getElementById("monthly_interest");

    total_payment.innerHTML=`<h1>total payment is: ${principal+SI}</h1>`;
    total_interest.innerHTML=`<h1>total interest is : ${SI}`;
    let temp = SI/(12*time);
    monthly_interest.innerHTML=`<h1>monthly interest is ${temp}`;

}