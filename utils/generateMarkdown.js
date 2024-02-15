// function to generate markdown for README
function generateMarkdown(data) {
  console.log("In generateMarkdown");
  return `# ${data.title}`;
}

export default generateMarkdown;
