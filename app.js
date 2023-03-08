
document.getElementById("form").addEventListener("submit",calculate);

function calculate(e){

    document.getElementById("results").style.display = "none";
    const amount = document.getElementById("loan");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        document.getElementById("img").style.display = "block";
        setTimeout(resultShow,2000);

        function resultShow(){
            document.getElementById("img").style.display = "none";
            document.getElementById("results").style.display = "block";
            monthlyPayment.value = "Monthly Payment : "+monthly.toFixed(2);
            totalPayment.value = "Total Payment : "+(monthly * calculatedPayments).toFixed(2);
            totalInterest.value = "Total Interest : "+((monthly * calculatedPayments)-principal).toFixed(2);
        }
        
    }else{
        if(document.querySelector(".error")){
            
        }else {
            showError("Please check your numbers");
        }
        
        
    }




    e.preventDefault();
}

function showError(err){
    const div = document.createElement("div");
    div.classList = "error";
    const p = document.createElement("p");
    p.innerHTML = err;
    div.appendChild(p);
    const before = document.getElementById("before");
    const container = document.querySelector(".container");
    container.insertBefore(div,before);

    setTimeout(clearError,3000);

}

function clearError(){
    document.querySelector(".error").remove();
}