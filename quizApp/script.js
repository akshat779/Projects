const questions = [
    {
        question: "What is the capital of France?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Dublin", correct: false}
        ]
        
    },
    {
        question: "What is the capital of Ireland?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: false},
            {text: "Dublin", correct: true}
        ]
        
    },
    {
        question: "What is the capital of England?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: true},
            {text: "Paris", correct: false},
            {text: "Dublin", correct: false}
        ]
        
    },
    {
        question: "What is the capital of USA?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Washington", correct: true},
            {text: "Dublin", correct: false}
        ]
        
    },
    {
        question: "What is the capital of Spain?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: false},
            {text: "Madrid", correct: true}
        ]
        
    },
    {
        question: "What is the capital of Germany?",
        answers:[
            {text: "New York", correct: false},
            {text: "Berlin", correct: true},
            {text: "Paris", correct: false},
            {text: "Dublin", correct: false}
        ]
        
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currenyQuestionIndex;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct === true){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",(e) => {
            // selectAnswer(e);
            const selectedBtn = e.target;
            const iscorrect = selectedBtn.dataset.correct == "true";
            if(iscorrect){
                selectedBtn.classList.add("correct");
                score++;
            }        
            else{
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButton.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        });
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerText = `Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
       showScore();
    }
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz()