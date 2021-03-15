// The foundation of the game play function was sourced and edited from https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript
// Game Function Variables
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const scoreNumber = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false; // can't answer until everything loaded
let questionCounter = 0;
let availableQuestions = [];

let tvScore = 0;
let chartScore = 0;
let tbScore = 0;
let movieScore = 0;

let tvHighScore = 0;
let chartHighScore = 0;
let tbHighScore = 0;
let movieHighScore = 0;

const correctBonus = 1; // How much correct answer is correct
const maxQuestions = 10; // How many questions before end

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
    },
    {
        question: "I'll be riding shotgun underneath the hot _____, feeling like a someone",
        answer1: 'sky',
        answer2: 'sun',
        answer3: 'moon',
        correctAnswer: 2 
    },
    {
        question: "Mother always told me be careful who you love and be careful what you do 'cause the lie becomes the _____",
        answer1: 'lie',
        answer2: 'truth',
        answer3: 'proof',
        correctAnswer: 2
    },
    {
        question: "There was something in the air that night, the stars were _____, Fernando",
        answer1: 'high',
        answer2: 'out',
        answer3: 'bright',
        correctAnswer: 3
    },
    {
        question: "I'll send an S.O.S to the _____, I hope that someone gets my message in a bottle",
        answer1: 'boat',
        answer2: 'police',
        answer3: 'world',
        correctAnswer: 3
    },
    {
        question: "Oops, I did it again, I played with your heart, got lost in the _____",
        answer1: 'game',
        answer2: 'maze',
        answer3: 'hay',
        correctAnswer: 1 
    },
    {
        question: "Never mind, I'll find someone like you, I wish nothing but the _____ for you",
        answer1: 'luck',
        answer2: 'worst',
        answer3: 'best',
        correctAnswer: 3
    },
    {
        question: "Because I'm happy, _____ along if you feel like happiness is the truth",
        answer1: 'clap',
        answer2: 'cry',
        answer3: 'dance',
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
        $('.score-text').hide();
        $('.questions-sec').hide();
        $('.answers-sec').hide();
        $('.end-sec').show();
        
        // set final player score
        $('.final-score').text(chartScore);
        $('.high-score').text(chartHighScore);

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
    chartScore += num;
    scoreNumber.innerText = chartScore;
};

startGame(); 