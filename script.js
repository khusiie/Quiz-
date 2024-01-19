const questions =[

    {
        questions:"which is the largest animal in the world?",
        answers:[
            { text:"shark", correct:false },
            { text:"blue-whale", correct:true },
            { text:"Elephant", correct:false },
            { text:"giraffe", correct:false },


        ]
    },


    
    {
        questions:"which is the smallest continent of the world?",
        answers:[
            { text:"Asia", correct:false },
            { text:"Australia",correct:true },
            { text:"Arctic", correct:false },
            { text:"Africa", correct:false },


        ]
    },

    
    {
        questions:"which is the largest desert in the world?",
        answers:[
            { text:"kalahari", correct:false },
            { text:"Sahara", correct:false },
            { text:"Gobi", correct:false },
            { text:"Antartica", correct:true},


        ]
    },

    
    {
        questions:"which is the longest river in the world?",
        answers:[
            { text:"The Nile-River", correct:true },
            { text:"Amozon-zone", correct:false },
            { text:"Yellow River", correct:false },
            { text:"congo River", correct:false },


        ]
    },

]

const questionsElement = document.getElementById("questions") ;
const answerButtons = document.getElementById("answer-buttons") ;
const NextButton = document.getElementById("next-btn") ;

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0 ;
    score = 0;
    NextButton.innerHTML= "Next";
    showQuestion();

}

function showQuestion(){
   resetState(); 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionsElement.innerHTML= questionNo + ". " + currentQuestion.questions;


    currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text ;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
    button.dataset.correct = answer.correct;
    }
    button.addEventListener('click' , selectAnswer);

   });

}

function resetState(){
    NextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if( isCorrect){
        selectBtn.classList.add("correct");
       score++;

}
else{
    selectBtn.classList.add("incorrect");
}

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled = true;


});
 NextButton.style.display = "block";
 }



 function showScore(){
    resetState();
    questionsElement.innerHTML =`you scored ${score} out of ${questions.length}!`;
    NextButton.innerHTML = "play Again";
    NextButton.style.display = "block";
  
 }


 function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

 NextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{  
        startQuiz();

    } 
 });

  startQuiz();





   
 
