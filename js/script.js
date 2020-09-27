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
        answer: 'Back-end',
        correct: true,
      },
      {
        answer: 'Front-end',
        correct: false,
      },
      {
        answer: 'Operational Systems',
        correct: false,
      },
      {
        answer: 'Database',
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
    question: "What's the id selector in CSS",
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
  {
    question: 'React.JS is?',
    answers: [
      {
        answer: 'A front-end framework',
        correct: true,
      },
      {
        answer: 'A back-end framework',
        correct: false,
      },
      {
        answer: 'A mathematic library',
        correct: false,
      },
      {
        answer: 'A programming language',
        correct: false,
      },
    ],
  },
  {
    question: 'What language has the extension ".cs"?',
    answers: [
      {
        answer: 'C++',
        correct: false,
      },
      {
        answer: 'C',
        correct: false,
      },
      {
        answer: 'C#',
        correct: true,
      },
      {
        answer: 'Java',
        correct: false,
      },
    ],
  },
  {
    question: 'Which language below has static typing?',
    answers: [
      {
        answer: 'PHP',
        correct: false,
      },
      {
        answer: 'Java',
        correct: true,
      },
      {
        answer: 'Python',
        correct: false,
      },
      {
        answer: 'Ruby',
        correct: false,
      },
    ],
  },
  {
    question: 'How to declare arrays in javascript?',
    answers: [
      {
        answer: '[1, 2, 3]',
        correct: true,
      },
      {
        answer: '(1, 2, 3)',
        correct: false,
      },
      {
        answer: '{1, 2, 3}',
        correct: false,
      },
      {
        answer: '1, 2, 3',
        correct: false,
      },
    ],
  },
  {
    question: 'What library to run javascript in backend?',
    answers: [
      {
        answer: 'Sequelize',
        correct: false,
      },
      {
        answer: 'Angular.JS',
        correct: false,
      },
      {
        answer: 'React',
        correct: false,
      },
      {
        answer: 'Node.JS',
        correct: true,
      },
    ],
  },
  {
    question: 'Which answer below IS NOT a database management system?',
    answers: [
      {
        answer: 'MySQL',
        correct: false,
      },
      {
        answer: 'MongoDB',
        correct: false,
      },
      {
        answer: 'Postman',
        correct: true,
      },
      {
        answer: 'PostgreSQL',
        correct: false,
      },
    ],
  },
  {
    question: 'Which answer below IS NOT a programming language?',
    answers: [
      {
        answer: 'Assembly',
        correct: false,
      },
      {
        answer: 'HTML',
        correct: true,
      },
      {
        answer: 'Go',
        correct: false,
      },
      {
        answer: 'Delphi',
        correct: false,
      },
    ],
  }
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
    const answerTemplate = document
      .querySelector('.answer-template')
      .cloneNode(true);
    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    answersBox.appendChild(answerTemplate);

    answerTemplate.addEventListener('click', () => {
      checkAnswer(answerTemplate);
    });
  });

  actualQuestion += 1;
}

function checkAnswer(btn) {
  const buttons = answersBox.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') === 'true') {
      button.classList.add('correct-answer');

      if (btn === button) {
        points += 1;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  nextQuestion();
}

function nextQuestion() {
  setTimeout(() => {
    if (actualQuestion >= questions.length) {
      successMessage();
      return;
    } else {
      createQuestion(actualQuestion);
    }
  }, 800);
}

function successMessage() {
  quizContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');

  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector('#correct-answer');
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector('#question-qtd');
  totalQuestions.textContent = questions.length;
}

const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', () => {
  actualQuestion = 0;
  points = 0;
  quizContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
  init();
});
