class MarkDown {

    static renderLicenseBadge(License){
        const badges = {
            MIT: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
            ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
            Apache2: `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`,
            GNUPLv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        }
        return badges[License]
    }

    static renderLicenseLink(License){
        const links={
            MIT: `https://opensource.org/licenses/MIT`,
            ISC: `https://opensource.org/licenses/ISC`,
            Apache2: `https://opensource.org/licenses/Apache-2.0`,
            GNUPLv3: `https://www.gnu.org/licenses/lgpl-3.0.en.html`,
        }
        return links[License]
    }
static generateReadme(answers) {
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}
        
## Table of Content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Tests](#tests)
* [GitHub](#github)
* [Contact](#contact)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${this.renderLicenseLink(answers.license)}

## Features
${answers.features}

## Tests
${answers.tests}

## Github
${answers.github}

## Contact
${answers.author}
${answers.email}
 `
}
}

module.exports = MarkDown;