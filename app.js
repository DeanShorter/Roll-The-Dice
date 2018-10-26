let rollBtn = document.querySelector('.roll-btn');
let diceNumber = document.querySelector('.number');
let numberDisplay = document.querySelector('#number-display')
let numbersOnDice = [1, 2, 3, 4, 5, 6];
let dice = document.querySelector('.dice');



rollBtn.addEventListener('click', rollTheDice);


function rollTheDice() {
        
    let randomNumber = Math.floor(1+ Math.random() * (numbersOnDice.length));
    
    if (randomNumber == 1) {
        dice.style.backgroundImage = "url(images/Dice1.png)";
        numberDisplay.innerHTML = randomNumber;
    } else if (randomNumber == 2) {
        dice.style.backgroundImage = "url(images/Dice2.png)";
        numberDisplay.innerHTML = randomNumber;
    } else if (randomNumber == 3) {
        dice.style.backgroundImage = "url(images/Dice3.png)";
        numberDisplay.innerHTML = randomNumber;
    } else if (randomNumber == 4) {
        dice.style.backgroundImage = "url(images/Dice4.png)";
        numberDisplay.innerHTML = randomNumber;
    } else if (randomNumber == 5) {
        dice.style.backgroundImage = "url(images/Dice5.png)";
        numberDisplay.innerHTML = randomNumber;
    } else if (randomNumber == 6) {
        dice.style.backgroundImage = "url(images/Dice6.png)";
        numberDisplay.innerHTML = randomNumber;
    }


    
    
}
