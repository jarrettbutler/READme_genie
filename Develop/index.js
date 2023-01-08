//Creating const that link to the packages that are needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./render');
const fs = require('fs');



//Questions asked to users
const questions = [
  {
    type: 'Input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title of the project");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'description',
    message: 'What is the description of your project?',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter the description");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter the installation instructions or N/A");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'credits',
    message: 'List your collaborators, if any.',
    validate: (creditInput) => {
      if (creditInput) {
        return true;
      } else {
        console.log("Please enter any credits or N/A");
        return false;
      }
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'What License did you use?',
    choices: ['MIT', 'ISC', 'Apache2', 'GNUPLv3'],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select a license");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'features',
    message: 'If your project has a lot of features, list them here.',
    validate: (featuresInput) => {
      if (featuresInput) {
        return true;
      } else {
        console.log("Please enter the features or N/A");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'tests',
    message: 'Write tests for the applications',
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter tests or N/A");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'github',
    message: 'Paste the Link for your Github repo',
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your github repo or N/A");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'author',
    message: 'Please enter the name of the author',
    validate: (authorInput) => {
      if (authorInput) {
        return true;
      } else {
        console.log("Please enter the name of the author");
        return false;
      }
    },
  },
  {
    type: 'Input',
    name: 'email',
    message: 'What is your email?',
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email");
        return false;
      }
    },
  },
]

// Function that writes the READme file and initalizes the application
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const mark = MarkDown.generateReadme(answers)
      fs.writeFile('./READmeFiles/README.md', mark, function (err) {
        if (err) {
          console.log('Could not save file', err)
        } else {
          console.log('Success READme file has been created')
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

init()