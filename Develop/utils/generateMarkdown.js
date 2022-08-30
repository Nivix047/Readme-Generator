// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    // -yellow -silver for different colors
    // ! is only for images
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    // Using img file instead
    // return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="Github license">`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Need list of license inquirer style: Need a N/A at the very end (some people don't have license)
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none")
    return `## License
  This project is licenses under the ${license} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](usage)

  ${renderLicenseLink(data.license)}
  
  * [Contributing](contributing)

  * [Tests](test)

  * [Questions](questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  You can see my additional work at [${data.github}](https://github.com/${
    data.github
  })

  You can reach me at ${data.email}

`;
}

module.exports = generateMarkdown;
