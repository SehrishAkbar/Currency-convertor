#! /user/bin/env node
import inquirer from 'inquirer';


const  currency: any = {
  USD:1, // base currency
  EUR : 0.94,
  GBP : 0.803,
  INR: 83.52,
  PKR : 277.73,

};

let user_answer = await inquirer.prompt(
 [
   { 
        name : 'from',
        message : 'enter from currency',
        type: 'list',
        choices: ["USD" , "EUR" , "GBP" , "INR" , "PKR"],

      },

      { 
        name : 'to',
        message : 'enter to currency',
        type: 'list',
        choices: ["USD" , "EUR" , "GBP" , "INR" , "PKR"],

      },

      { 
        name : 'amount',
        message : 'enter your amount',
        type: 'number',

      }

    ]
)
let fromAmount = currency[user_answer.from]  //exchange rate
let toAmount = currency[user_answer.to]  // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount  //USD base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(Math.round(convertedAmount));




