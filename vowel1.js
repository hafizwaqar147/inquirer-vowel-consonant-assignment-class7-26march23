import inquirer from "inquirer";
const word1 = await inquirer.prompt([
    {
        name: "letter",
        type: "string",
        message: "Enter the letter",
    }
]);
const character = word1.letter;
const lowerCaseLetter = character.toLowerCase();
if (lowerCaseLetter === "a" || lowerCaseLetter === "e" || lowerCaseLetter === "i" || lowerCaseLetter === "o" || lowerCaseLetter === "u") {
    console.log(`${character} is vowel`);
}
else {
    console.log(`${character} is consonant`);
}
