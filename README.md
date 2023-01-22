# readmeGenerator

Use read me template to create a readme generator

program will create the new readme file

so like 09 how we created a file  

the application will be invoked by using the following bash command 

```
node index.js
``` 
Sections of the read me
title
description
Table of Contents
    * this will be constant unless I figure out how to say would you like to include x section then I will need this to be dynamic
Installation
 Usage
 License
 Contributing 
 Tests
 Questions

 If I can figure out the include x section other sections to include would be:
 credits
 Features
 

User Story 
AS A Developer
I WANT  a README generator
SO THAT I can quickly create a professional README for a new project

```
GIVEN a command-line application that accepts user input 
WHEN I am prompted for information about my application repository
THEN a high-quality, professional REAME.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my title project 
THEN this is displayed as the title of the README 

WHEN I enter a description, installation instructions, usage information, contribution guidlines, and test instructions 
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my applicaiton from a list of options
THEN a badge for that license is added near the top of the README and notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub 

WHEN I enter my email address 
THEN this is added to the section of the README entitle Questions, with instructions on how to reach me with additional questions


