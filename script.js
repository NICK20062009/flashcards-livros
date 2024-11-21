
// Perguntas do quiz
const questions = [
    {
        question: "Quem é o autor de 'Orgulho e Preconceito'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Louisa May Alcott"],
        answer: "Jane Austen"
    },
    {
        question: "Em que livro encontramos o casal Heathcliff e Catherine?",
        options: ["O Morro dos Ventos Uivantes", "Jane Eyre", "Razão e Sensibilidade", "Madame Bovary"],
        answer: "O Morro dos Ventos Uivantes"
    },
    {
        question: "Qual é o romance mais conhecido de Gabriel García Márquez?",
        options: ["Amor nos Tempos do Cólera", "Cem Anos de Solidão", "O Outono do Patriarca", "Crônica de uma Morte Anunciada"],
        answer: "Amor nos Tempos do Cólera"
    }
];

let currentQuestionIndex = 0;

// Função para iniciar o quiz
function startQuiz() {
    document.querySelector(".intro").classList.add("hidden");
    document.querySelector("#quiz-section").classList.remove("hidden");
    showQuestion();
}

// Função para exibir a pergunta atual
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        ${question.options.map(option => `
            <button class="option-btn" onclick="selectAnswer('${option}')">${option}</button>
        `).join('')}
    `;
}

// Função para selecionar a resposta
function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta errada. A resposta correta é: ${correctAnswer}`);
    }

    document.getElementById("next-btn").classList.remove("hidden");
}

// Função para passar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("next-btn").classList.add("hidden");
    } else {
        alert("Você completou o quiz! Obrigado por participar.");
        location.reload();
    }
}
