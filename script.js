 let select;

 const buttons = document.querySelectorAll(".container");
 buttons.forEach(elem => elem.addEventListener('click', e => {
  select = e.target.id;
  select;
  oneRound();
  scoreBoard();
  matchWinner();
}));

let playerScore = 0 ;
let computerScore = 0 ; 

let winDiv = document.createElement('div');
winDiv.classList.add('results');

function youLost(){
  computerScore++ ;
  playerScore = playerScore ; 
   if(winDiv.childNodes[0]) {
    winDiv.removeChild(winDiv.childNodes[0])
   }
  let display = document.createElement('p');
  display.textContent = "You lost!"
  display.style.cssText = "left: 624px; position:relative; top:30px; width:100px;font-size:20px";
  winDiv.appendChild(display);
  document.body.appendChild(winDiv);
}

function youWin(){
  playerScore++ ;
  computerScore = computerScore ;
  if(winDiv.childNodes[0]) {
    winDiv.removeChild(winDiv.childNodes[0])
   }
  let display = document.createElement('p');
  display.textContent = "You win!"
  display.style.cssText = "left: 624px; position:relative; top:30px;width:100px;font-size:20px";
  winDiv.appendChild(display);
  document.body.appendChild(winDiv);

}

function itsaTie(){
  computerScore = computerScore ; 
  playerScore = playerScore ; 
  if(winDiv.childNodes[0]) {
    winDiv.removeChild(winDiv.childNodes[0])
   }
  let display = document.createElement('p')
  display.textContent = "It's a tie!" ;
  display.style.cssText = "left: 624px; position:relative; top:30px;width:100px;font-size:20px";
  winDiv.appendChild(display);
  document.body.appendChild(winDiv)
}

function oneRound(){

   function chooseRandom() {
       return (Math.floor(Math.random()*3) + 1)
    }

   let computerSelection = chooseRandom() ;

   function computerPlay() {
       if (computerSelection == 1 ) {
               return "ROCK" 
            } else if (computerSelection == 2) {
                return "PAPER" 
            } else if (computerSelection == 3) { 
                return "SCISSORS" 
            }
    }

   function playerSelection() {
     select;
    if(select == "rock"){
        return "ROCK"
      } else if(select == "paper"){
        return "PAPER"
      } else if(select == "scissors"){
        return "SCISSORS"
      }
   }

   let computerPick = computerPlay();
   let playerPick = playerSelection();

    function playRound() {
        if(computerPick === playerPick) {
            itsaTie();
        } else if (computerPick == "ROCK" && playerPick == "PAPER") {
            youWin();     
      } else if (computerPick == "PAPER" && playerPick == "SCISSORS") {
            youWin();        
      } else if (computerPick == "SCISSORS" && playerPick == "ROCK") {
            youWin();
      } else if (playerPick == "ROCK" && computerPick == "PAPER") {
            youLost();        
      } else if (playerPick == "SCISSORS" && computerPick == "ROCK") {
            youLost();
      } else if (playerPick == "PAPER" && computerPick == "SCISSORS") {
            youLost();
      }
   }
   playRound();
}
      let score = document.createElement('div');
      let scorePlayer = document.createElement('p') ; 
      scorePlayer.textContent = "Your score :" + playerScore;
      let scorePC = document.createElement('p') ; 
      scorePC.textContent = "The computer score :" + computerScore ; 
      score.appendChild(scorePlayer);
      score.appendChild(scorePC);
      document.body.appendChild(score);
      scorePlayer.style.cssText = 'margin-left:350px; width:300px;position:absolute;font-size:20px';
      scorePC.style.cssText = 'margin-left:775px; width: 300px;position:absolute;font-size:20px';


    function scoreBoard(){
      playerScore;
      computerScore;
      score.removeChild(scorePlayer);
      score.removeChild(scorePC);
      scorePlayer.textContent = "Your score :" + playerScore;
      scorePlayer.style.cssText = 'margin-left:350px; width:300px;position:absolute;font-size:20px';
      scorePC.textContent = "The computer score :" + computerScore 
      scorePC.style.cssText = 'margin-left:775px; width:300px;position:absolute;font-size:20px';
      score.appendChild(scorePlayer);
      score.appendChild(scorePC);
    }

    let finalScore = document.createElement('div');
    finalScore.classList.add("finalScore");

 function matchWinner(){
    if(finalScore.childNodes[0]) {
      finalScore.removeChild(finalScore.childNodes[0]);
      playerScore = 0 ;
      computerScore = 0 ; 
     }
        else if (playerScore === 5){
        let winnerPlayer = document.createElement('p');
        winnerPlayer.textContent = "You won the match!"
        winnerPlayer.style.cssText = "left: 565px; position:relative; top:30px;color:green;font-size:23px;width:230px";
        finalScore.appendChild(winnerPlayer);
        document.body.appendChild(finalScore);
        } else if(computerScore === 5){
        let winnerPC = document.createElement('p');
        winnerPC.textContent = "You lost the match!";
        winnerPC.style.cssText = "left: 565px; position:relative; top:30px;color:red;font-size:23px;width:230px";
        finalScore.appendChild(winnerPC);
        document.body.appendChild(finalScore);
        }
     }

    