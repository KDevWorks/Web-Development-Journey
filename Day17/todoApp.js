let todo = [];

let req= prompt("Please Enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting the app");
        break;
    }
    if(req == "list"){
        console.log("**********");
        for(let i=0; i<=todo.length-1; i++){
            console.log(`${i}. ${todo[i]}`);
        }
         console.log("**********");
    } else if(req=="add"){
      let newTask = prompt("Enter new Task");
      todo.push(newTask);
      console.log(`${newTask} added to the list`);
    }else if(req=="delete"){
        let index = prompt("Enter indeox of task to be deleted")
        todo.splice(index,1);
        console.log("Task deleted");
    } else {
        console.log("Unknown request");
    }
     req= prompt("Please Enter your request");

}
