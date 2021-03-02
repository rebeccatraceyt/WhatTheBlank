// --------------------------------------------------------- Variables
let userName = sessionStorage.getItem("userName"); // Load username
let playerScore = sessionStorage.getItem("playerScore"); // Load score

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const scoreNumber = document.getElementById('score');



let currentQuestion = {};
let acceptingAnswers = false; // can't answer until everything loaded
let score = 0;
let highScore = 0;
let questionCounter = 0;
let availableQuestions = [];

const incrementScore = num => {
    // Add to score Counter
    score += num;
    scoreNumber.innerText = score;
};

const correctBonus = 1; // How much correct answer is correct
const maxQuestions = 3; // How many questions before end

const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]'); // toggles light/dark function 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // gets users theme preference

let footerOpen = false; // default for sliding footer

// --------------------------------------------------------- Game Functions
$('#logo-sec').click(function () {
    return window.location.assign("index.html");
});



// --------------------------------------------------------- Player Information
/* Welcome Modal allows user to enter name of choice
    Code accumulated through researching similar functions with the majority of credits to fellow CI students. */
function checkForUserData() {
    // check if user already exists
    if ((userName === null) || (userName === "Player") || (userName === "")) {
        localStorage.setItem("highScore", 0);
        setTimeout(function() {
            $("#welcomeModal").modal({
                backdrop: 'static',
                keyboard: false
            });
        }, 500);
    }
    else {
        userName = sessionStorage.getItem("userName");
        highScore = sessionStorage.getItem("highScore");
        return;
    }
}
$('#username-submit').on('click', function() {
    userData();
});
function userData() {
    userName = $('#username').val();

    sessionStorage.setItem("userName", userName);
    
    if ((userName)|| ((((userName !== null) && (userName !== "Player") && (userName !== ""))))) { 
        $('#welcomeModal').modal('hide');
    }
}

function checkHighScore() {
    // checks score
    if (score > highScore){
        highScore = score;
        sessionStorage.setItem("highScore", highScore);
        console.log("new high score");
        return true;
    } else {
        return false;
    }
}
function playerInfo() {
    // Calls player information when needed
    $('#playerName').text(userName);
    $('#final-score').text(playerScore);
    $('#high-score').text(highScore);
}

// --------------------------------------------------------- Game End Page
// document.getElementById('final-score').innerText = playerScore; // Display final score
   

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
playerInfo();


