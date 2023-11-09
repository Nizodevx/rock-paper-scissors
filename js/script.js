function getComputerChoice () {
        let options = ["Rock", "Paper", "Scissors"]
        return choice = options[Math.floor(Math.random()*options.length)]

}


let getPlayerInput = prompt();

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
   
    playerSelection = getPlayerInput
    computerSelection = getComputerChoice()
    
    if (playerSelection=="Rock" && computerSelection=="Scissors") {
        return "You win"
    }else if (playerSelection=="Rock" && computerSelection=="Paper"){
        return "You lost"
    }else if (playerSelection=="Rock" && computerSelection=="Rock"){
        return "Draw"
    }else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        return "You win"
    }else if (playerSelection=="Paper" && computerSelection=="Scissors"){
        return "YOu lost"
    }else if (playerSelection=="Paper" && computerSelection=="Rock"){
        return "You win"
    }else if (playerSelection=="Paper" && computerSelection=="Paper"){
        return "Draw"
    }else if (playerSelection=="Scissors" && computerSelection=="Scissors"){
        return "Draw"
    }else if (playerSelection=="Scissors" && computerSelection=="Rock"){
        return "You lost"
    }else if (playerSelection=="Scissors" && computerSelection=="Paper"){
        return "You win"
    };
        
}
function reloadGame() {
    for (let i=0; i <= 5; i++){
        console.log(getComputerChoice());
        console.log(playRound());
    }
}


console.log(reloadGame())

