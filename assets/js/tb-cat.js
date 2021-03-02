// Declaring Questions
const tbQuestions = [
    {
        question: "But, if you're _____ about my baby, it don't matter if you're black or white",
        answer1: 'thinking',
        answer2: 'dreaming',
        answer3: 'singing',
        correctAnswer: 1
    },
    {
        question: "Friday night and the lights are _____, looking out for a place to go",
        answer1: 'dim',
        answer2: 'on',
        answer3: 'low',
        correctAnswer: 3
    },
    {
        question: "Hangin' out the passenger side of his best friend's ride, trying to _____ at me",
        answer1: 'call',
        answer2: 'holla',
        answer3: 'yell',
        correctAnswer: 2
    }
];

function startGame () {
    scoreNumber.innerText = '0';
    questionCounter = 0;
    score = 0;
    availableQuestions = [...tbQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        // set final player sore
        sessionStorage.setItem("playerScore", score);
        
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