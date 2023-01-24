// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of project?',
        validate: (value) => {
            if (value) { return true } else { return 'Insert project title.' }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert description of project..' }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write installation information for your project.',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert installation information.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write usage instrutions for your project.',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert project usage instructions.' }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Write instructions on how to contribute to this project.',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert contribution instructions' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write test instructions for project.',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert test instructions.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        choices: ["GPLv3", "MIT", "Apache"],
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Choose a license.' }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username?',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert Github username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?',
        validate: ( value ) => {
            if ( value ) { return true } else { return 'Insert your email.' }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README generated.');
            }
        })
    };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README1.md", generateMarkdown(data));
    })
};

// Function call to initialize app
init();