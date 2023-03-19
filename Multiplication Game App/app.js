//  to replace 1 with random numbers

const num1 = Math.ceil(Math.random() * 10); //to generate random number between 1 and 10

const num2 = Math.ceil(Math.random() * 10); //to generate random number between 1 and 10
//Math.ceil  rounds number to higher value
//Math.floor rounds number to lower value

const questionElement = document.querySelector("#question");

questionElement.innerText = `What is ${num1} multiply by ${num2}`;

const correctAns = num1 * num2;

//to get answer from user to crossCheck it
const inputElement = document.querySelector("#input");

const formElement = document.querySelector("#form");

const scoreElement = document.querySelector("#score");

let score = JSON.parse(localStorage.getItem("score")); // parse to convert string to number
if (!score) {
  score = 0;
}

scoreElement.innerText = `score: ${score}`;

formElement.addEventListener("submit", () => {
  const userAns = +inputElement.value; //+ to convert string to number

  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score)); // doesnt allow to store anything except string in the browser so we need to convert string to number
}
