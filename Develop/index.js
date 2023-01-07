const inquirer = require('inquirer')


//Questions asked to users
const questions = [
    {
        type: 'Input',
        name: 'Title',
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
        name: 'Description',
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
        name: 'Installation',
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
        name: 'Usage',
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
        name: 'Credits',
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
        name: 'License',
        message: 'What License did you use?',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'GNUPLv3.0'],
        filter(val) {
            return val.toLowerCase();
        },
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
        name: 'Features',
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
        name: 'Tests',
        message: 'Write tests for the appliactions',
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
        name: 'How to contribute/GitHub Repo',
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
        name: 'Author',
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
        name: 'Email',
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

// Function that writes the READme file 
function writeToFile(fileName, data) {
    return new Promise(function (reslove, reject) {
        fs.writeFile('README.md', data, function (err) {
            if (err) {
                reject(err);
                return;
            }
            reslove({
                ok: true, 
                message: 'READme File has been created'
            })
        })
    })
};

const init = function () {
    return inquirer.prompt(questions);
};

init()