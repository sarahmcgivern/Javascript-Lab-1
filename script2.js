"use strict";
{
function startGame() {
    let start = prompt("Do you wish to enter into a battle with the Almighty Grant?");
    if (start === 'no'){
        console.log('Too bad, so sad.');
    } else if (start ==="yes"){
        let userName = prompt("Name your avatar");
        startCombat(userName);
    }
}


function startCombat(userName) {
let grantPoints = 10;
let userPoints = 40;
let userWins = 0;

    function getDamage() {
    userPoints -= Math.floor(Math.random() * 5 + 1);
    grantPoints -= Math.floor(Math.random() * 5 + 1);  
    console.log(`${userName} has ${userPoints} health points left. `+ `Grant the Mighty Chicken has ${grantPoints} health points left.`);
    }


    while(userWins <3 && grantPoints >=0){
        let round=prompt("Would you like to attack or quit?")
        if (round === 'quit') {
            break;  
        } else if (round === 'attack') {
            getDamage()
        }       
    
    if (grantPoints <= 0) {
        userWins++;
        console.log(`Victory #${userWins} for ${userName}!`);
        grantPoints = 10;
      
      } else if (userWins === 3) {
        console.log(`${userName} is victorious!`);
      
      } else if (userPoints <= 0) {
        console.log(`${userName} has been defeated by the Almighty Grant.`);
      }
    }
}


startGame();


}
