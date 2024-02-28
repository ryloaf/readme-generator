// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    name:"title",
    message:"What is the name of our project?",
},
{
    type: "input",
    name: "description",
    message: "What is the purpose of your project?",
},
{
    type: "checkbox",
    name: "license",
    message: "Please choose a license for your project?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0"],
},
{
    type: "input",
    name: "require",
    message: "List any dependencies here.",
},
{
    type: "input",
    name: "usage",
    message: "What are the technologies associated with your project?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
}    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating a README.md file...");
        writeToFile("./dist/README.md", generateMarkdown({ ...response}));
    })
}

// Function call to initialize app
init();
