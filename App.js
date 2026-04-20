 const readline = require("readline");

 const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
 });

 rl.question("Enter your name :" , (name)=>{
    if (!name.trim()){
        console.log("Name cannot empty");
        rl.close();
        return;
    }
    rl.question("Enter your age:", (age) =>{

        const numAge = Number (age);
        
        if (isNaN(numAge)){
            


        } else if (numAge < 0){
            console.log("Age cannot be negative");

        } else {
            console .log (`Hello, ${name}!` );
            if(numAge >= 18){
                console.log("Your are an Adult");
            } else {
                console.log("You are a Minor") ;
            }
        }
       rl.close();
    })
    
 })