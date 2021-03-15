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
    },
    {
        question: "Here come the Men in Black, Galaxy _____",
        answer1: 'protectors',
        answer2: 'defenders',
        answer3: 'conquerors',
        correctAnswer: 2 
    },
    {
        question: "His palms are sweaty, knees weak, arms are _____",
        answer1: 'weak',
        answer2: 'tired',
        answer3: 'heavy',
        correctAnswer: 3
    },
    {
        question: "Now I've had the time of my _____",
        answer1: 'life',
        answer2: 'night',
        answer3: 'day',
        correctAnswer: 1
    },
    {
        question: "Tonight I gotta cut loose, footloose. Kick off your _____ shoes",
        answer1: 'Sunday',
        answer2: 'dancing',
        answer3: 'Monday',
        correctAnswer: 1
    },
    {
        question: "Where troubles melt like lemon drops away above the chimney tops, that's where you'll find _____",
        answer1: 'Obi',
        answer2: 'me',
        answer3: 'us',
        correctAnswer: 2 
    },
    {
        question: "As you _____ on by, will you call my name?",
        answer1: 'run',
        answer2: 'dance',
        answer3: 'walk',
        correctAnswer: 3
    },
    {
        question: "Near, far, wherever you are, I believe that the _____ does go on",
        answer1: 'heart',
        answer2: 'soul',
        answer3: 'love',
        correctAnswer: 1 
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
                $('.high-score').text(movieHighScore);
        
                return true;
            } else {
                $('.hs-yes').hide();
                $('.hs-no').show();
                console.log("no high score - MOVIE");

                return false;
            }
        }

        // go to Game End
        $('.score-text').hide();
        $('.questions-sec').hide();
        $('.answers-sec').hide();
        $('.end-sec').show();
        
        // set final player score
        $('.final-score').text(movieScore);
        $('.high-score').text(movieHighScore);

        // Calls their Player Name
        $('.playerName').text(userName);

        // Play ending sound
        endSound.currentTime = 0;
        endSound.play();

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
    movieScore += num;
    scoreNumber.innerText = movieScore;
};

startGame(); 