let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div =document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    // console.log(Math.floor(Math.random()*3));
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
//  Win- Game
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beat ${convertToWord(computerChoice)}${smallCompWord} + ". You Win !!`;
    // document.getElementById(userChoice).classList.add('green-glow');
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 600);
}

// Lose - Game
function lose(userChoice, computerChoice) {

computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lose to ${convertToWord(computerChoice)}${smallCompWord}+ ". You lost... !!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 600);
}

// Tire- Game
function draw(userChoice, computerChoice) {

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(computerChoice)}${smallCompWord} + ". it's Draw !!`;
    userChoice_div.classList.add('gold-glow');
    setTimeout(function() { userChoice_div.classList.remove('gold-glow') }, 600);
}

// console.log(getComputerChoice());

function game(userChoice){
    const computerChoice = getComputerChoice();
    // console.log(computerChoice);
    // console.log(" KKK " + userChoice);
    // console.log("user choice => " + userChoice);
    // console.log("computer choice => + computerChoice");
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        // console.log("User Win !!");
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        // console.log("Computer Win !!");
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        // console.log("It's a Draw !!");
        draw(userChoice, computerChoice);
        break;
    }
}
function main () {
rock_div.addEventListener('click', function(){
    // console.log("hey you click on rock");
    game("r");
})
paper_div.addEventListener('click', function(){
    // console.log("hey you click on paper");
    game("p");
})
scissors_div.addEventListener('click', function(){
    // console.log("hey you click on scissors");
    game("s");
})
}
main();
