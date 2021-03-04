// Declaring Questions
const chartQuestions = [
    {
        question: "With the lights out, its less dangerous. Here we are now _____ us",
        answer1: 'delight',
        answer2: 'enlighten',
        answer3: 'entertain',
        correctAnswer: 3
    },
    {
        question: "So you think you can _____ me and spit in my eye?",
        answer1: 'own',
        answer2: 'stone',
        answer3: 'clone',
        correctAnswer: 2
    },
    {
        question: "Tonight's the night, let's live it up. I got my money, let's spend it _____",
        answer1: 'up',
        answer2: 'all',
        answer3: 'now',
        correctAnswer: 1
    }
];

function startGame () {
    scoreNumber.innerText = '0';
    questionCounter = 0;
    chartScore = 0;
    availableQuestions = [...chartQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        
        function checkHighScore() {
            // checks score
            if ((chartScore == chartHighScore) || (chartScore > chartHighScore)){
                chartHighScore = chartScore;
                sessionStorage.setItem("chartHighScore", chartHighScore);
                console.log("new high score - CHART");
        
                // Shows applicable text based on score
                $('.hs-yes').show();
                $('.hs-no').hide();
                $('#high-score').text(chartHighScore);
        
                return true;
            } else {
                $('.hs-yes').hide();
                $('.hs-no').show();
                console.log("no high score - CHART");

                return false;
            }
        }

        // go to Game End
        $('.game-sec').hide();
        $('.end-text').show();
        
        // set final player score
        $('.final-score').text(chartScore);
        $('.high-score').text(chartHighScore);

        // Calls their Player Name
        $('.playerName').text(userName);

        // Play ending sound
        $('.end-sound')[0].currentTime = 0;
        $('.end-sound')[0].play();

        checkHighScore();
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

        let checkedAnswer = 'incorrect';
            if (selectedAnswer == currentQuestion.correctAnswer) {
                checkedAnswer = 'correct';
                if (checkedAnswer === 'correct') {
                    incrementScore(correctBonus);
                    console.log('sound correct');
                    $('.correct-sound')[0].currentTime = 0;
                    $('.correct-sound')[0].play();
                }
            } else {
                $('.incorrect-sound')[0].currentTime = 0;
                $('.incorrect-sound')[0].play();
            }

        selectedChoice.parentElement.classList.add(checkedAnswer); // adds class if correct
        answers[currentQuestion.correctAnswer - 1].parentElement.classList.add('correct'); 

        setTimeout(() => {
            // removes class after .2 of a second, moving onto next question
            selectedChoice.parentElement.classList.remove(checkedAnswer);
            answers[currentQuestion.correctAnswer - 1].parentElement.classList.remove('correct');
            getNewQuestion();
        }, 500);
    });
}); 

const incrementScore = num => {
    // Add to score Counter
    chartScore += num;
    scoreNumber.innerText = chartScore;
};

startGame(); 