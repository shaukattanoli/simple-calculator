#! /usr/bin/env node
import inquirer from 'inquirer';
let answers = await inquirer.prompt([
    { name: 'first_number', type: 'number', message: 'Enter first number: ' },
    { name: 'second_number', type: 'number', message: 'Enter second number: ' },
    {
        name: 'operator',
        type: 'list',
        message: 'choose any operation: ',
        choices: ['addition', 'subtraction', 'multiplication', 'division']
    },
]);
// conditional statment
if (answers.operator === 'addition') {
    console.log(answers.first_number + answers.second_number);
}
else if (answers.operator === 'subtraction') {
    console.log(answers.first_number - answers.second_number);
}
else if (answers.operator === 'multiplication') {
    console.log(answers.first_number * answers.second_number);
}
else if (answers.operator === 'division') {
    console.log(answers.first_number / answers.second_number);
}
else {
    console.log('please select valid operator');
}
