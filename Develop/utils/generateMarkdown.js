// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    // -yellow -silver for different colors
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    // Using img file instead
    // return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="Github license">`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


`;
}

module.exports = generateMarkdown;
