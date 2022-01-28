#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import boxen from "boxen"
import CFonts from "cfonts"

console.clear();

const prompt = inquirer.createPromptModule();
let date = new Date();
const orange = chalk.hex('#FFA500'); // Orange color
const someColor = chalk.hex('#25b068')

const wish = [
    "cool",
    "fantastic",
    "superb",
    "outstanding",
    "sensational",
    "perfect",
] // random strings after user quits

const data = {
    name: chalk.cyanBright("                  I'm Durgesh Ahire"),
    work: `${chalk.white("Student")}`, 
    github: chalk.gray("https://github.com/") + someColor("durgeshahire07"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("durgeshahire07"),
    web: chalk.gray("In progress"),
    npx: chalk.red("npx") + " " + chalk.greenBright("durgesh-ahire"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "green"
    }
);

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Facts about ${orange("me")}?`,
                value: () => {
                    console.log(orange("\nAbout Me\n"))
                    console.log(chalk.italic.greenBright(`=> Student at MIT-ADT University Pune, India\n=> Web developer\n=> App developer\n=> Likes to play Chess\n`))
                    prompt(questions).then(answer => answer.action());
                }
            },
            {
                name: `More ${chalk.yellowBright.bold("info")}?`,
                value: () => {
                    console.log(chalk.yellowBright(`\nMore Info!\n`));
                    console.log(chalk.italic.greenBright(`version 1.0.3\nThis is my npx card which i built in a few hours.\nWas pretty fun building it,\nYou can have a look at the source code here: ${chalk.italic.blueBright('https://github.com/durgeshahire07/npx-durgesh')}\n`))
                    prompt(questions).then(answer => answer.action()); 
                }
            },
            {
                name: `Just ${chalk.redBright.bold("quit")}.`,
                value: () => {
                    const rainbow = chalkAnimation.rainbow(`\nStay Strong and have a ${wish[Math.floor(Math.random() * 6)]} ${date.toLocaleString('en-US', {weekday: 'long'})}.
                    `,1.6)
                    rainbow.start();
                    setTimeout(() => {
                        // rainbow.stop();
                        process.exit(1);
                    }, 1100);
                  
                }
            }
        ]
    }
];

`${CFonts.say('Namaste, World!', {
    font: 'tiny',              // define the font face
    align: 'center',              // define text alignment
    colors: ['cyanBright'],         // define all colors
    background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1,           // define letter spacing
    lineHeight: 1,              // define the line height
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
    gradient:  ['yellow',"#55ff55"],            // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false,  // define if this is a transition between colors directly
    env: 'node'                 // define the environment CFonts is being executed in
})}`, 

console.log(me);
prompt(questions).then(answer => answer.action());