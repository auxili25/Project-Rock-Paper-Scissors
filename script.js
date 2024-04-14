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

 
  function playGame() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors:").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playsSingleRound(playerSelection, computerSelection) === `It's a tie ${playerSelection} is equal to ${computerSelection}`) {
      console.log(playsSingleRound(playerSelection, computerSelection));
    } else if (playsSingleRound(playerSelection, computerSelection) === `You win ${playerSelection} beats ${computerSelection}`) {
      playerPoints++;
      console.log(playsSingleRound(playerSelection, computerSelection));
    } else {
      computerPoints++;
      console.log(playsSingleRound(playerSelection, computerSelection));
    }
  }

  if (playerPoints > computerPoints) {
    console.log(`Congratulations, you got ${playerPoints} and the computer got ${computerPoints}`);
  } else if (playerPoints < computerPoints) {
    console.log(`Game Over, you got ${playerPoints} and the computer got ${computerPoints}`);
  } else {
    console.log(`It's a tie, you got ${playerPoints} and the computer got ${computerPoints}`);
  }
}

playGame();