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
    let liceBadges;
    let liceLinks;
    if (liceName === 'Apache License 2.0') {
        liceBadges = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.opensource.org/licenses/Apache-2.0)'
        liceLinks = '[Apache License 2.0](https://www.opensource.org/licenses/Apache-2.0)'
        } else if (liceName === 'BSD 3-Clause "New" or "Revised" License') {
        liceBadges =  '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://wwww.opensource.org/licenses/BSD-3-Clause)'
        liceLinks = '[BSD 3-Clause "New" or "Revised" License](https://www.opensource.org/licenses/BSD-3-Clause)'
        } else if (liceName === 'BSD 2-Clause "Simplified" License') {
        liceBadges = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://www.opensource.org/licenses/BSD-2-Clause)'
        liceLinks = '[BSD 2-Clause "Simplified" License](https://www.opensource.org/licenses/BSD-2-Clause)'
        } else if (liceName === 'GNU Affero General Public License v3.0') { 
        liceBadges = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        liceLinks = '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)'
        } else if (liceName === 'GNU General Public License v2.0') { 
        liceBadges = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        liceLinks = '[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        } else if (liceName === 'Creative Commons Zero v1.0 Universal') { 
        liceBadges = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://www.creativecommons.org/publicdomain/zero/1.0/)'
        liceLinks = '[Creative Commons Zero v1.0 Universal](http://www.creativecommons.org/publicdomain/zero/1.0/)'
        } else if (liceName === 'GNU General Public License v3.0') { 
        liceBadges = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        liceLinks = '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)'
        } else if (liceName === 'MIT') { 
        liceBadges = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://www.opensource.org/licenses/MIT)'
        liceLinks = '[MIT](https://www.opensource.org/licenses/MIT)'
        } else if (liceName === 'Mozilla Public License v2.0') { 
        liceBadges = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.opensource.org/licenses/MPL-2.0)'
        liceLinks = '[Mozilla Public License v2.0](https://www.opensource.org/licenses/MPL-2.0)'
        } else if (liceName === 'The Unlicense') { 
        liceBadges = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://www.unlicense.org/)'
        liceLinks = '[The Unlicense](http://www.unlicense.org/)'
        } else if (liceName === 'Boost Software License 1.0') { 
        liceBadges = '[![License](https://img.shields.io/badge/License-Boost_201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        liceLinks = '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'
        } else if (liceName === 'Eclipse Public License 2.0') { 
        liceBadges = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://www.opensource.org/licenses/EPL-2.0)'
        liceLinks = '[Eclipse Public License 2.0](https://www.opensource.org/licenses/EPL-2.0)'
        } else if (liceName === 'GNU Lesser General Public License v2.1') { 
        liceBadges = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)'
        liceLinks = '[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-2.1)'
        } 
    
    // let badgeName = liceName.split(' ').join('')
    // let liceBadge = '[![License](https://img.shields.io/badge/License-' + badgeName + ')](https://opensource.org/liceses/' + badgeName + ')'
    let titleSec = '# ' + answers.title + '\n' + liceBadges
    let descriptionSec = '## Description ' + '\n' +  answers.description

    let tableCont = '## Table of Contents' + '\n' +  '* [Installation](#installation)'+ '\n' +   '* [Usage](#usage)' + '\n' +  '* [License](#license)' + '\n' +  '* [Contributing](#contributing)' + '\n' +  '* [Test](#test)' + '\n' +  '* [Questions](#questions)'

    let InstalSec = '## Installation ' + '\n' +  answers.instillation

    let usageSec = '## Usage ' + '\n' +  answers.    usageInformation

    let contributingSec = '## Contribution ' + '\n'  + answers.contribution

    let testSec = '## Tests ' + '\n'  + answers.testInstructions

    let questSec = '## Questions ' + '\n' +  'For questions please send me an email at '+ answers.email + '.' + 'You can view more of my work at ' + '[' + answers.userName + '](https://github.com/' + answers.userName + '/)' 

    let liceSec = '## License' + '\n' + 'This project is licensed under the ' + liceLinks

    let document = titleSec +  '\n' + descriptionSec + '\n'  + '\n' + tableCont + '\n'  + '\n' + InstalSec + '\n'  + '\n' + usageSec + '\n'  + ' \n' + contributingSec + '\n'  + '\n' + testSec + '\n'  + '\n' + questSec + '\n'  + '\n' + liceSec
    
    
    fs.writeFile('./changeName.md', document,  (err) => {
        if (err) throw err;
        console.log("the file has been saved!");
    })
}
  
  
  init();


function renderLicenseBadge() {
    if (liceName === 'Apache License 2.0') {
    let liceBadges = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    let liceLinks = '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
    } else if (liceName === 'BSD 3-Clause "New" or "Revised" License') {
    let liceBadges =  '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    let liceLinks = '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)'
    } else if (liceName === 'BSD 2-Clause "Simplified" License') {
    let liceBadges = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    let liceLinks = '[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)'
    } else if (liceName === 'GNU Affero General Public License v3.0') { 
    let liceBadges = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    let liceLinks = '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)'
    } else if (liceName === 'GNU General Public License v2.0') { 
    let liceBadges = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    let liceLinks = '[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    } else if (liceName === 'Creative Commons Zero v1.0 Universal') { 
    let liceBadges = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    let liceLinks = '[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)'
    } else if (liceName === 'GNU General Public License v3.0') { 
    let liceBadges = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    let liceLinks = '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (liceName === 'MIT') { 
    let liceBadges = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    let liceLinks = '[MIT](https://opensource.org/licenses/MIT)'
    } else if (liceName === 'Mozilla Public License v2.0') { 
    let liceBadges = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    let liceLinks = '[Mozilla Public License v2.0](https://opensource.org/licenses/MPL-2.0)'
    } else if (liceName === 'The Unlicense') { 
    let liceBadges = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    let liceLinks = '[The Unlicense](http://unlicense.org/)'
    } else if (liceName === 'Boost Software License 1.0') { 
    let liceBadges = '[![License](https://img.shields.io/badge/License-Boost_201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    let liceLinks = '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (liceName === 'Eclipse Public License 2.0') { 
    let liceBadges = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
    let liceLinks = '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)'
    } else if (liceName === 'GNU Lesser General Public License v2.1') { 
    let liceBadges = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)'
    let liceLinks = '[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-2.1)'
    } 
    return liceBadges, liceLinks;
}
  

 
