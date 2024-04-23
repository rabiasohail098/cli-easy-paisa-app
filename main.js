#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let bal = 30000;
let pin = 12345;
while (true) {
    console.log(chalk.bold.italic.redBright("<<<<<<<<<  Welcome to easy paisa app  >>>>>>>>"));
    const answer = await inquirer.prompt({ message: "Please enter your 5 digits pincode.",
        name: "pincode",
        type: "password",
    });
    if (answer.pincode > 10000 && answer.pincode < 99999) {
        console.log(chalk.italic.bold.greenBright("Your pincode is correct!!!"));
        let operatorAns = await inquirer.prompt({ message: "Please select an operator.",
            name: "operators",
            type: "list",
            choices: [
                chalk.italic.green("transfer money"),
                chalk.italic.blackBright("receive money"),
                chalk.italic.blueBright("bill payments"),
                chalk.italic.magentaBright("easy load bundles"),
                chalk.italic.yellowBright("savings"),
                chalk.italic.redBright("exit")
            ]
        });
        if (operatorAns.operators === chalk.italic.green("transfer money")) {
            let transferAns = await inquirer.prompt({ message: (chalk.italic.yellowBright("Please enter your amount.")),
                name: "tsmoney",
                type: "number",
            });
            let remainingbal = bal - transferAns.tsmoney;
            if (transferAns.tsmoney > 30000) {
                console.log(chalk.italic.bold.blueBright("You have insufficient balance."));
            }
            else {
                console.log(chalk.italic.bold.grey(`Your remaining bal is ${remainingbal}.`));
            }
        }
        if (operatorAns.operators === chalk.italic.blackBright("receive money")) {
            let recMoneyAns = await inquirer.prompt({ message: "Please enter your amount.",
                name: "rcmoney",
                type: "number"
            });
            let newbal = bal + recMoneyAns.rcmoney;
            console.log(chalk.italic.bold.magentaBright(`Your new balance is ${newbal}.`));
        }
        if (operatorAns.operators === chalk.italic.blueBright("bill payments")) {
            let billpaymentsAns = await inquirer.prompt({ message: "Please enter your amount to paying the bill.",
                type: "number",
                name: "billpayment",
            });
            let afterpayment = bal - billpaymentsAns.billpayment;
            if (billpaymentsAns.billpayment > bal) {
                console.log(chalk.italic.bold.green("You have insufficient balance."));
            }
            else {
                console.log(chalk.bold.italic.yellow(`Your bill payed successfully and your remaining balance is ${afterpayment}.`));
            }
        }
        if (operatorAns.operators === chalk.italic.magentaBright("easy load bundles")) {
            console.log(chalk.italic.bold.magentaBright("<<<<<<<<<< Welcome to easy load bundles >>>>>>>>>>>"));
            let easyloadAns = await inquirer.prompt({ message: "Please select your bundle.",
                name: "easyload",
                type: "list",
                choices: [
                    chalk.italic.redBright("Zong bundle"),
                    chalk.italic.magentaBright("Jazz bundle"),
                    chalk.italic.blueBright("Telenor bundle")
                ]
            });
            if (easyloadAns.easyload === chalk.italic.redBright("Zong bundle")) {
                console.log(chalk.italic.bold.grey("****** Welcome to zong bundle ******"));
                let zongAns = await inquirer.prompt({ message: "Please select your bundle.",
                    name: "zong",
                    type: "list",
                    choices: [
                        chalk.italic.bold.blueBright("Daily bundle"),
                        chalk.italic.bold.blueBright("Weekly bundle"),
                        chalk.italic.bold.blueBright("Monthly bundle"),
                    ]
                });
            }
            if (easyloadAns.easyload === chalk.italic.magentaBright("Jazz bundle")) {
                console.log(chalk.italic.bold.grey("****** Welcome to jazz bundle ******"));
                let JazzAns = await inquirer.prompt({ message: "Please select your bundle.",
                    name: "Jazz",
                    type: "list",
                    choices: [
                        chalk.italic.bold.blueBright("Daily bundle"),
                        chalk.italic.bold.blueBright("Weekly bundle"),
                        chalk.italic.bold.blueBright("Monthly bundle"),
                    ]
                });
            }
            if (easyloadAns.easyload === chalk.italic.blueBright("Telenore bundle")) {
                console.log(chalk.italic.bold.grey("****** Welcome to telenor bundle ******"));
                let telenorAns = await inquirer.prompt({ message: "Please select your bundle.",
                    name: "telenor",
                    type: "list",
                    choices: [
                        chalk.italic.bold.blueBright("Daily bundle"),
                        chalk.italic.bold.blueBright("Weekly bundle"),
                        chalk.italic.bold.blueBright("Monthly bundle"),
                    ]
                });
            }
            let elAns = bal - easyloadAns.choices;
            console.log(chalk.italic.yellowBright(`You are successfully subscribe this bundle.`));
        }
        if (operatorAns.operators === chalk.italic.yellowBright("savings")) {
            console.log(chalk.italic.bold.blackBright(`Your saving is ${bal}.`));
        }
        if (operatorAns.operators === chalk.italic.redBright("exit")) {
            console.log(chalk.italic.bold.yellowBright("Thank you for using this app."));
        }
    }
    else {
        console.log(chalk.italic.bold.redBright("Your pincode is incorrect!!!!"));
    }
}
;
