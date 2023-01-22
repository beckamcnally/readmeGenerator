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
    writeToFile(answers)
    });    
}

//   // TODO: Create a function to write README file
  function writeToFile(answers) {
    // first get to work then clean up and try deconstructing once have working
    let titleSec = '# ' + answers.title
    let descriptionSec = '## Description ' + '\n' +  answers.description

    let tableCont = '## Table of Contents' + '\n' +  '* [Installation](#installation)'+ '\n' +   '* [Usage](#usage)' + '\n' +  '* [License](#license)' + '\n' +  '*[Contributing](#contributing)' + '\n' +  '* [Test](#test)' + '\n' +  '* Questions](#questions)'

    let InstalSec = '## Installation ' + '\n' +  answers.instillation

    let usageSec = '## Usage ' + '\n' +  answers.    usageInformation

    let contributingSec = '## Contribution ' + answers.contribution

    let testSec = '## Tests ' + answers.testInstructions

    let questSec = '## Questions ' + '\n' +  'For questions please contact ' + answers.userName + ' at ' + answers.email 

    let document = titleSec + '\n' + descriptionSec + '\n' + tableCont + '\n' + InstalSec + '\n' + usageSec + ' \n' + contributingSec + '\n' + testSec + '\n' + questSec
    
    
    fs.writeFile('./changeName.md', document,  (err) => {
        if (err) throw err;
        console.log("the file has been saved!");
    })
}
  


  
//   // Function call to initialize app
  init();