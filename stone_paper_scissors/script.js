let userScore = 0;
let compScore = 0;
let drawScore = 0;
let timesPlayed =0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const played = document.querySelector("#played");

const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");


const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = ()=>{
    drawScore++;
    timesPlayed++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
    played.innerText = `Number of times game played = ${timesPlayed}`;
};


const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        timesPlayed++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        played.innerText = `Number of times game played = ${timesPlayed}`;

    }else{
        compScore++;
        timesPlayed++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! Your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        played.innerText = `Number of times game played = ${timesPlayed}`;
    }
};


const playGame = (userChoice) =>{
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice ==="paper"){
            //scissors,rock
            userWin = compChoice === "scissors" ? false: true;
        } else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
