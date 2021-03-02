// Declaring Questions
const tvQuestions = [
    {
        question: "I'll be there for you, when the rain starts to _____",
        answer1: 'fall',
        answer2: 'pour',
        answer3: 'lash',
        correctAnswer: 2
    },
    {
        question: "The license plate said fresh and it had _____ in the mirror",
        answer1: 'dice',
        answer2: 'mice',
        answer3: 'rice',
        correctAnswer: 1
    },
    {
        question: "Hanging out down the _____, the same old thing we did last week",
        answer1: 'beach',
        answer2: 'street',
        answer3: 'block',
        correctAnswer: 2
    }
];

function startGame () {
    scoreNumber.innerText = '0';
    questionCounter = 0;
    score = 0;
    availableQuestions = [...tvQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        // set final player sore
        localStorage.setItem("playerScore", score);
        
        // go to Game End page
        return window.location.assign("game-end.html");
    }

    questionCounter++; // start game and increment to 1
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); // amount is always equal to how many questions are left
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(answer => { // iterate through answers
        const number = answer.dataset.number; // get number from data set property - get data set and give me the number
        answer.innerText = currentQuestion['answer' + number]; //grab answer property and data attribute associated to get the number
    });

    availableQuestions.splice(questionIndex, 1); // get rid of used question

    acceptingAnswers = true; // allow user to answer
}

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return; // ignore click if not ready

        acceptingAnswers = false;
        const selectedChoice = e.target; // listen for answer clicked
        const selectedAnswer = selectedChoice.dataset.number; // reads the answer number in order to cross-match with correct answer

        const checkedAnswer = selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect'; // checking if answer is correct

        if(checkedAnswer === 'correct') {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(checkedAnswer); // adds class if correct

        setTimeout(() => {
            // removes class after .2 of a second, moving onto next question
            selectedChoice.parentElement.classList.remove(checkedAnswer);
            getNewQuestion();
        }, 200);
    });
}); 

startGame(); 