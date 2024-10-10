let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompCh = () =>{
    const options = ["rock", "paper" , "scissors"];
   const ranidx = Math.floor(Math.random() * 3);
   return options[ranidx];
}

const showWinner=(userWin , userchoiceId ,compchoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log(" you won!");
        msg.innerText = `you won! your ${userchoiceId} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("comp won!");
        msg.innerText = `comp won! as ${compchoice} beats your ${userchoiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = " Game was DRAW!";
    msg.style.backgroundColor = "grey";
}

const playGame = (userchoiceId) =>{
    console.log("user choice was clicked",userchoiceId);
    const compchoice = genCompCh();
    console.log("comp choice was clicked",compchoice);

    //draw
    if (userchoiceId === compchoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userchoiceId === "rock"){
            userWin = compchoice === "paper"? false : true;
        }else if(userchoiceId === "paper") {
            userWin = compchoice === "scissors"? false : true ;
        }else {
            userWin = compchoice === "rock"? false : true;
        }
        showWinner(userWin, userchoiceId,compchoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userchoiceId = choice.getAttribute("id");
     
     playGame(userchoiceId);
    });
});
