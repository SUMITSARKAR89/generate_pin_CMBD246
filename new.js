const generateBtnPin = document.querySelector('.generate-btn'); //button
const generatePin =  document.querySelector('.generatedPin'); //input class generatedPin

/*1. Generating 4 digits Pin start */

function generatePinResult(){
    let randomNum = Math.floor(Math.random() * 9000 + 1000);
    generatePin.value = randomNum;

}
generateBtnPin.addEventListener('click', generatePinResult);

/* Generating 4 digits Pin Ends */

/*2. show value on the keypad start here*/
const showValue =  document.querySelector('.showValue'); //input class showValue
function showKeyPadInput(call){
    if(generatePin.value === "" ){
        alert('please inter a PIN number');
    }else{
        showValue.value += call;
    }

    // button C 
    if (call === 'C'){
        showValue.value = '';
    }
}
// remove digit '|<'
function removeDigit(){
    if(generatePin.value === "" ){
        alert('please inter a PIN number');
    }else{
        let currentValue =  showValue.value;
        showValue.value = currentValue.slice(0, -1);
        console.log(currentValue);

    }

}
/*show value on the keypad ends here*/
