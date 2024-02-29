// Packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user to create README
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for your project:",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0"],
  },
  {
    type: "input",
    name: "require",
    message: "List any dependencies here:",
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

// Function to write the README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Generating a README.md file...");
    const readmeContent = generateMarkdown(responses);
    writeToFile("./dist/README.md", readmeContent);
    console.log("README.md file generated successfully in the 'dist' folder.");
  });
}

// Function call to initialize application
init();
