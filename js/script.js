const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizContainer = document.querySelector('#quiz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

const questions = [
  {
    question: 'PHP was developed for?',
    answers: [
      {
        answer: 'back-end',
        correct: true,
      },
      {
        answer: 'front-end',
        correct: false,
      },
      {
        answer: 'Sistema operacional',
        correct: false,
      },
      {
        answer: 'Banco de dados',
        correct: false,
      },
    ],
  },
  {
    question: 'One way of variable declaration in Javascript',
    answers: [
      {
        answer: '$var',
        correct: false,
      },
      {
        answer: 'var',
        correct: true,
      },
      {
        answer: '@var',
        correct: false,
      },
      {
        answer: '#let',
        correct: false,
      },
    ],
  },
  {
    question: "What's the selector id in CSS",
    answers: [
      {
        answer: '#',
        correct: true,
      },
      {
        answer: '.',
        correct: false,
      },
      {
        answer: '@',
        correct: false,
      },
      {
        answer: '/',
        correct: false,
      },
    ],
  },
];

function init() {
  createQuestion(0);
}

init();

function createQuestion(i) {
  const oldButton = answersBox.querySelectorAll('button');
  oldButton.forEach((btn) => {
    btn.remove();
  });
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach((answer, i) => {
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true)
    const letterBtn = answerTemplate.querySelector('.btn-letter')
    const answerText = answerTemplate.querySelector('.question-answer')

    letterBtn.textContent = letters[i]
    answerText.textContent = answer['answer']

    answerTemplate.setAttribute('correct-answer', answer['correct'])

    answerTemplate.classList.remove('hide')
    answerTemplate.classList.remove('answer-template')

    answersBox.appendChild(answerTemplate)
  })
}
