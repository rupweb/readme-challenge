import licenses from "../js/licenses.js";

// function to generate markdown for README
function generateMarkdown(answers) {
  console.log("In generateMarkdown");

  return `
# ${answers.title}

${licenses[answers.license].badge}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${licenses[answers.license].notice}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For any questions, please contact me at [${answers.email}](mailto:${answers.email}) or visit my [GitHub profile](https://github.com/${answers.github}).
  `;
}

export default generateMarkdown;
