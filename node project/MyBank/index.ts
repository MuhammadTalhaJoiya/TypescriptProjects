import { faker } from "@faker-js/faker"
import inquirer from "inquirer"
class Customer{
    FirstName:string
    LastName:string
    Phone:number
    AccountNumber:number
    constructor(fname:string,lname:string,phone:number,accNumb:number){
        this.FirstName=fname
        this.LastName=lname
        this.Phone=phone
        this.AccountNumber=accNumb
    }
}
interface userBank{
    accountNumber:number
    balance:number
}
class Bank{
    customers:Customer[]=[]
    infoCustomer:userBank[]=[]
    addcustomer(User:Customer){
        this.customers.push(User)
    }
    addinfo(user:userBank){
        this.infoCustomer.push(user)
    }
    transaction(newRec:userBank){
        let newBal=this.infoCustomer.filter((val)=>{
            return val.accountNumber!==newRec.accountNumber
        })
        this.infoCustomer=[...newBal,newRec]
    }
}
let TalhaBank=new Bank()
const callfunc=()=>{
    for (let index:number = 0; index <3; index++) {
        let fname:string=faker.person.firstName("male")
        let lname:string=faker.person.lastName()
        let phone=parseInt(faker.phone.number("3##########"))
        let user=new Customer(fname,lname,phone,1000+index)
        TalhaBank.addcustomer(user)
        TalhaBank.addinfo({accountNumber:user.AccountNumber,balance:100*index})
    }
    console.log(TalhaBank)
}
callfunc()

const services=async()=>{
    do{
        let transuser=await inquirer.prompt([
            {
                type:"list",
                name:"trans",
                choices:["See Balance","Withdrawal","Deposit"],
                message:"Select the method"
            }
        ])
        if(transuser.trans==="See Balance"){
            let accr=await inquirer.prompt([
                {
                    type:"number",
                    name:"trans",
                    message:"APna account number dalo"
                }
            ])
            let abc=TalhaBank.infoCustomer.find((val)=>{
                return val.accountNumber===accr.trans
            })
            if(abc){
                console.log(abc.balance)
            }
            else{
                console.log("You have no account")
            }
        }
        else if(transuser.trans==="Withdrawal"){
            let accr=await inquirer.prompt([
                {
                    type:"number",
                    name:"trans",
                    message:"Apna account number dalo"
                }
            ])
            let bal=await inquirer.prompt([
                {
                    type:"number",
                    name:"trans",
                    message:"Kitna balance withdraw krna hai?"
                }
            ])
            let userdata=TalhaBank.infoCustomer.find((val)=>{
                return val.accountNumber===accr.trans
            })
            if(userdata){
                if(userdata.balance>=bal.trans){
                    let amount=userdata.balance-bal.trans
                    console.log(amount)
                    TalhaBank.transaction({
                        accountNumber:userdata.accountNumber,balance:amount
                    })
                }
                else{
                    console.log("Unsufficient balance")
                }
                
            }
            else{
                console.log("INCORRECT ACCOUNT NUMBER")
            }
    
        }
        else if(transuser.trans==="Deposit"){
            let accr=await inquirer.prompt([
                {
                    type:"number",
                    name:"trans",
                    message:"APna account number dalo"
                }
            ])
            let bal=await inquirer.prompt([
                {
                    type:"number",
                    name:"trans",
                    message:"Kitna balance Deposit krna hai?"
                }
            ])
            let userdata=TalhaBank.infoCustomer.find((val)=>{
                return val.accountNumber===accr.trans
            })
            if(userdata){
                let amount=userdata.balance+bal.trans
                console.log(amount)
                TalhaBank.transaction({
                    accountNumber:userdata.accountNumber,balance:amount
                })
            }
            else{
                console.log("iNCORRECT ACCOUNT NUMBER")
            }
    
        }
    }while(true)
    
}
services()

