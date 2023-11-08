// ATM
// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.

// Create a GitHub repository for the project and submit its URL in the project submission form.

import inquirer from "inquirer"
let user_data=await inquirer.prompt([
    {
    name:"id",
    message:"Enter your id",
    type:"string"
},
    {
    name:"pin",
    message:"Enter your pin",
    type:"string"
}
])
let total_amount=1000;
if(user_data.id.length!==0 && user_data.pin.length!==0){
    let createuser=await inquirer.prompt([
        {
            type:"rawlist",
            name:"Transaction",
            choices:["Deposit","Withdraw"]
        },])
    if(createuser.Transaction==="Deposit"){
        let deposit=await inquirer.prompt([
            {
                name:"depo",
                messege:"Enter the amount you want to deposit",
                type:"number"
            },
        ])
        total_amount=total_amount+deposit.depo
        console.log(total_amount)
    }
    else{
        if(createuser.Transaction==="Withdraw"){
            let withdraw=await inquirer.prompt([
                {
                    name:"with",
                    messege:"Enter the amount you want to withdraw",
                    type:"number"
                },
            ])
            if(withdraw.with>total_amount){
                console.log("Unsufficient Balance")
            } 
            else{
                total_amount=total_amount-withdraw.with
                console.log(total_amount)
            }
            
        }
        else{
            console.log(total_amount)
        }
    }
        
        
}
else{
    console.log("Please Enter Id or Pin")
}

