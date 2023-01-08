class Markdown{
    static generateReadme(answers){
        return `
        # ${answers.title}
        
        ## Table of Content
        -[Description](#Description)
        -[Installation](#Installation)
        -[Usage](#Usage)
        -[Credits](#Credits)
        -[License](#License)
        -[Features](#Features)
        -[Tests](#Tests)
        -[How to Contribute/Github Repo](#How to Contribute/Github Repo)
        -[Contact](#Contact)

        ## Description
        ${answers.description}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## Credits
        ${answers.credits}

        ## License
        ${answers.license}

        ## Features
        ${answers.features}

        ## Tests
        ${answers.tests}

        ## How to Contribute/Github Repo
        ${answers.github}

        ## Contact
        ${answers.author}
        ${answers.email}
        `
    }
}

module.exports = Markdown;