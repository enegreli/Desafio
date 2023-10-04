const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const messageElement = document.getElementById("message");
const guessElement = document.getElementById("guess");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    const userGuess = parseInt(guessElement.value);
    if (userGuess === randomNumber) {
        messageElement.textContent = `Você acertou em ${attempts + 1} tentativas!`;
        // Ofereça a opção de reiniciar o jogo
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Chute muito alto!";
    } else {
        messageElement.textContent = "Chute muito baixo!";
    }
    attempts++;
});