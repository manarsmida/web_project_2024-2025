'use strict';
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});



const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



const questions = [
  {
    question: "What is Big Data?",
    options: ["Data that is stored on a floppy disk.", "Small sets of information stored in RAM","Large and complex data sets that are difficult to process with traditional data-processing software."],
    correct: 2
  },
  {
    question: "Which of the following is a type of NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL"],
    correct: 1
  },
  {
    question: "In machine learning, what does the term “overfitting” refer to?",
    options: ["When a model performs well on training data but poorly on unseen data.", "When a model performs equally well on both training and test data.", "When a model fails to identify patterns in the data."],
    correct: 0
  },
  {
    question:" Which protocol is primarily used to transfer web pages?",
    options:["FTP","HTTP","DNS"],
    correct: 1

  },
  {
    question:"What is the main purpose of an operating system?",
    options:["To convert high-level code into machine code.","To manage hardware and software resources of a computer system.","To perform arithmetic calculations."],
    correct: 1

  },
  {
    question:"In the context of IoT, what does “actuator” mean?",
    options:["A device that stores data in the cloud.","A device used to connect to the internet.","A device that takes actions based on sensor inputs."],
    correct: 2

  },
  {
    question:" What is the time complexity of searching for an element in a balanced binary search tree (BST)?",
    options:["O(log n)","O(n^2)","O(n)"],
    correct: 0

  },
  {
    question:"Which of the following is an example of supervised learning?",
    options:["K-Means Clustering","Linear Regression","Principal Component Analysis (PCA)"],
    correct: 1

  },
  {
    question:"Which of these is a popular version control system?",
    options:["Git","PyCharm","Kubernetes"],
    correct: 0

  },
  {
    question:"What does the acronym IoT stand for?",
    options:["Internet of Things","Information over Technology","Input-output Transfer"],
    correct: 0

  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionObj = questions[currentQuestion];
  document.getElementById("question").innerText = questionObj.question;
  const answers = document.querySelectorAll(".answer");
  answers.forEach((button, index) => {
    button.innerText = questionObj.options[index];
    button.classList.remove("correct", "incorrect");
    button.disabled = false;
    document.getElementById("next-btn").style.display = "none";
  });
}

function checkAnswer(index) {
  const questionObj = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer");

  if (index === questionObj.correct) {
    buttons[index].classList.add("correct");
    score++;
  } else {
    buttons[index].classList.add("incorrect");
  }

  buttons.forEach(button => button.disabled = true);
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("score").innerText = `Your score is: ${score} out of ${questions.length}`;
    document.getElementById("next-btn").style.display = "none";
  }
}

window.onload = loadQuestion;
