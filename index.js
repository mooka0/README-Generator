// TODO: Include packages needed for this application
// fs and path is included 
const fs = require('fs');
const path = require('path');
// I installed inquirer
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? ',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about? ',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your project description!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'homepage',
        message: 'Project Live Homepage Link: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? ',
        
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for usage. (Add screenshots later to assets/images folder in repo).',
        
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your contributers, or collaborators with links to their Github profiles.',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0','BSD3', 'Other', 'No License']
        
    },
    {
        type: 'input',
        name: 'badge',
        message: 'List your contributers, or collaborators with links to their Github profiles.',
        
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, consider adding a heading called "Features" and listing them there.',
        
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add guidelines for other developers to contribute to this project',
        
    }


];


// TODO: Create a function to write README file
//writeToFile to an existing file
function writeToFile(fileName, data) {
    //writeFileSync - creates a file then writes to it. path.join creates a path line. process.cwd - gets the current directory.
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log('Generating README file')
        //generatemarkdown is where I create my template
        writeToFile('README.md', generateMarkdown({...inquirerResponses}) )
    })
}

// Function call to initialize app
init();
