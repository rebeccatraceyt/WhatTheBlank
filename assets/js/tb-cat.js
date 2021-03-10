// The foundation of the game play function was sourced and edited from https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript

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
    },
    {
        question: "I said, young man, 'cause you're in a new town there's no need to be _____",
        answer1: 'unhappy',
        answer2: 'down',
        answer3: 'upset',
        correctAnswer: 1
    },
    {
        question: "When the rain washes you _____, you'll know. You'll know",
        answer1: 'through',
        answer2: 'free',
        answer3: 'clean',
        correctAnswer: 3
    },
    {
        question: "I'm giving you everything, all that _____ can bring, this I swear",
        answer1: 'fun',
        answer2: 'love',
        answer3: 'joy',
        correctAnswer: 3
    },
    {
        question: "Say you will, say you won't, say you'll do what I _____",
        answer1: 'say',
        answer2: "don't",
        answer3: 'hope',
        correctAnswer: 2 
    },
    {
        question: "How deep is your love? I really mean to learn 'cause we're living in a world of _____",
        answer1: 'hurt',
        answer2: 'cruel',
        answer3: 'fools',
        correctAnswer: 3
    },
    {
        question: "Alright stop, collaborate and listen, Ice is back with my brand new _____",
        answer1: 'track',
        answer2: 'invention',
        answer3: 'sound',
        correctAnswer: 2
    },
    {
        question: "Uptown girl, you know I can't afford to buy her _____",
        answer1: 'pearls',
        answer2: 'gucci',
        answer3: 'shoes',
        correctAnswer: 1
    }
];

function startGame () {
    scoreNumber.innerText = '0';
    questionCounter = 0;
    tbScore = 0;
    availableQuestions = [...tbQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        
        function checkHighScore() {
            // checks score
            if ((tbScore == tbHighScore) || (tbScore > tbHighScore)){
                tbHighScore = tbScore;
                sessionStorage.setItem("tbHighScore", tbHighScore);
                console.log("new high score - TB");
        
                // Shows applicable text based on score
                $('.hs-yes').show();
                $('.hs-no').hide();
                $('#high-score').text(tbHighScore);
        
                return true;
            } else {
                $('.hs-yes').hide();
                $('.hs-no').show();
                console.log("no high score - TB");

                return false;
            }
        }

        // go to Game End
        $('.score-text').hide();
        $('.questions-sec').hide();
        $('.answers-sec').hide();
        $('.end-sec').show();
        
        // set final player score
        $('.final-score').text(tbScore);
        $('.high-score').text(tbHighScore);

        // Calls their Player Name
        $('.playerName').text(userName);

        // Play ending sound
        endSound.currentTime = 0;
        endSound.play();

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
                    correctSound.currentTime = 0;
                    correctSound.play();
                }
            } else {
                incorrectSound.currentTime = 0;
                incorrectSound.play();
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
    tbScore += num;
    scoreNumber.innerText = tbScore;
};

startGame(); 