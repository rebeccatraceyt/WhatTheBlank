// The foundation of the game play function was sourced and edited from https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript

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
    },
    {
        question: "But I can't do this all on my own, no, I know, I'm no ______",
        answer1: 'Superman',
        answer2: 'Doctor',
        answer3: 'Actor',
        correctAnswer: 1
    },
    {
        question: "Sometimes you want to know where everybody knows your _____",
        answer1: 'age',
        answer2: 'story',
        answer3: 'name',
        correctAnswer: 3
    },
    {
        question: "Maths, science, history, unraveling the mysteries that all started with a big _____",
        answer1: 'bang',
        answer2: 'noise',
        answer3: 'boom',
        correctAnswer: 1 
    },
    {
        question: "Scooby-Dooby-Doo, where are you? We got some _____ to do now",
        answer1: 'jobs',
        answer2: 'stuff',
        answer3: 'work',
        correctAnswer: 3
    },
    {
        question: "Then drop on the deck and flop like a _____, Spongebob Squarepants!",
        answer1: 'fish',
        answer2: 'sponge',
        answer3: 'star',
        correctAnswer: 1
    },
    {
        question: "Pokemon! Oh, you're my best friend, in a world we must _____!",
        answer1: 'destroy',
        answer2: 'defend',
        answer3: 'understand',
        correctAnswer: 2
    },
    {
        question: "Catches _____ just like flies. Look out! Here comes the Spider-Man.",
        answer1: 'dreams',
        answer2: 'bees',
        answer3: 'thieves',
        correctAnswer: 3
    }
];

function startGame () {
    scoreNumber.innerText = '0';
    questionCounter = 0;
    tvScore = 0;
    availableQuestions = [...tvQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        
        function checkHighScore() {
            // checks score
            if ((tvScore == tvHighScore) || (tvScore > tvHighScore)){
                tvHighScore = tvScore;
                sessionStorage.setItem("tvHighScore", tvHighScore);
                console.log("new high score - TV");
        
                // Shows applicable text based on score
                $('.hs-yes').show();
                $('.hs-no').hide();
                $('#high-score').text(tvHighScore);
        
                return true;
            } else {
                $('.hs-yes').hide();
                $('.hs-no').show();
                console.log("no high score - TV");

                return false;
            }
        }

        // go to Game End
        $('.score-text').hide();
        $('.questions-sec').hide();
        $('.answers-sec').hide();
        $('.end-sec').show();

        // set final player score
        $('.final-score').text(tvScore);
        $('.high-score').text(tvHighScore);

        // Calls their Player Name
        $('.playerName').text(userName);

        // Play ending sound
        endSound.currentTime = 0;
        endSound.play();

        checkHighScore();
        return false;
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
    tvScore += num;
    scoreNumber.innerText = tvScore;
};

startGame(); 