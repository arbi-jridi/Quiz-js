const gamescreen = document.querySelector(".game");
const resultscreen = document.querySelector(".result");
const question = document.querySelector(".question");
const theAnswers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const score = document.querySelector(".score");
const replay = document.querySelector(".replay");

let qindex = 0;
let correctCount = 0;
let wrongCount = 0;

let selectedAnswer;

let data = [
  {
    id: 1,
    Question: "Question 1 : how many hours on journey",
    answers: [
      { answer: "12h", isCorrect: false },
      { answer: "24h", isCorrect: true },
      { answer: "36h", isCorrect: false },
      { answer: "48h", isCorrect: false },
    ],
  },
  {
    id: 2,
    Question: "Question 2 : how many days on month",
    answers: [
      { answer: "32", isCorrect: false },
      { answer: "17", isCorrect: false },
      { answer: "30", isCorrect: true },
      { answer: "20", isCorrect: false },
    ],
  },
  {
    id: 3,
    Question: "Question 3 :  how many month on year",
    answers: [
      { answer: "8", isCorrect: false },
      { answer: "10", isCorrect: false },
      { answer: "20", isCorrect: false },
      { answer: "12", isCorrect: true },
    ],
  },
];

const showQuestion = (qnumber) => {
  selectedAnswer = null;
  if (qindex == data.length) return showResult();
  question.textContent = data[qnumber].Question;
  theAnswers.innerHTML = data[qnumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
  <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
  <label for=${index}>${item.answer}</label>
</div>`
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  theAnswers.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
      console.log(selectedAnswer);
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer != null) {
      selectedAnswer == "true" ? correctCount++ : wrongCount++;
      qindex++;
      showQuestion(qindex);
    } else alert("Please select an Answer");
  });
};

const showResult = () => {
  correct.textContent = `Your Correct answers are : ${correctCount}`;
  wrong.textContent = `Your wrong answers are :${wrongCount}`;
  score.textContent = `Your score is : ${(correctCount - wrongCount) * 10}`;
  gamescreen.style.display = "none";
  resultscreen.style.display = "block";
};

const replayGame = () => {
  replay.addEventListener("click", () => {
    qindex = 0;
    correctCount = 0;
    wrongCount = 0;
    showQuestion(qindex);
    gamescreen.style.display = "block";
    resultscreen.style.display = "none";
  });
};

showQuestion(qindex);
submitAnswer();
replayGame();
