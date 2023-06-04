const title = document.getElementById('game-section-h1');
const startButton = document.getElementById('start-button');
const usernameModal = document.getElementById('username-modal');
const usernameInput = document.getElementById('username-input');
const usernameSubmit = document.getElementById('username-submit');
const categoryList = document.getElementById('category-list');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');

let username = '';
let currentCategoryIndex = -1; // Track the current category index
let currentQuestionIndex = 0;
let score = 0;

const quizData = [
    {
      category: 'Club Football',
      questions: [
        {
            question:"Which club won the UEFA Champions League in 2019?",
            options:[
               "Barcelona",
               "Liverpool",
               "Bayern Munich",
               "Real Madrid"
            ],
            answer:"Liverpool"
        },
        {
            question:"Which club has won the most English Premier League titles?",
            options:[
               "Manchester United",
               "Liverpool",
               "Chelsea",
               "Manchester City"
            ],
            "answer":"Manchester United"
        },
        {
            question:"Which club is known as \"The Invincibles\"?",
            options:[
               "Juventus",
               "Bayern Munich",
               "Arsenal",
               "Manchester City"
            ],
            "answer":"Arsenal"
        },
        {
            question:"Which club is known as \"The Blues\"?",
            options:[
               "Liverpool",
               "Paris Saint-Germain",
               "Chelsea",
               "Manchester City"
            ],
            "answer":"Chelsea"
        },
        {
            question:"Which club has won the most UEFA Europa League titles?",
            options:[
               "Atletico Madrid",
               "Sevilla",
               "Chelsea",
               "Manchester United"
            ],
            "answer":"Sevilla"
        },
        {
            question:"Which club has won the most Scottish Premiership titles?",
            options:[
               "Hearts",
               "Rangers",
               "Aberdeen",
               "Celtic"
            ],
            "answer":"Celtic"
        },
        {
            question:"Which club has won the most Primeira Liga titles in Portugal?",
            options:[
               "Porto",
               "Benfica",
               "Sporting Lisbon",
               "Braga"
            ],
            "answer":"Benfica"
        },
        {
            question:"Which club is known as \"The Reds\"?",
            options:[
               "AS Roma",
               "Liverpool",
               "Manchester United",
               "AC Milan"
            ],
            "answer":"Liverpool"
        },
        {
            question:"Which club is known as \"The Bavarians\"?",
            options:[
               "Bayern Munich",
               "Borussia Dortmund",
               "Schalke 04",
               "Stuttgart"
            ],
            "answer":"Bayern Munich"
        },
        {
            question:"Which club is known as \"The Nerazzurri\"?",
            options:[
               "Napoli",
               "Inter Milan",
               "AC Milan",
               "Juventus"
            ],
            "answer":"Inter Milan"
        },
        {
            question:"Which club has won the most FIFA Club World Cup titles?",
            options:[
               "Real Madrid",
               "Barcelona",
               "Bayern Munich",
               "Milan"
            ],
            "answer":"Real Madrid"
        },
        {
            question:"Which club is known as \"The King of Europe\"?",
            options:[
               "AC Milan",
               "Manchester United",
               "Boca Juniors",
               "Real Madrid"
            ],
            "answer":"Real Madrid"
        },
        {
            question:"Which club is known as \"The Yellow Submarine\"?",
            options:[
               "PSV Eindhoven",
               "Lazio",
               "Villareal",
               "Borussia Dortmund"
            ],
            "answer":"Villarreal"
        },
        {
            question:"Which club is known as \"The Millionaires\"?",
            options:[
               "Flamengo",
               "River Plate",
               "Palmeiras",
               "Nacional"
            ],
            "answer":"River Plate"
        }
      ]
    },
    {
      category: 'International Football',
      questions: [
        {
            question:"Which national club has won the most FIFA World Cup titles?",
            options:[
               "Germany",
               "Italy",
               "Brazil",
               "Argentina"
            ],
            answer:"Brazil"
        },
        {
            question:"Which national club has won the most UEFA European Championship titles?",
            options:[
               "Spain",
               "Germany",
               "France",
               "Italy"
            ],
            answer:"Germany"
        },
        {
            question:"Which national club has won the most Copa America titles?",
            options:[
               "Brazil",
               "Argentina",
               "Uruguay",
               "Chile"
            ],
            answer:"Argentina"
        },
        {
            question:"Which national club has won the most AFC Asian Cup titles?",
            options:[
               "South Korea",
               "Japan",
               "Saudi Arabia",
               "Iran"
            ],
            answer:"Japan"
        },
        {
            question:"Which national club is known as \"The Red Fury\"?",
            options:[
               "Belgium",
               "Spain",
               "England",
               "Portugal"
            ],
            answer:"Spain"
        },
        {
            question:"Which national club has won the most CAF Africa Cup of Nations titles?",
            options:[
               "Ghana",
               "Cameroon",
               "Egypt",
               "Nigeria"
            ],
            answer:"Egypt"
        },
        {
            question:"Which national club is known as \"The Three Lions\"?",
            options:[
               "Germany",
               "England",
               "Netherlands",
               "Belgium"
            ],
            answer:"England"
        },
        {
            question:"Which national club has won the most CONCACAF Gold Cup titles?",
            options:[
               "United States",
               "Mexico",
               "Costa Rica",
               "Canada"
            ],
            answer:"Mexico"
        },
        {
            question:"Which national club is known as \"The Samba Boys\"?",
            options:[
               "Argentina",
               "Brazil",
               "Colombia",
               "Uruguay"
            ],
            answer:"Brazil"
        },
        {
            question:"Which national club has won the most OFC Nations Cup titles?",
            options:[
               "Australia",
               "New Zealand",
               "Fiji",
               "Tahiti"
            ],
            answer:"New Zealand"
        }
      ]
    },
    {
      category: 'Legends of the Game',
      questions: [
        {
            question:"Who is the all-time leading goalscorer in international football?",
            options:[
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Ali Daei",
               "Pelé"
            ],
            answer:"Pelé"
            
        },
        {
            question:"Which player has won the most FIFA Ballon d'Or awards?",
            options:[
               "Lionel Messi",
               "Cristiano Ronaldo",
               "Michel Platini",
               "Johann Cruyff"
            ],
            answer:"Michel Platini"
        },
        {
            question:"Who is the all-time leading goalscorer in club football?",
            options:[
               "Pele",
               "Lionel Messi",
               "Cristiano Ronaldo",
               "Ferenc Puskas"
            ],
            answer:"Pele"
        },
        {
            question:"Which player has won the most UEFA Champions League titles?",
            options:[
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Paolo Maldini",
               "Francisco Gento"
            ],
            answer:"Francisco Gento"
        },
        {
            question:"Who is the all-time leading goalscorer in World Cup history?",
            options:[
               "Miroslav Klose",
               "Ronaldo",
               "Gerd Muller",
               "Pelé"
            ],
            answer:"Gerd Muller"
        },
        {
            question:"Which player has won the most European Golden Shoe awards?",
            options:[
               "Lionel Messi",
               "Cristiano Ronaldo",
               "Gerd Muller",
               "Thierry Henry"
            ],
            answer:"Thierry Henry"
        },
        {
            question:"Which player has won the most FIFA World Cup titles?",
            options:[
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Diego Maradona",
               "Pele"
            ],
            answer:"Pele"
        },
        {
            question:"Who has scored the most hat-tricks in La Liga?",
            options:[
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Telmo Zarra",
               "Hugo Sanchez"
            ],
            answer:"Cristiano Ronaldo"
        },
        {
            question:"Which player has won the most UEFA European Golden Shoe awards?",
            options:[
               "Lionel Messi",
               "Cristiano Ronaldo",
               "Marco van Basten",
               "Eusébio"
            ],
            answer:"Lionel Messi"
        },
        {
            question:"Who has scored the most goals in a single UEFA Champions League season?",
            options:[
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Robert Lewandowski",
               "Ruud van Nistelrooy"
            ],
            answer:"Cristiano Ronaldo"
        },
        {
            question:"Who is the all-time leading goalscorer in El Clásico matches?",
            options:[
               "Lionel Messi",
               "Cristiano Ronaldo",
               "Alfredo Di Stefano",
               "Raul"
            ],
            answer:"Lionel Messi"
        },
        {
            question:"Who has scored the most goals in a single UEFA European Championship tournament?",
            options:[
               "Cristiano Ronaldo",
               "Michel Platini",
               "Alan Shearer",
               "Fernando Torres"
            ],
            answer:"Michel Platini"
        },
        {
            question:"Who is the all-time leading goalscorer in the UEFA European Championship?",
            options:[
               "Cristiano Ronaldo",
               "Michel Platini",
               "Thierry Henry",
               "Marco van Basten"
            ],
            answer:"Cristiano Ronaldo"
        },
        {
            question:"Who has won the most European Golden Shoe awards in their career?",
            options:[
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Gerd Muller",
               "Jimmy Greaves"
            ],
            answer:"Lionel Messi"
        },
        {
            question:"Who is the only player to have won the European Golden Shoe with two different clubs?",
            options:[
               "Thierry Henry",
               "Cristiano Ronaldo",
               "Lionel Messi",
               "Marco van Basten"
            ],
            answer:"Thierry Henry"
        },
        {
            question:"Who has the most assists in the history of the UEFA Champions League?",
            options:[
               "Lionel Messi",
               "Cristiano Ronaldo",
               "Ryan Giggs",
               "Andrés Iniesta"
            ],
            answer:"Andrés Iniesta"
        }
      ]
    }
];

startButton.addEventListener('click', showUsernameModal);
usernameSubmit.addEventListener('click', handleUsernameSubmit);

// Show username modal when start button is clicked
function showUsernameModal() {
    startButton.classList.add('hide');
    title.classList.add('hide');
    usernameModal.style.display = 'block';
}

// Handle username submission
function handleUsernameSubmit() {
    username = usernameInput.value.trim();
    if (username !== '') {
      usernameModal.style.display = 'none';
      categoryList.classList.remove('hide');
    }
}

function validateUsername() {
    var usernameInput = document.getElementById("username-input");
    var errorMessage = document.getElementById("error-message");
  
    if (usernameInput.value === "") {
      errorMessage.classList.remove("hide");
    } else {
      errorMessage.classList.add("hide");
    }
}

// Show category selection when name is submitted
function showCategories() {
    startButton.classList.add('hide');
    title.classList.add('hide');
    categoryList.classList.remove('hide');
}

// Start the quiz for the selected category
function startQuiz(categoryIndex) {
    categoryList.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentCategoryIndex = categoryIndex;
    currentQuestionIndex = 0;
    score = 0;
    const category = quizData[currentCategoryIndex];
    const allQuestions = category.questions;
    const shuffledQuestions = shuffleArray(allQuestions); // Shuffle the questions
    const selectedQuestions = shuffledQuestions.slice(0, 4); // Select the first four questions
    category.questions = selectedQuestions;
    displayQuestion();
}

// Event listener for category items
const categoryItems = document.getElementsByClassName('category-item');
Array.from(categoryItems).forEach((item, index) => {
  item.addEventListener('click', () => {
    startQuiz(index);
  });
});

// Helper function to shuffle an array using Fisher-Yates algorithm
// https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Display the current question
function displayQuestion() {
    const category = quizData[currentCategoryIndex];
    const question = category.questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
  
    question.options.forEach((option) => {
      const answerElement = document.createElement('div');
      answerElement.textContent = option;
      answerElement.classList.add('answer');
      answerElement.addEventListener('click', () => {
        checkAnswer(answerElement, option, question.correctAnswer);
      });
      optionsContainer.appendChild(answerElement);
    });

    nextButton.classList.add('hide');
}

// Check the selected answer
function checkAnswer(answerElement, selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      answerElement.classList.add('correct');
      score++;
    } else {
      answerElement.classList.add('wrong');
      const options = optionsContainer.getElementsByClassName('answer');
      Array.from(options).forEach((option) => {
        if (option.textContent === correctAnswer) {
          option.classList.add('correct');
        }
      });
    }

    disableAnswerSelection();
    showNextButton();
}

// Show next button after an answer is clicked
function showNextButton() {
    nextButton.classList.remove('hide');
    nextButton.onclick = function() {
      showNextQuestion();
      resetAnswerStyles();
    };
}

// Show next question or end the quiz
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentCategoryIndex].questions.length) {
      displayQuestion();
      resetAnswerStyles();
    } else {
        showScore();
    }
}

// Reset answer styles for the next question
function resetAnswerStyles() {
    const options = optionsContainer.getElementsByClassName('answer');
    Array.from(options).forEach((option) => {
      option.className = 'answer';
      option.style.pointerEvents = 'auto';
    });
}

// After an answer is clicked, disable answer selection
function disableAnswerSelection() {
    const options = optionsContainer.getElementsByClassName('answer');
    Array.from(options).forEach((option) => {
      option.style.pointerEvents = 'none';
    });
}

// Show the final score
function showScore() {
    questionContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreDisplay.textContent = `${score} / ${quizData[currentCategoryIndex].questions.length}`;
}