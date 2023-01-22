const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to initialize app
function init() {
const questions = inquirer
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
        choices: ['None', 'Apache License 2.0', 'GNU General Public LIcense v3.0', 'BSD 2-Cluase "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public LIcense 2.0', 'GNU Affero General Public LIcense v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License v2.1', 'The Unlicense']
        //got these from Github - had to add to get it to complete
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
    console.log(answers)
    writeToFile()
    });    
}

//   // TODO: Create a function to write README file
  function writeToFile(README, data) {
    fs.writeFile('./changeName.md', answers, 'utf8', (err) => {
        if (err) throw err;
        console.log("the file has been saved!");
    })
}
  


  
//   // Function call to initialize app
  init();