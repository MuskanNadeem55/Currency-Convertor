#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright("\n\t\t*****WELCOME TO CURRENCY CONVERTOR*****\n"));

const currency : any ={

    USD: 1,
    EUR: 0.91,
    AUD: 1.52,
    PKR: 278,
    INR: 74.57,
    BDT: 109.60,
    SGD: 1.35,
    EGP: 47.33,
    IRR: 42075.00,
    HKD: 7.83,
    MXN: 16.45,
    OMR: 0.38,
    TRY: 32.03,
    SAR: 3.75,
    AFN: 71.23,

};

let userSelection = await inquirer.prompt(
    [
        {
            name:"from",
            message:chalk.bgCyanBright.bold("\nSelect Currency which you want to convert : "),
            type:"list",
            choices:["USD","EUR","AUD","PKR","INR","BDT","SGD","EGP","IRR","HKD","MXN","OMR","TRY","SAR","AFN"]

        },

        {
            name:"to",
            message:chalk.bgCyanBright.bold("\nSelect Currency in which you want to convert : "),
            type:"list",
            choices:["USD","EUR","AUD","PKR","INR","BDT","SGD","EGP","IRR","HKD","MXN","OMR","TRY","SAR","AFN"] 
        },

        {
            name:"amount",
            message:"\nEnter Your Amount : ",
            type:"number",
        }
    ]
)


let fromlist = currency[userSelection.from];
let tolist = currency[userSelection.to];
let amount = userSelection.amount;

let basicAmount = amount / fromlist;
let convertedAmount = basicAmount * tolist;

console.log(chalk.bgBlueBright(convertedAmount.toFixed(2)));



