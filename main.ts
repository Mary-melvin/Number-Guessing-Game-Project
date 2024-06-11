
import inquirer from "inquirer";

console.log("\n \t Welcom to Mathias - Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()* 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter you guess number(Number limit from 1 to 5):",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congartulations ! You Guessed a Correct Number.");
    
}
else{
    console.log("Sorry, You Guessed a Wrong Number.");
}