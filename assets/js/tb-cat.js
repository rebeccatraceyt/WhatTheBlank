// The foundation of the game play function was sourced and edited from https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript
// Game Function Variables
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const scoreNumber = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false; // can't answer until everything loaded
let questionCounter = 0;
let availableQuestions = [];

let tbScore = 0;
let tbHighScore = 0;

let timer = {};

const correctBonus = 1; // How much correct answer is correct
const maxQuestions = 10; // How many questions before end

let tbQuestions = [];

fetch("assets/js/questions/throwback-questions.json")
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        tbQuestions = loadedQuestions;
        startGame();
		startTimer();
    })
    .catch(err => {
        console.error(err);
    });


function startGame () {
    scoreNumber.innerText = '00';
    questionCounter = 0;
    tbScore = 0;
    availableQuestions = [...tbQuestions];
    getNewQuestion();
}

function getNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        
        stopTimer();

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
    if (tbScore < 10){
		scoreNumber.innerText = "0" + tbScore;
	} else {
    	scoreNumber.innerText = tbScore;
	}
};

// Game timer
// reference: https://hub.packtpub.com/html5-games-development-using-local-storage-store-game-data/
function startTimer(){
	// reset the elapsed time to 0.
	timer.elapsedTime = 0;
		
	// start the timer
	timer.timer = setInterval(countTimer, 1000);
}

function countTimer () {
	timer.elapsedTime++;
	// calculate the minutes and seconds from elapsed time
	let second = timer.elapsedTime % 60;   
	if (second < 10) {
	   second = "0" + second;
	};
	// display the elapsed time
	$("#time").html(second);
}

function stopTimer() {
	// stop the timer 
	clearInterval(timer.timer);
   
	// set the score
	$(".final-time").html($("#time").html());
	sessionStorage.setItem("timer", timer.elapsedTime)
}