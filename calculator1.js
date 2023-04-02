import inquirer from "inquirer";
const calculator1 = await inquirer.prompt([
    {
        name: "first_number",
        type: "number",
        message: "Enter the First Number"
    }, {
        name: "second_number",
        type: "number",
        message: "Enter the Second Number"
    }
]);
const calculator2 = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        message: "Select the operator",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
let { first_number, second_number } = calculator1;
let { operator } = calculator2;
let result;
if (operator === "+") {
    console.log("Result: ", result = first_number + second_number);
}
else if (operator === "-") {
    console.log("Result: ", result = first_number - second_number);
}
else if (operator === "*") {
    console.log("Result: ", result = first_number * second_number);
}
else if (operator === "/") {
    console.log("Result: ", result = first_number / second_number);
}
else if (operator === "%") {
    console.log("Result: ", result = first_number % second_number);
}
else {
    console.log("Invalid Operator");
}
;
