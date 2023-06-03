const title = document.getElementById('game-section-h1');
const startButton = document.getElementById('start-button');
const usernameModal = document.getElementById('username-modal');
const usernameInput = document.getElementById('username-input');
const usernameSubmit = document.getElementById('username-submit');

let username = '';

startButton.addEventListener('click', showUsernameModal);

// Show username modal when start button is clicked
function showUsernameModal() {
    startButton.classList.add('hide');
    title.classList.add('hide');
    usernameModal.style.display = 'block';
}