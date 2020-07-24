var userQuestion = document.querySelector("input")
var answerButton = document.querySelector(".answer-button")
var eightBall = document.querySelector(".eight-ball")
var result = document.querySelector(".display")
var questionDisplay = document.querySelector("h1")
var answerDisplay = document.querySelector("p")
var clearButton = document.querySelector(".clear-button");

class DisplayAnswer {
  constructor(question, answer){
    this.question = question;
    this.answer = answer;
  }
};
var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

window.addEventListener('click', clickHandler)

function clickHandler(event){
  if (event.target === answerButton ){
    toggleBall(eightBall, result)
    generateAnswer(userQuestion.value, getRandomAnswer())
  }
  if (event.target === clearButton ){
      toggleBall(eightBall, result)
    }
}

function generateAnswer(first, last){
  var resultQuestion = new DisplayAnswer(first,last);
  questionDisplay.append(resultQuestion.question);
  answerDisplay.append(resultQuestion.answer);
  userQuestion.value = '';
}

function getRandomAnswer() {
  var answer = Math.floor(Math.random() * answers.length);
  return answers[answer];
};

function toggleBall(ball, result) {
  ball.classList.toggle("hidden");
  result.classList.toggle("hidden");
};
