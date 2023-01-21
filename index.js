const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'description',
    },
    {
        // future dev do you have Instillation and then include section or not based on input
        type: 'input',
        message: 'Enter your projects instillation instructions.',
        name: 'instillation',
    },
    {
        type: 'input',
        message: 'What is the intended use for your project?',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'How can others contribute to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is your test instructions?',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: []
    },
    {
        type: 'input',
        message: 'what is your Github username?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
  ])
  .then((answers) => {
    let title = answers.
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } 
  });