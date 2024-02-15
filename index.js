import fs from "fs";
import path from 'path';
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// Get the questions
import questions from "./questions.js";

// function to write README file
function writeToFile(path, array, callback) {
    console.log("In writeToFile");
    const data = JSON.stringify(array, null, 2);

    fs.writeFile(path, data, 'utf8', (err) => {
        if (err) {
            console.error("An error occurred:", err);
            callback(err);
            return;
        }
        console.log("Array written to file successfully.");
        callback(null);
    });
}

// function to initialize program
function init() {
    console.log("In init");
}

// function call to initialize program
init();

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    writeToFile('answers.json', answers, (err) => { if (err) console.error("Failed", err); });
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment", err);
    } else {
      console.error("Something went wrong", err);
    }
  });