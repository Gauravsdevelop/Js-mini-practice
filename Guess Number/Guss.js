function a(){                                           
const userInput = document.querySelector('#guess');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const all_guess = document.querySelector('.all_guess');
const SubmitButton = document.querySelector('.submitBtn');
const start_again = document.querySelector('.start_again');

const all_guesses_Array = [];  // initialise array
let randomNumber = Math.round(Math.random() * 100);


form.addEventListener ('submit', (e) => {
    e.preventDefault(); 
    const userInputValue = parseInt(userInput.value);
   
    if(userInputValue < randomNumber) {
    // console.log('Too low');
         result.innerText = 'Too low !';
    }else if(userInputValue > randomNumber){
        // console.log('Too high');
        result.innerText = 'Too High';

    }else if(userInputValue === randomNumber){
        // console.log("congrats")
        result.innerText = 'CONGRATULATION YOU Found it';
        start_again.disabled = false;
        SubmitButton.disabled = true;
    }
    // console.log('submitted');

   all_guesses_Array.push(userInputValue);
   all_guess.innerText = ' Your Gusses : '+ all_guesses_Array.join(' , ');
    userInput.value = ''; // Note :- or we can also use form.reset() to empty after submit

})

 start_again.addEventListener('click', () => {

    result.innerText = ' ';
    all_guesses_Array.length = 0;
    all_guess.innerText = ' ';
    start_again.disabled = true;
    SubmitButton.disabled = false;
 randomNumber = Math.round(Math.random() * 100);
    
 })

}
a()  // wrapp with using iffi bcz hiding random number from console