const generateBtnPin = document.querySelector('.generate-btn'); //button
const aInput =  document.querySelector('.generatedPin'); //input class generatedPin

/*1. Generating 4 digits Pin start */
function resultGeneratePin (){
    let randomNum = Math.floor(Math.random() *9000 + 1000);
    aInput.value = randomNum;
    generateBtnPin.disabled = true;

}
generateBtnPin.addEventListener('click', resultGeneratePin);
/* Ends */

/*2. show value on the keypad start here*/
const bInput =  document.querySelector('.showValue'); //input class showValue
function showKeyPadInput(call){
    if(aInput.value === "" ){
        alert('please Enter a PIN number');
    }else{
        bInput.value += call;
    }

    // button C 
    if (call === 'C'){
        bInput.value = '';
    }
}
// remove digit '|<'
function removeDigit(){
    if(aInput.value === "" ){
        alert('please Enter a PIN number');
    }else{
        let currentValue =  bInput.value;
        bInput.value = currentValue.slice(0, -1);
        console.log(currentValue);

    }

}
/* Ends */

/*3. check the pin is start here*/
const submitBtn = document.querySelector('.submit-btn'); // submit bottn
function resultSubmitBtn(){
    let aPin = aInput.value;
    let bPin = bInput.value;
    if(aPin === bPin){
        //console.log('congratulation');
        showTrueNotification();
    }else{
        //console.log('Invalid');
       showFalseNotification();
       tryLeftNumber();
    }
}
submitBtn.addEventListener('click', resultSubmitBtn);
/* Ends */

/*5  If there is no try left user won't able to generate a new pin*/
const tryLeft = document.getElementById("tryLeft");
function tryLeftNumber(){
    let x = tryLeft.innerText;
    if( x > 0){
        tryLeft.innerHTML = --x;
    }else{
        tryLeft.innerHTML = 'Oops!.. your PIN is wrong'
    }

}

/*4  Make Notification Work */
const wrongPinNotification = document.querySelector('.wrong-pin');
const correctPinNotification = document.querySelector('.correct-pin');

//if hide
function hideNotification (){
    wrongPinNotification.style.display = "none";
    correctPinNotification.style.display = "none";
}
//if correct
function showTrueNotification(){
    correctPinNotification.style.display = "block";
    wrongPinNotification.style.display = "none";

    generateBtnPin.style.backgroundColor = "green";
    submitBtn.style.backgroundColor = "green";
    submitBtn.disabled = true;
    
}
//if wrong
function showFalseNotification(){
    wrongPinNotification.style.display = "block";
    correctPinNotification.style.display = "none";

    generateBtnPin.style.backgroundColor = "red";
    submitBtn.style.backgroundColor = "red";
    bInput.value = '';

}

hideNotification();
// showTrueNotification();
// showFalseNotification();
/* Ends */

/*5  If there is no try left user won't able to generate a new pin*/

