const questions = [
    {
        questions:"Which is the largest state in India?",
        answers:[
            {text:"Uttar pradesh",correct:false},
            {text:"Madhya pradesh",correct:false},
            {text:"Rajasthan",correct:true},
            {text:"Gujrat",correct:false},
        ]
    },
    {
        questions:"Which is the largest desert in India?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Antractica",correct:false},
            {text:"Sahara",correct:true},
        ]
    },
    { questions:"Which is the capital of Maharastra?",
        answers:[
            {text:"Mumbai",correct:true},
            {text:"Pune",correct:false},
            {text:"Panji",correct:false},
            {text:"Surat",correct:false},
        ]
    },
    {
        questions:"Which is the Deepest ocean in the world?",
        answers:[
            {text:"Indian ocean",correct:false},
            {text:"Pacific ocean",correct:true},
            {text:"Arctic ocean",correct:false},
            {text:"Atlantic ocean",correct:false},
        ]
    },
    {
        questions:"Which city is known as pink city of India?",
        answers:[
            {text:"Lucknow",correct:false},
            {text:"Indore",correct:false},
            {text:"Jaipur",correct:true},
            {text:"New Delhi",correct:false},
        ]
    },
    {
        questions:"Which is the largest state in India?",
        answers:[
            {text:"Uttar pradesh",correct:false},
            {text:"Madhya pradesh",correct:false},
            {text:"Rajasthan",correct:true},
            {text:"Gujrat",correct:false},
        ]
    },
    {
        questions:"Who is the founder of facebook?",
        answers:[
            {text:"Jeff Bezos",correct:false},
            {text:"Sunder Pichai",correct:false},
            {text:"Mark Zukerberg",correct:true},
            {text:"Ratan Tata",correct:false},
        ]
    },
    {
        questions:"Which is the smallest country in the world ?",
        answers:[
            {text:"Nepal",correct:false},
            {text:"Vatican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Monaco",correct:false},
        ]
    },
    {
        questions:"Which is the fastest bird in the world?",
        answers:[
            {text:"Peregrine falcon",correct:true},
            {text:"Woodcock",correct:false},
            {text:"Eagle",correct:false},
            {text:"Common swift",correct:false},
        ]
    },
    {
        questions:"Which is the Cleanest country in the world?",
        answers:[
            {text:"China",correct:false},
            {text:"Denmark",correct:true},
            {text:"Canada",correct:false},
            {text:"Austria",correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.questions;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;


    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();