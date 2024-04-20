import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessNumber",
        type: "number",
        message: "Dear user, guess the number between 1-6",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("CONGRATULATION! you guessed the Right Number");
}
else {
    console.log("SORRY! you guessed the wrong number");
}
