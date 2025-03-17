document.getElementById('btn-login').addEventListener('click', function(){
    const mobileNumber = getInputValueById('mobile-number')
    const pinNumber = getInputValueById('pin-number');
    if(pinNumber === 1234 && mobileNumber === 1234){
    window.location.href= "/home.html"
   } 
})