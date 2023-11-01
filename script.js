//ORIGINAL CODE
// console.log("hello");


// function getComputerchoice(){

//     let choices = ["rock","paper","scissor"];
//     let randnum = Math.floor(Math.random()*3);

//     //console.log(choices[randnum]);

//     return choices[randnum];
// }

// function result(getComputerchoice, playerSelection){

//     if(getComputerchoice === "rock" ){

//         if(playerSelection === "scissor"){
//             return "you lose";
//         }
//         else if(playerSelection === "paper"){
//             return "you win";
//         }
//         else if(playerSelection === "rock"){
//             return "its a Tie";
//         }
//     }
//     if(getComputerchoice === "paper" ){

//         if(playerSelection === "scissor"){
//             return "you win";
//         }
//         else if(playerSelection === "paper"){
//             return "its a Tie";
//         }
//         else if(playerSelection === "rock"){
//             return "you lose";
//         }
//     }
//     if(getComputerchoice === "scissor" ){

//         if(playerSelection === "scissor"){
//             return "its a tie";
//         }
//         else if(playerSelection === "paper"){
//             return "you lose";
//         }
//         else if(playerSelection === "rock"){
//             return "you win";
//         }
//     }

// }
// // const playerSelection = prompt("Enter a choice");
// // const computerchoice = getComputerchoice(); 
// // console.log(computerchoice);
// // console.log(playerSelection);
// // console.log(result(computerchoice,playerSelection));

// function game(){
//     for(i= 0 ;i<5; i++){
//         const playerSelection = prompt("Enter a choice");
//         const computerchoice = getComputerchoice(); 
//         console.log(computerchoice);
//         console.log(playerSelection);
//         console.log(result(computerchoice,playerSelection));

//     }
    
// }
// game();


//console.log("hello");


function getComputerchoice(){

    let choices = ["rock","paper","scissor"];
    let randnum = Math.floor(Math.random()*3);

    //console.log(choices[randnum]);

    return choices[randnum];
}

function result(getComputerchoice, playerSelection){

    if(getComputerchoice === "rock" ){

        if(playerSelection === "scissor"){
            return "You Lose";
        }
        else if(playerSelection === "paper"){
            return "You Win";
        }
        else if(playerSelection === "rock"){
            return "Its a Tie";
        }
    }
    if(getComputerchoice === "paper" ){

        if(playerSelection === "scissor"){
            return "You Win";
        }
        else if(playerSelection === "paper"){
            return "Its a Tie";
        }
        else if(playerSelection === "rock"){
            return "You Lose";
        }
    }
    if(getComputerchoice === "scissor" ){

        if(playerSelection === "scissor"){
            return "Its a Tie";
        }
        else if(playerSelection === "paper"){
            return "You Lose";
        }
        else if(playerSelection === "rock"){
            return "You Win";
        }
    }

}


function game(choice){
   // for(i= 0 ;i<5; i++){
        // const playerSelection = prompt("Enter a choice");
        const computerchoice = getComputerchoice(); 
        console.log(computerchoice);
        document.getElementById("compselect").innerHTML = (computerchoice);
        console.log(choice);
        document.getElementById("myselect").innerHTML = (choice);
        console.log(result(computerchoice,choice));
        document.getElementById("result").innerHTML = (result(computerchoice,choice));
   // }
    
}
//game();

// passing an argument with a function on click
const paperelement = document.getElementById("paper");
paperelement.addEventListener("click",() => {game("paper")});

const rockelement = document.getElementById("rock");
rockelement.addEventListener("click",() => {game("rock")});

const scissorelement = document.getElementById("scissor");
scissorelement.addEventListener("click",() => {game("scissor")});
