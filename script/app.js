let oneWin = document.getElementById("oneWin");
let threeWin = document.getElementById("twoWin");
let fourWin = document.getElementById("foutWin");
let play = document.getElementById("play");
let injectImgHere = document.getElementById("injectImgHere");
let Rock = document.getElementById("Rock");
let Paper = document.getElementById("Paper");
let Scissors = document.getElementById("Scissors");
let Lizard = document.getElementById("Lizard");
let Spock = document.getElementById("Spock");

let humanScore = document.getElementById("humanScore");
let compScore = document.getElementById("compScore");
let humanChoice = document.getElementById("humanChoice");
let compChoice = document.getElementById("compChoice");
let score = document.getElementById("score");
let dis = document.getElementById("dis");
let meh = document.getElementById("meh");
let nothing = document.getElementById("nothing");
let non = document.getElementById("non");
let outerDiv = document.getElementById("outerDiv");
let bodyDiv = document.getElementById("bodyDiv");

let oneRound = document.getElementById("oneRound");
let fiveRound = document.getElementById("fiveRound");
let sevenRound = document.getElementById("sevenRound");



//  oneRound = 0;

let level1 = "";
let level5 = "";
let level7 = "";

let counter = 0;
let rounds = 0;


console.log(oneRound);
oneRound.addEventListener("click",function(){
    level1 = this.value;
    console.log(level1);
    rounds = 1;
});
console.log(level1);

 console.log(level1);
fiveRound.addEventListener("click",function(){
    level5 = this.value;
    rounds = 5;
    console.log(level5);

});
console.log(level5);
sevenRound.addEventListener("click",function(){
    level7 = this.value;
    rounds = 7;
    console.log(level7);
});
console.log(level7);


humanScore = 0;
compScore = 0;
humanChoice = "";
compChoice = "";

savedInput = "";

let bot = document.getElementById("bot");
let vs = document.getElementById("vs");

Rock.addEventListener("click", function () {
  getData();
  humanChoice = "Rock";
  setTimeout(() => {
    console.log(compChoice);
  }, 1000);
  console.log(humanChoice);
  if (humanChoice === compChoice) {
    dis.innerText = "Its, a Tie!";
  } else if (
    (humanChoice === "Scissors" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Scissors") ||
    (humanChoice === "Scissors" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Scissors")
  ) {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Win!`;
    humanScore++;
  } else {

    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Lose!`;
    compScore++;

  }
  counter++;
  console.log("Total Rounds" + rounds);

});

Scissors.addEventListener("click", () => {
  getData();
  humanChoice = "Scissors";

  console.log(humanChoice);
  if (humanChoice === compChoice) {
    dis.innerText = "Its, a Tie!";
  } else if (
    (humanChoice === "Scissors" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Scissors") ||
    (humanChoice === "Scissors" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Scissors")
  ) {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Win!`;
    // score.innerText.humanScore;
    humanScore++;
    console.log(humanScore, compScore);
  } else {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Lose!`;
    compScore++;
    // score.innerText.compScore;
    console.log(compScore, humanScore);
    console.log(humanChoice, compChoice);
  }
  counter++;
});

Paper.addEventListener("click", () => {
  getData();
  humanChoice = "Paper";

  console.log(humanChoice);
  if (humanChoice === compChoice) {
    dis.innerText = "Its, a Tie!";
  } else if (
    (humanChoice === "Scissors" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Scissors") ||
    (humanChoice === "Scissors" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Scissors")
  ) {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Win!`;
    // score.innerText.humanScore;
    humanScore++;
    console.log(humanScore, compScore);
  } else {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Lose!`;
    compScore++;
    // score.innerText.compScore;
    console.log(compScore, humanScore);
    console.log(humanChoice, compChoice);
  }
  counter++;
});

function getData() {
  fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  )
    .then((response) => response.text())
    .then((data) => {
      compChoice = data;
    });
}

Lizard.addEventListener("click", () => {
  getData();
  humanChoice = "Lizard";

  console.log(humanChoice);
  if (humanChoice === compChoice) {
    dis.innerText = "Its, a Tie!";
  } else if (
    (humanChoice === "Scissors" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Scissors") ||
    (humanChoice === "Scissors" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Scissors")
  ) {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Win!`;
    // score.innerText.humanScore;
    humanScore++;
    console.log(humanScore, compScore);
  } else {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Lose!`;
    compScore++;
    // score.innerText.compScore;
    console.log(compScore, humanScore);
    console.log(humanChoice, compChoice);
  }
  counter++;
});

Spock.addEventListener("click", () => {
    
    getData();
  humanChoice = "Spock";

  console.log(humanChoice);
  if (humanChoice === compChoice) {
    dis.innerText = "Its, a Tie!";
  } else if (
    (humanChoice === "Scissors" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Scissors") ||
    (humanChoice === "Scissors" && compChoice === "Lizard") ||
    (humanChoice === "Lizard" && compChoice === "Paper") ||
    (humanChoice === "Paper" && compChoice === "Spock") ||
    (humanChoice === "Spock" && compChoice === "Rock") ||
    (humanChoice === "Rock" && compChoice === "Scissors")
  ) {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Win!`;
    // score.innerText.humanScore;
    humanScore++;
    console.log(humanScore, compScore);
  } else {
    meh.innerText = `You Pick: ${humanScore} | CPU Pick: ${compScore}`;
    dis.innerText = `You Lose!`;
    compScore++;
    // score.innerText.compScore;
    console.log(compScore, humanScore);
    console.log(humanChoice, compChoice);

  }
  counter++;
  scoreCheck(humanScore, compScore);
  console.log(counter);
});
console.log(counter);

// Play button function
nothing.addEventListener("click", function () {
//   off();
  MakeCard();
  how();
});

// function off() {
//   non.innerHTML = "";
// }
// Vs selection
function MakeCard() {
  // the h5 
  let h5 = document.createElement("h5");
  h5.className = "card-title yot";
  h5.textContent = "Card Title";

  // p tag
  let p = document.createElement("p");
  p.className = "card-text";
  p.textContent =
    "Some quick example text to build on the card title and make up the bulk of the card's content";

  //create the a tag
  let a = document.createElement("a");
  a.className = "btn btn-primary";
  a.textContent = "go somewhere";
// body div
  let bodyDiv = document.createElement("div");
  bodyDiv.className = "card-body";

  //We create the card body with the
  // elements still inside
  bodyDiv.appendChild(h5);
  bodyDiv.appendChild(p);
  bodyDiv.appendChild(a);

  //Create the img tag with
  let img = document.createElement("img");
  img.className = "card-img-top";
  img.src = "../assets/vs.png";
  img.alt = "...";

  // outside frame
  let outsideDiv = document.createElement("div");
  outsideDiv.className = "card";
  outsideDiv.style = "width: 12rem; margin-left: 650px; margin-top: 250px;";

  outsideDiv.appendChild(img);
  non.appendChild(outsideDiv);
}




    function scoreCheck(human, comp){
        if(human === comp && rounds === 5 && counter === rounds){
            console.log("Its a tie");
        }else if (human === 1 && counter === 1){
            console.log("Human Wins");
        }else if (comp === 1 && counter === rounds){
            console.log("Comp Wins");
        }else if (human === 3 && counter === rounds)
        {
            console.log("Human Wins");
        }else if (comp === 3 && counter === rounds)
        {
            console.log("Comp Wins");
        }else if (human === 5 && counter === rounds){
            console.log("Humna Wins");
        }else if (comp === 5 && counter === rounds)
        {
            console.log("Comp Wins");
        }
    }
    




// // Bot selection
// function how(){
//     // the h5 
  
//   let h5 = document.createElement("h5");
//   h5.className = "card-title";
//   h5.textContent = "Card Title";

//   // p tag
//   let p = document.createElement("p");
//   p.className = "card-text";
//   p.textContent =
//     "Some quick example text to build on the card title and make up the bulk of the card's content";

//   //create the a tag
//   let a = document.createElement("a");
//   a.className = "btn btn-primary";
//   a.textContent = "go somewhere";

//   // body div
//   let bodyDiv = document.createElement("div");
//   bodyDiv.className = "card-body";

//   //We create the card body with the
//   // elements still inside
//   bodyDiv.appendChild(h5);
//   bodyDiv.appendChild(p);
//   bodyDiv.appendChild(a);
//   bodyDiv.appendChild(button);
//   // img tag 
//   let img = document.createElement("img");
//   img.className = "card-img-top";
//   img.src = "../assets/Bot.png";
//   img.alt = "...";

//   //outside frame
//   let outsideDiv = document.createElement("div");
//   outsideDiv.className = "card";
//   outsideDiv.style = "width: 12rem; margin-left: 330px; bottom: 200px;";

//   outsideDiv.appendChild(img);
    
//   non.appendChild(outsideDiv);
// }
