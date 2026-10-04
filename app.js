const choice_btn = document.querySelectorAll('.choices .choice-btn');
const userChoiceElement = document.querySelector('#user-choice');
const computerChoiceElement = document.querySelector('#computer-choice');
const resultDescription = document.querySelector('.result-section #result-description');
const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector('#computer-score');
const resetbtn = document.querySelector('#reset-btn');
const roundNumberElement = document.querySelector('#round-number');

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let roundNumber = 0;

choice_btn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(roundNumber===5){
            return;
        }
        userChoice = btn.firstElementChild.innerText;
        userChoiceElement.innerText = userChoice;
        computerChoice = getComputerChoice();
        checkWinner(userChoice,computerChoice);
    })
})

resetbtn.addEventListener('click',()=>{
    resetGame();
});

function getComputerChoice(){
    let random = Math.random()*10;

    if(random<=3){
        computerChoice = '✊';
    }else if(random<=6){
        computerChoice = '✋';
    }else if(random>6 && random<10){
        computerChoice = '✌️';
    }
    computerChoiceElement.innerText = computerChoice;
    roundNumber++;
    roundNumberElement.innerText = roundNumber;
    return computerChoice;
}

function checkWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
        resultDescription.innerText = "It's a tie!";
    }else if(userChoice==='✊' && computerChoice==='✌️' || userChoice==='✋' && computerChoice==='✊' || userChoice==='✌️' && computerChoice==='✋'){
        resultDescription.innerText = 'You won 🎉';
        userScore++;
        userScoreElement.innerText = userScore;
    }else{
        resultDescription.innerText = 'You lose 😭';
        computerScore++;
        computerScoreElement.innerText = computerScore;
    }
    if(roundNumber === 5){
        if(userScore > computerScore){
            resultDescription.innerText = "You won the match! 🏆";
        }else if(computerScore > userScore){
            resultDescription.innerText = "Computer won the match! 🤖";
        }else{
            resultDescription.innerText = "Match tied! 🤝";
        }

        return;
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
    roundNumber = 0;
    roundNumberElement.innerText = roundNumber;
    resultDescription.innerText = 'Choose Rock, Paper or Scissors to start the game';
    userChoiceElement.innerText = '?';
    computerChoiceElement.innerText = '?';
}
