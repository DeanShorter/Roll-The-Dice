let rollBtn = document.querySelector('.rollBtn');
let diceNumber = document.querySelector('.number');
let numberDisplay = document.querySelector('#number-display')
let numbersOnDice = [1, 2, 3, 4, 5, 6];
let dice = document.querySelector('.dice');


rollBtn.addEventListener('click', rollTheDice);



function rollTheDice() {

    let randomNumber = Math.floor(Math.random() * (numbersOnDice.length + 1));
    console.log(randomNumber);
    if (randomNumber == 1) {
        dice.style.backgroundImage = "url(images/Dice1.png)";
    } else if (randomNumber == 2) {
        dice.style.backgroundImage = "url(images/Dice2.png)";
    } else if (randomNumber == 3) {
        dice.style.backgroundImage = "url(images/Dice3.png)";
    } else if (randomNumber == 4) {
        dice.style.backgroundImage = "url(images/Dice4.png)"
    } else if (randomNumber == 5) {
        dice.style.backgroundImage = "url(images/Dice5.png)"
    } else if (randomNumber == 6) {
        dice.style.backgroundImage = "url(images/Dice6.png)"
    } else if(randomNumber == 0){
        rollTheDice();
    }

    numberDisplay.innerHTML = randomNumber;
    
}
