// for login-----------

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// for transaction text value-------

    function getInputTextValueById(id){
    const accountInput = document.getElementById(id).innerText;
    const accountBalance = parseFloat(accountInput);
    return accountBalance;
}


// for featured buttons--------------

function showSectionById(id){
document.getElementById('add-money-form').classList.add('hidden')
document.getElementById('cash-out-form').classList.add('hidden')
document.getElementById('transaction-form').classList.add('hidden')

document.getElementById(id).classList.remove('hidden')
    
}