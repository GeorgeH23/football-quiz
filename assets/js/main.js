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

let username = '';
let currentCategoryIndex = -1; // Track the current category index
let currentQuestionIndex = 0;

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