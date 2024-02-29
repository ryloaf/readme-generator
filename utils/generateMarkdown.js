// Returns a license badge based on which license is passed in. If there is no license it returns an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
    }
    return "";
}

// Returns the license link. If there is no license, returns an empty string
function renderLicenseLink(license) {
    if (license !== "none") {
        return `\n* [License](#license)\n`;
    }
    return "";
}

// Returns the license section of the README. If there is no license, returns an empty string
function renderLicenseSection(license) {
    if (license !== "none") {
        return `## License
        Licensed under the ${license} license.`;
    }
    return "";
}

// Generates markdown for the README file
function generateMarkdown(data) {
  return `
  # Project Title
   ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  1. Numbered Item 1
  2. Numbered Item 2
  3. Numbered Item 3

  ## Installation

  ## Usage
  ${data.usage}
  ## Credits

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  `;
}

module.exports = generateMarkdown;