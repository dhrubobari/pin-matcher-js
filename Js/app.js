function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''; // const pin string hoye gelo
    // pin string 4 digit er hobe
    if(pinString.length == 4){
        return pin;
    }
    // else dawar karon jate 3 digit ta na pay
    else{
        return getPin();
    }
}

function generatePin(){   
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
// bubble korte hobe that's param e event.
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText; // console e dekhte hobena so const.
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if (number == 'C') {
            calcInput.value = '';
        } // num delete korar jonno
    } // calculator e jegula numbers na
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber; // number type korle dekhabe.
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-succeed');
    const failedError = document.getElementById('notify-failed');
    if(pin == typedNumbers){
        successMessage.style.display = 'block';
        failedError.style.display = 'none'; // jokhn failed hobe tokhn success msg ta hide hoye jabe
    }
    else{
        successMessage.style.display = 'none';
        failedError.style.display = 'block';
        // css er kase gie display block jate msg ta dekhay
    }
}