// The foundation of the game play function was sourced and edited from https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript
// Comments were made as the developer learned the process and were kept in for future developers

// Game Function Variables
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const scoreNumber = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false; // can't answer until everything loaded
let questionCounter = 0;
let availableQuestions = [];

let tbScore;
let tbHighScore = sessionStorage.getItem("tbHighScore");

let timer = {};

const correctBonus = 1; // How much correct answer is correct
const maxQuestions = 10; // How many questions before end

let tbQuestions = [];

import { endSound, correctSound, incorrectSound } from "./script.js";

// fetch questions from json file
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
    questionCounter = 0;
    tbScore = 0;
    availableQuestions = [...tbQuestions];
    getNewQuestion();
    $(".game-load").css("display", "none");
    $(".game-body").css("display", "block");
}

function getNewQuestion () {

    // End of game
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        stopTimer();

        // go to Game End
        $('.score-text').hide();
        $('.questions-sec').hide();
        $('.answers-sec').hide();
        $('.end-sec').show();
        
        // set final player score
        $('.final-score').text(tbScore);
        $('.high-score').text(tbHighScore);

        // Calls their Player Name
        $(".playerName").text(sessionStorage.getItem("userName"));

        // Play ending sound
        endSound.currentTime = 0;
        endSound.play();

        checkHighScore();
        return false;
    }

    // Iterate through questions
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

// Listen for answer choice
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

// check score vs high score
function checkHighScore() {
    // checks score
    if ((tbScore == tbHighScore) || (tbScore > tbHighScore)){
        tbHighScore = tbScore;
        sessionStorage.setItem("tbHighScore", tbHighScore);

        // Shows applicable text based on score
        $('.hs-yes').show();
        $('.hs-no').hide();
        $('.high-score').text(tbHighScore);
        return true;
        
    } else if (tbHighScore == 0) {
        $('.hs-yes').hide();
        $('.hs-no').show();
        $('.hs-num').hide();
        return false;

    } else {
        $('.hs-yes').hide();
        $('.hs-no').show();
        return false;
    }
}

// Add to score Counter
const incrementScore = num => {
    // Add to score Counter
    tbScore += num;
    if ((tbScore < 10) && (tbScore > 0)) {
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
	let minute = Math.floor(timer.elapsedTime / 60);
    let second = timer.elapsedTime % 60;   
	
    if (minute == 0){
        minute = "00";
    } else if ((minute > 0) && (minute < 10)){
        minute = "0" + minute;
    }
    if (second < 10) {
	   second = "0" + second;
	}
	// display the elapsed time
	$("#time").html(minute+":"+second);
}

function stopTimer() {
	// stop the timer 
	clearInterval(timer.timer);
   
	// set the score
	$(".final-time").html($("#time").html());
	sessionStorage.setItem("timer", timer.elapsedTime);
}