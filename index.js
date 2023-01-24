const inquirer = require('inquirer');
const fs = require('fs');

//future want to add validation for email
const validator = require("email-validator")
console.log(validator.validate("test@email.com"));

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
        default: 'npm test',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'MIT', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License v2.0', 'The Unlicense'] 
        //got these from Github 
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
    // take all input and display in new readme
    let liceName = answers.license
    let badgeName = liceName.split(' ').join('')
    let liceBadge = '[![License](https://img.shields.io/badge/License-' + badgeName + ')](https://opensource.org/liceses/' + badgeName + ')'
    let titleSec = '# ' + answers.title + '\n' + liceBadge
    let descriptionSec = '## Description ' + '\n' +  answers.description

    let tableCont = '## Table of Contents' + '\n' +  '* [Installation](#installation)'+ '\n' +   '* [Usage](#usage)' + '\n' +  '* [License](#license)' + '\n' +  '* [Contributing](#contributing)' + '\n' +  '* [Test](#test)' + '\n' +  '* [Questions](#questions)'

    let InstalSec = '## Installation ' + '\n' +  answers.instillation

    let usageSec = '## Usage ' + '\n' +  answers.    usageInformation

    let contributingSec = '## Contribution ' + '\n'  + answers.contribution

    let testSec = '## Tests ' + '\n'  + answers.testInstructions

    let questSec = '## Questions ' + '\n' +  'For questions please send me an email at '+ answers.email + '.' + 'You can view more of my work at ' + '[' + answers.userName + '](https://github.com/' + answers.userName + '/)' 

    let liceSec = '## License' + '\n' + 'This project is licensed under the ' + liceName

    let document = titleSec +  '\n' + descriptionSec + '\n'  + '\n' + tableCont + '\n'  + '\n' + InstalSec + '\n'  + '\n' + usageSec + '\n'  + ' \n' + contributingSec + '\n'  + '\n' + testSec + '\n'  + '\n' + questSec + '\n'  + '\n' + liceSec
    
    
    fs.writeFile('./changeName.md', document,  (err) => {
        if (err) throw err;
        console.log("the file has been saved!");
    })
}
  
  
//   init();


function renderLicenseBadge(license) {
  // for..of matches??? 
  let liceBadges = {
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause "New" or "Revised" License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'BSD 2-Clause "Simplified" License': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'GNU Affero General Public License v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU General Public License v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'Creative Commons Zero v1.0 Universal': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla Public License v2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'Eclipse Public License 2.0': '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)',
    'GNU Lesser General Public License v2.1': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)'
  }
  for (const property in liceBadges) { 
    console.log(`${liceBadges[property]}`)
    //console.log(`${property} `)  this gives me the license 
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink()
function renderLicenseLink(license) {
  
  let liceLinks = {
  'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
  'BSD 3-Clause "New" or "Revised" License': '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)',
  'BSD 2-Clause "Simplified" License': '[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)',
  'GNU Affero General Public License v3.0': '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)',
  'GNU General Public License v2.0': '[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  'Creative Commons Zero v1.0 Universal': '[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)',
  'GNU General Public License v3.0': '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)',
  'MIT': '[MIT](https://opensource.org/licenses/MIT)',
  'Mozilla Public License v2.0': '[Mozilla Public License v2.0](https://opensource.org/licenses/MPL-2.0)',
  'The Unlicense': '[The Unlicense](http://unlicense.org/)',
  'Boost Software License 1.0': '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)',
  'Eclipse Public License 2.0': '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)',
  'GNU Lesser General Public License v2.1': '[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-2.1)'
  }

  for (const property in liceLinks) { 
    
    console.log(`${liceLinks['Eclipse Public License 2.0']}`)
    //console.log(`${property} `)  this gives me the license 
  }
}
