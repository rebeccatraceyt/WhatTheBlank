// --------------------------------------------------------- Variables
let userName = localStorage.getItem("userName"); // Load username

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const scoreNumber = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false; // can't answer until everything loaded
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const incrementScore = num => {
    // Add to score Counter
    score += num;
    scoreNumber.innerText = score;
};

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

const correctBonus = 1; // How much correct answer is correct
const maxQuestions = 3; // How many questions before end

const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]'); // toggles light/dark function 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // gets users theme preference

let footerOpen = false; // default for sliding footer

// --------------------------------------------------------- Game Functions

$('#logo-sec').on('click', function() {
    $('#welcome-message').show();
    $('#question').hide();
    $('#answer-btns').hide();
    $('#score-sec').css('visibility', 'hidden');  
    return window.location.assign("index.html");
});

$('#tv-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
    $('#answer-btns').show();
    $('#score-sec').css('visibility', 'visible');
    
    function startGame () {
        scoreNumber.innerText = '0';
        questionCounter = 0;
        score = 0;
        availableQuestions = [...tvQuestions];
        getNewQuestion();
    }
    
    function getNewQuestion () {
        if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
            // go to end page
            return window.location.assign("/game-end.html");
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
});

$('#chart-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
    $('#answer-btns').show();
    $('#score-sec').css('visibility', 'visible');
    
    
    function startGame () {
        scoreNumber.innerText = '0';
        questionCounter = 0;
        score = 0;
        availableQuestions = [...chartQuestions];
        getNewQuestion();
    }
    
    function getNewQuestion () {
        if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
            // go to end page
            return window.location.assign("/game-end.html");
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
});

$('#tb-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
    $('#answer-btns').show();
    $('#score-sec').css('visibility', 'visible');
    
    function startGame () {
        scoreNumber.innerText = '0';
        questionCounter = 0;
        score = 0;
        availableQuestions = [...tbQuestions];
        getNewQuestion();
    }
    
    function getNewQuestion () {
        if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
            // go to end page
            return window.location.assign("/game-end.html");
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
});

$('#movie-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
    $('#answer-btns').show();
    $('#score-sec').css('visibility', 'visible');
    
    function startGame(){
        scoreNumber.innerText = '0';
        questionCounter = 0;
        score = 0;
        availableQuestions = [...movieQuestions];
        getNewQuestion();
    }
    
    function getNewQuestion () {
        if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
            // go to end page
            return window.location.assign("/game-end.html");
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
});

// --------------------------------------------------------- Modals
/* Welcome Modal allows user to enter name of choice - stored on local
    Code accumulated through researching similar functions with the majority of credits to fellow CI students. */
function checkForUserData() {
    if ((userName === null) || (userName === "Player") || (userName === "")) {
        setTimeout(function() {
            $("#welcomeModal").modal({
                backdrop: 'static',
                keyboard: false
            });
        }, 500);
    }
    else {
        userName = localStorage.getItem("userName");
        return;
    }
}

$('#username-submit').on('click', function() {
    userData();
});

function userData() {
    userName = $('#username').val();

    localStorage.setItem("userName", userName);
    
    if ((userName)|| ((((userName !== null) && (userName !== "Player") && (userName !== ""))))) { 
        $('#welcomeModal').modal('hide');
    }
}

// --------------------------------------------------------- Game End Page
document.getElementById('playerName').innerText = userName; // Display Username


// --------------------------------------------------------- Light / Dark Mode Toggle
/* Light / Dark toggle function styling for UX purposes
	 Sourced and edited from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8 */
function switchMode(toggle) {
    if (toggle.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchMode, false);

function switchMode(toggle) {
    // Store User Preference
    if (toggle.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

if (currentTheme) {
    // Check for User Preference
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// --------------------------------------------------------- Footer
// Sets the year to the current year
document.getElementById("current-year").innerHTML = new Date().getFullYear();

/* Implements sliding footer function
    sourced and edited from http://jsfiddle.net/nathanbweb/JHu7j/ */
$('#footer-button').on('click', function () {
    if(footerOpen === false) {
        $('#footer-content').animate({ height: '60px' });
        $(this).css('backgroundPosition', 'bottom left');
        $("i", this).toggleClass("fa-caret-square-up fa-caret-square-down"); // reference: https://stackoverflow.com/questions/15345784/change-icon-on-click-toggle/15345885 
        footerOpen = true;
    } else {
        $('#footer-content').animate({ height: '0px' });
        $(this).css('backgroundPosition', 'top left');
        $("i", this).toggleClass("fa-caret-square-down fa-caret-square-up");
        footerOpen = false;
    }  
});		

// --------------------------------------------------------- On Page Load 
// Initialize game on page load
checkForUserData();
