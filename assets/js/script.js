// --------------------------------------------------------- Variables
let userName = localStorage.getItem("userName"); // Load username

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-btn'));

let currentQuestion = {};
let acceptingAnswers = false; // can't answer until everything loaded
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const tvQuestions = [
    {
        question: "I'll be there for you, when the rain starts to _ _ _ _",
        answer1: 'fall',
        answer2: 'pour',
        answer3: 'rain',
        correctAnswer: 2
    },
    {
        question: "The license plate said fresh and it had _ _ _ _ in the mirror",
        answer1: 'dice',
        answer2: 'mice',
        answer3: 'rice',
        correctAnswer: 1
    },
    {
        question: "Hanging out down the _ _ _ _ _, the same old thing we did last week",
        answer1: 'beach',
        answer2: 'street',
        answer3: 'block',
        correctAnswer: 2
    }
];

const correctBonus = 10; // How much correct answer is correct
const maxQuestions = 3; // How many questions before end

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...tvQuestions]; // copy from array - spread operator: spread each item into new array
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >=  maxQuestions){
        // go to end page
        return window.location.assign(); // RETURN END PAGE
    }

    questionCounter++; // start game and increment to 1
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); // amount is always equal to how many questions are left
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(answer => { // iterate through answers
        const number = answer.dataset['number']; // get number from data set property - get data set and give me the number
        answer.innerText = currentQuestion['answer' + number]; //grab answer property and data attribute associated to get the number
    });

    availableQuestions.splice(questionIndex, 1); // get rid of used question

    acceptingAnswers = true; // allow user to answer
}

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return; // ignore click if not ready

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        getNewQuestion();
    });
});

startGame();




const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]'); // toggles light/dark function 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // gets users theme preference

const footerOpen = false; // default for sliding footer


// --------------------------------------------------------- Modals
/* Welcome Modal
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

// --------------------------------------------------------- Game Functions
$('#tv-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
    $('#answer-btns').show();
    
    
    function shuffleTv(tvQuestions) {
        /* shuffles the questions order
            sourced and edited from https://javascript.info/task/shuffle */
        for(let i = tvQuestions.length - 1; i > 0; i--) {
            let tvIndex = Math.floor(Math.random() * (i + 1));
            [tvQuestions[i], tvQuestions[tvIndex]] = [tvQuestions[tvIndex], tvQuestions[i]];
        }
    }
    function resetTV() {

        }

});

$('#chart-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
});
$('#tb-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
});
$('#movie-cat').on('click', function() {
    $('#welcome-message').hide();
    $('#question').show();
});
$('#logo-sec').on('click', function() {
    $('#welcome-message').show();
    $('#question').hide();
    $('#answer-btns').hide();
});

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
