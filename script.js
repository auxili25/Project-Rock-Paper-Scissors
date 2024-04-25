function getComputerChoice(){
  let computer = ["rock", "paper", "scissor"];
  let random = computer[Math.floor(Math.random() * computer.length)];
  return random;
}

function playerSelections(){
  let selection=prompt("rock, paper, scissor:");
  let result = selection.toLowerCase();
  return result;
}  

function playsSingleRound (playerSelection,computerSelection){
  if(playerSelection == computerSelection){
      return "tie";
  }else if(playerSelection == "rock" && computerSelection == "paper"){
      return "You loses! paper beats rock";
  }else if(playerSelection =="scissor"&& computerSelection== "paper"){
      return "You win! scissor beats paper";
  }else if(playerSelection=="rock"&& computerSelection=="scissor"){
      return "You win! rock beats scissor";
  }else if(playerSelection=="paper" && computerSelection=="rock"){
      return "You win! paper beats rock";
  }else if(playerSelection=="paper"&& computerSelection=="scissor"){
      return "You loses! scissor beats paper";  
  }else if(playerSelection=="scissor" && computerSelection=="rock"){
      return "You loses! rock beats scissor";
  }
}

let playerWins = 0;
let computerWins = 0;
function playGame(){
  let playerSelection = playerSelections();
  let computerSelection = getComputerChoice();
  let result = playsSingleRound(playerSelection, computerSelection);

  if (result.includes("win")) {
      playerWins++;
  } else if (result.includes("loses")) {
      computerWins++;
  }

console.log("Player Wins: " + playerWins + " | Computer Wins: " + computerWins);

  if (playerWins === 3) {
      return "¡Congratulations! You have won the game! PlayerPoint: " + playerWins + ", ComputerPoints: " + computerWins + ".";
  } else if (computerWins === 3) {
      return "The computer has won the game sorry! PlayerPoint: " + playerWins + ", ComputerPoints: " + computerWins + ".";
  } else {
      return result;
  }
}

for(let i = 0; i <= 15; i++){
  let gameResult = playGame();
  console.log(gameResult);
    if (gameResult.includes("Congratulations") || gameResult.includes("sorry")) {
        break;
  }
}