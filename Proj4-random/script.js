const inp = document.querySelector("#inp");
const generate = document.querySelector("#sub");
const totalMove = document.querySelector("#totalMover");
const allNumbers = document.querySelector("#userNumbers");
const dm = document.querySelector("#dm");
const endButton = document.querySelector("#end");
const startButton = document.querySelector("#start");

let random = Math.floor(Math.random() * 20 + 1);
console.log(random);  // For debugging purposes
let countPlayTime = 0;
let wonCount = 0;

// Event listener for "Generate" button
generate.addEventListener("click", function (e) {
  e.preventDefault();
  if (inp.disabled) return;  // Prevent playing when input is disabled
  const userValue = inp.value;
  validation(userValue);
  
//   totalMove.innerHTML = `Total Moves: ${countPlayTime}`;
displayGuess(inp.value)
  if (countPlayTime >= 5) {
    end();
  }
});

// Event listener for "End Game" button
endButton.addEventListener("click", end);

// Event listener for "Start Game" button
startButton.addEventListener("click", startGame);

function validation(n) {
  if (n === "" || isNaN(n) || n < 1 || n > 20) {
    displayMessage("Please Enter a Valid Number Between 1 to 20");
  } else {
    checkNumber(n);
  }
}

function checkNumber(n) {
  if (parseInt(n) === random) {
    displayMessage("You won");
    wonCount++;
  } else {
    displayMessage("Try Again");
  }
}

function displayGuess(n){
    inp.value = '';
    allNumbers.innerHTML += `${n}, `;
    countPlayTime++;
    totalMove.innerHTML = `Remaining : ${11 - countPlayTime} `;
}

function displayMessage(message) {
  dm.innerHTML = message;
}

function startGame() {
  random = Math.floor(Math.random() * 20 + 1);
  console.log(random);  // For debugging purposes
  inp.removeAttribute("disabled");
  inp.value = "";  // Clear input
  countPlayTime = 0;
  wonCount = 0;
  allNumbers.innerHTML = "";
  totalMove.innerHTML = "";
  dm.innerHTML = "Game Started! Guess a number.";
}

function end() {
  displayMessage(`Game Over! You had ${wonCount} win(s).`);
  countPlayTime = 0;
  wonCount = 0;
  random = 0;  // Reset the random number
  inp.setAttribute("disabled", "true");
  inp.value = "";  // Clear input
  allNumbers.innerHTML = "";
  totalMove.innerHTML = "";
}
