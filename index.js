import fs from "fs";
import path from 'path';
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// Get the questions
import questions from "./js/questions.js";

// For linting & testing markdown
var test = false;
import { execSync } from 'child_process';

// function to write README file
function writeToFile(path, content, callback) {
    console.log("In writeToFile");

    try {
      fs.writeFileSync(path, content, 'utf8');
      console.log("Markdown written.");
    } catch (err) {
      console.error("An error occurred:", err);
    }
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
    const markdown = generateMarkdown(answers);

    // Synchronous write
    writeToFile('md/README.md', markdown);

    // Linting
    runMarkdownLint();

    // Optional testing
    if (test) {
        runMarkdownTest();
    }
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment", err);
    } else {
      console.error("Something went wrong", err);
    }
  });

  function runMarkdownLint() {
    console.log('Current Directory:', process.cwd());
    const files = fs.readdirSync('md');
    console.log('Markdown Files:', files);

    try {
      execSync('npm run lint-md', { stdio: 'inherit' });
    } catch (error) {
      // Lint errors appear to be Javascript errors
      console.log("");
      console.info("Markdownlint found issues above");
    }
  }

  function runMarkdownTest() {
    try {
      console.log("Run markdownlint test");
      execSync('npm test', { stdio: 'inherit' });
      console.log("Markdownlint test passed!");
    } catch (error) {
      console.error("Markdownlint test failed:", error);
    }
  }