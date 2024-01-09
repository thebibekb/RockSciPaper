let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uSB = document.querySelector("#user-score");
const cSB = document.querySelector("#comp-score");

const userSc  = document.querySelector("#user-score");
const compSc= document.querySelector("#comp-score");



const genCompChoic =()=>{

    const options =["rock" , "paper", "sci"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}


//////

const drawGmae =() =>{
    
    msg.innerText = "GAME DRAW  :|";
    msg.style.backgroundColor ="darkblue";
    
}

const winner = (userWin,userChoice ,compChoice )=>{
    if(userWin){
        userScore++;
        userSc.innerText  = userScore;
        msg.innerText = `You won!  :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compSc.innerText= compScore;
        msg.innerText = `YOU LOOSE :( ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame =(userChoice)=>{

    //generate computer choice
    const compChoice = genCompChoic();
    

    if(userChoice===compChoice){
        //Draw 
       drawGmae();
    }

    else{
        let userWin = true;
        if (userChoice==="rock") {
            //sci,  paper 
            userWin = compChoice ==="paper"? false : true;
            
        }
        else if (userChoice==="paper") {
            userWin = compChoice==="sci"? false : true;
        }
        else{
            //i.e sci
                userWin = compChoice==="rock" ? false: true;
            }
            winner(userWin,userChoice,compChoice);
    }
};
////////

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
    
});

//for dark-light mode 
let modebtn = document.getElementById("#mode");
let bg = document.querySelector("body");
let curr =0;
modebtn.addEventListener("click",()=>{
  console.log("clicked");

});