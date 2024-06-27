#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import exchangeRates, { ExchangeRates } from "./currencies.js"

console.log(chalk.blue.bold("\n\t\t----------------Welcome to Currency Convertor----------------\n"));
console.log(`Note: israil is not considered as a country here!\n`);
console.log(`I did not use any currency convertor api here that is why there is no current exchanges of currencies.\n`);


//Define the list of currencies and their exchange rates
let exchange_rate: ExchangeRates = exchangeRates;

// ask the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: Object.keys(exchange_rate),
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: Object.keys(exchange_rate),

    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:"
    },
]);

// gathering data from inputs into variales
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

//formula of conversion
let converted_amount = (amount / from_amount) * to_amount;

//Display the converted amount
console.log(`${user_answer.amount}${user_answer.from_currency} = ${converted_amount}${user_answer.to_currency}`);