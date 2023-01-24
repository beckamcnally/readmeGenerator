// TODO: Create a function that returns a license badge based on which license is passed in

// I have to IMPORT these over 

// If there is no license, return an empty string
renderLicenseBadge()
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

  liceBadges.forEach(parm => console.log(parm))
}
module.exports = generateMarkdown;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
    console.log(`${property}: `)
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  

}

// TODO: Create a function to generate markdown for README
// this might me instead of my section where I declare the variable and then concatinate everything
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
