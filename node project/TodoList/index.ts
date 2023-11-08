import inquirer from "inquirer"
let arr=[]
while(true){
    let user=await inquirer.prompt([
        {
            name:"userperform",
            type:"rawlist",
            messege:"What do you want to do?",
            choices:["Add Tasks","List Tasks","Remove Tasks","Exit Application"]
        }
    ])
    if(user.userperform==="Add Tasks"){
        let title=await inquirer.prompt([
            {
                type:"input",
                name:"titleuser",
                messege:"Write title"
            }
        ])
        let description=await inquirer.prompt([
            {
                type:"input",
                name:"Descriptionuser",
                messege:"Write Description"
            }
        ])
        let taskobj={title:title.titleuser,description:description.Descriptionuser}
        arr.push(taskobj) 
    }
    
    console.log(arr)
    if(user.userperform==="List Tasks"){
        arr.forEach((val,index)=>{
            console.log(`${index}=>(title):${val.title}(description):${val.description}`)
        })
    }
    if(user.userperform==="Exit Application"){
        break
    }
    if(user.userperform==="Remove Tasks"){
        for (let index = 0; index < arr.length; index++) {
            arr.splice(index)
        }
    }
}
