// for add money----------
document.getElementById('add-money-btn').addEventListener('click',function(){
   const addMoneyNumber = getInputValueById('amount-number');
   const pinNumber = getInputValueById('pin-number');

   if(isNaN(addMoneyNumber)){
    alert('Invalid Amount Number')
    return;
  }
  if(pinNumber === 1234){
    const accountBalance = getInputTextValueById('balance-amount')

    const newBalance = accountBalance + addMoneyNumber
    document.getElementById('balance-amount').innerText = newBalance

    const p = document.createElement('p')
    p.innerText = `added ${addMoneyNumber}tk & New Balance is ${newBalance}`

    document.getElementById('transaction-container').appendChild(p)

  }
  else{
    alert('Invalid Pin Number')
  }
})

// for cash out money----------

document.getElementById('cash-out-btn').addEventListener('click', function(){
    const cashOutNumber = getInputValueById('cash-out-number');
    const cashOutPinNumber = getInputValueById('cash-out-pin-number');

    if(isNaN(cashOutNumber)){
        alert('Invalid Amount Number')
        return;
      }

if(cashOutPinNumber === 1234){

 
const accountBalance = getInputTextValueById('balance-amount');
const newBalance = accountBalance - cashOutNumber;
document.getElementById('balance-amount').innerText = newBalance;

 if(cashOutNumber>newBalance){
    alert('Not Enough Money')
  }

const p = document.createElement('p')
p.classList.add('bg-yellow-300')
    p.innerText = `CashOut ${cashOutNumber}tk & New Balance is ${newBalance}`

    document.getElementById('transaction-container').appendChild(p)
}

else{
    alert('Invalid Pin Number')
}
})

// for transaction history---------