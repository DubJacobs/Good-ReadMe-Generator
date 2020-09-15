const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");




function writeToFile(fileName, data) {



}

async function init() {
    const questions = [
        {
            message: "What is your GitHub username?",
            name: "userName",
            type: "input"
        },

        {
            message: "What is your project title?",
            name: "projectTitle",
            type: "input"
        },

        {
            message: "What is the description of your project?",
            name: "description",
            type: "input"
        },

        {
            message: "What are the Table of contents?",
            name: "tableOfContents",
            type: "input"
        },

        {
            message: "What type of installation?",
            name: "installation",
            type: "input",
        },

        {
            message: "What licenses did you use?",
            name: "license",
            type: "input",
        },

        {
            message: "who is contributing and what?",
            name: "contributing",
            type: "input",
        },

        {
            message: "what tests?",
            name: "tests",
            type: "input",
        },

    ];
    const answer = await inquirer.prompt(questions)
    console.log(answer)
    const data = await gitHubRequest(answer.userName)
    console.log(data)
    answer.gitHub = { profilePicture: data.avatar_url, email: data.email }
    console.log(answer)
}

async function gitHubRequest(userName) {
    let result
    const queryUrl = `https://api.github.com/users/${userName}`;
    try {
        const { data } = await axios.get(queryUrl);
        result = data
    } catch (e) {
        console.log(e);
    }
    return result
}
init();
