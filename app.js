//  Error Message 
function errorMessage(message){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
    }); 
}

// Confirm Message
function confirmMessage(){
    Swal.fire(
        'Good job!',
        'Calculation SUCCESSFULLY!!! <br> Please checkout result.',
        'success',
    )
}

// Get value from textfield
function getValue(id){
    let value = document.getElementById(id).value;
    const check = !isNaN(value);
    if(value.length===0){
        errorMessage("Please fill out "+id.toUpperCase()+" field.");
        return -1;
    }else{
        if(check===false){
            errorMessage("Please provide a valid number on "+ id.toUpperCase() + " field.");
            return -1;
        }else{
            if(value[0]==='-'){
                errorMessage("Please provide a positive number on " + id.toUpperCase() + " field.");
            }return parseFloat(value);
        }
    }
}

// Calculate button
document.getElementById('calculate').addEventListener('click', function(){
    let income = getValue('income');
    if(income>=0){
        let food = getValue("food");
        if(food>=0){
            let rent = getValue("rent");
            if(rent>=0){
                let clothes = getValue("clothes");
                if(clothes>=0){
                    let totalExpenses = food + rent + clothes;
                    if(totalExpenses>income){
                        errorMessage("Your total Income is less than Expenses")
                    }else{
                        confirmMessage();
                        var expenses = document.getElementById('total-expenses');
                        expenses.innerText = totalExpenses;
                        var balance = document.getElementById('balance');
                        balance.innerText = income-totalExpenses;
                    }
                }
            }
        }
    }
});

// Saving button
document.getElementById('save').addEventListener('click', function(){
    let total = document.getElementById('balance').textContent;
    let save = getValue('percent');
    if(save>=0){
        var savingAmount = (save/100)*total;
        if(savingAmount>total){
            errorMessage("Your remaining balance is less than saving amount.");
        }else{
            document.getElementById('saving-amount').innerHTML = savingAmount;
            document.getElementById('remaining-balance').innerHTML = total-savingAmount;
        }
    }    
});