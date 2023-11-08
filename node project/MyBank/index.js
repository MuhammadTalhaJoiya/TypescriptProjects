import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
class Customer {
    constructor(fname, lname, phone, accNumb) {
        this.FirstName = fname;
        this.LastName = lname;
        this.Phone = phone;
        this.AccountNumber = accNumb;
    }
}
class Bank {
    constructor() {
        this.customers = [];
        this.infoCustomer = [];
    }
    addcustomer(User) {
        this.customers.push(User);
    }
    addinfo(user) {
        this.infoCustomer.push(user);
    }
    transaction(newRec) {
        let newBal = this.infoCustomer.filter((val) => {
            return val.accountNumber !== newRec.accountNumber;
        });
        this.infoCustomer = [...newBal, newRec];
    }
}
let TalhaBank = new Bank();
const callfunc = () => {
    for (let index = 0; index < 3; index++) {
        let fname = faker.person.firstName("male");
        let lname = faker.person.lastName();
        let phone = parseInt(faker.phone.number("3##########"));
        let user = new Customer(fname, lname, phone, 1000 + index);
        TalhaBank.addcustomer(user);
        TalhaBank.addinfo({ accountNumber: user.AccountNumber, balance: 100 * index });
    }
    console.log(TalhaBank);
};
callfunc();
const services = async () => {
    do {
        let transuser = await inquirer.prompt([
            {
                type: "list",
                name: "trans",
                choices: ["See Balance", "Withdrawal", "Deposit"],
                message: "Select the method"
            }
        ]);
        if (transuser.trans === "See Balance") {
            let accr = await inquirer.prompt([
                {
                    type: "number",
                    name: "trans",
                    message: "APna account number dalo"
                }
            ]);
            let abc = TalhaBank.infoCustomer.find((val) => {
                return val.accountNumber === accr.trans;
            });
            if (abc) {
                console.log(abc.balance);
            }
            else {
                console.log("You have no account");
            }
        }
        else if (transuser.trans === "Withdrawal") {
            let accr = await inquirer.prompt([
                {
                    type: "number",
                    name: "trans",
                    message: "Apna account number dalo"
                }
            ]);
            let bal = await inquirer.prompt([
                {
                    type: "number",
                    name: "trans",
                    message: "Kitna balance withdraw krna hai?"
                }
            ]);
            let userdata = TalhaBank.infoCustomer.find((val) => {
                return val.accountNumber === accr.trans;
            });
            if (userdata) {
                if (userdata.balance >= bal.trans) {
                    let amount = userdata.balance - bal.trans;
                    console.log(amount);
                    TalhaBank.transaction({
                        accountNumber: userdata.accountNumber, balance: amount
                    });
                }
                else {
                    console.log("Unsufficient balance");
                }
            }
            else {
                console.log("INCORRECT ACCOUNT NUMBER");
            }
        }
        else if (transuser.trans === "Deposit") {
            let accr = await inquirer.prompt([
                {
                    type: "number",
                    name: "trans",
                    message: "APna account number dalo"
                }
            ]);
            let bal = await inquirer.prompt([
                {
                    type: "number",
                    name: "trans",
                    message: "Kitna balance Deposit krna hai?"
                }
            ]);
            let userdata = TalhaBank.infoCustomer.find((val) => {
                return val.accountNumber === accr.trans;
            });
            if (userdata) {
                let amount = userdata.balance + bal.trans;
                console.log(amount);
                TalhaBank.transaction({
                    accountNumber: userdata.accountNumber, balance: amount
                });
            }
            else {
                console.log("iNCORRECT ACCOUNT NUMBER");
            }
        }
    } while (true);
};
services();
