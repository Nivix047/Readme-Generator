// TODO: Include packages needed for this application
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of the project",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project if any",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // process cwd is the current working directory
  // /dist prevents overwrite of the root README.md
  return fs.writeFileSync(path.join(process.cwd(), "/dist", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
    console.log("Saved: your file is in the dist folder");
  });
}

// Function call to initialize app
init();
