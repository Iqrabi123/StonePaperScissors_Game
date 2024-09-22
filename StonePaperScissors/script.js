let userscore = 0;
let compuscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#move");

let userScorePara = document.querySelector("#user-score");
let compuScorePara = document.querySelector("#compu-score");

const genCompuChoice = () => {
    const option = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];

}

const drowGame = () => {
  msg.innerText = "Game of Drow. Play again.";
  msg.style.backgroundColor = "black";
}

const showWin = (userWin, userChoice, compuChoice) => {
  if(userWin){
    userscore++;
    userScorePara.innerText = userscore;
    console.log("You win!");
    msg.innerText = `You win! Your ${userChoice} beats ${compuChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compuscore++;
    compuScorePara.innerText = compuscore;
    msg.innerText = `You lose! ${compuChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  const compuChoice = genCompuChoice();

  if(userChoice === compuChoice) {
     drowGame();
  }else{
    let userWin = true;
    if(userChoice === "stone"){
      userWin = compuChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userWin = compuChoice === "scissors" ? false :true;
    }else{
      userWin = compuChoice === "stone" ? false : true;
    }
    showWin(userWin ,userChoice, compuChoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
     playGame(userChoice);
  });
});
