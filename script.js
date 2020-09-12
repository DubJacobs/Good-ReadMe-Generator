const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const questions = [

    {
    message: "What is your project title?",
    name: "projectTitle",
    type: "input"
    }, 

    {
    message: "What is the description of your project?",
    name: "Description",
    type: "input"
    }, 


];
inquirer.prompt(questions)



function writeToFile(fileName, data) {



}

function init() {

}

init();
