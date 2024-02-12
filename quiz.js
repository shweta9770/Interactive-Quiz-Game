const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const submitBtn = document.getElementById("submit-btn");

    questionElement.innerText = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerText = option;
        optionElement.setAttribute("data-index", index);
        optionElement.onclick = selectOption;

        optionsContainer.appendChild(optionElement);
    });

    submitBtn.disabled = true;
}

function selectOption() {
    const selectedOption = this.innerText;
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
    this.classList.add("selected");

    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = false;
}

function submitAnswer() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));

    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }

    updateScore();
}

function updateScore() {
    const scoreElement = document.getElementById("score-value");
    scoreElement.innerText = score;
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score is ${score}/${quizData.length}</p>`;
}

// Initial Load
loadQuestion();
