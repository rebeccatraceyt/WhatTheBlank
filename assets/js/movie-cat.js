// Declaring Questions
const movieQuestions = [
    {
        question: "What can I say except, 'You're welcome', for the tides, the sun, the _____",
        answer1: 'stars',
        answer2: 'sky',
        answer3: 'moon',
        correctAnswer: 2
    },
    {
        question: "Go Greased Lightnin', you're coasting through the _____ lap trial",
        answer1: 'heat',
        answer2: 'pre',
        answer3: 'beat',
        correctAnswer: 1
    },
    {
        question: "You just remember what your old _____ said, you've got a friend in me",
        answer1: 'bud',
        answer2: 'friend',
        answer3: 'pal',
        correctAnswer: 3
    }
];

function startGame () {
    scoreNumber.innerText = '0';
    questionCounter = 0;
    movieScore = 0;
    availableQuestions = [...movieQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        
        function checkHighScore() {
            // checks score
            if ((movieScore == movieHighScore) || (movieScore > movieHighScore)){
                movieHighScore = movieScore;
                sessionStorage.setItem("movieHighScore", movieHighScore);
                console.log("new high score - MOVIE");
        
                // Shows applicable text based on score
                $('.hs-yes').show();
                $('.hs-no').hide();
                $('#high-score').text(movieHighScore);
        
                return true;
            } else {
                $('.hs-yes').hide();
                $('.hs-no').show();
                console.log("no high score - MOVIE");

                return false;
            }
        }

        // go to Game End
        $('.game-sec').hide();
        $('.end-text').show();
        
        // set final player score
        $('.final-score').text(movieScore);
        $('.high-score').text(movieHighScore);

        // Calls their Player Name
        $('.playerName').text(userName);

        checkHighScore();

        return true;
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
    movieScore += num;
    scoreNumber.innerText = movieScore;
};

startGame(); 