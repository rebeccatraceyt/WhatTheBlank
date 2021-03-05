// --------------------------------------------------------- Variables
let userName = sessionStorage.getItem("userName"); // Load username

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
const maxQuestions = 3; // How many questions before end

const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]'); // toggles light/dark function 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // gets users theme preference

const toggleSound = document.querySelector('.toggle-mute input[type="checkbox"]');
const muteSetting = localStorage.getItem('sound') ? localStorage.getItem('sound') : null;
let soundEffects = $('audio').prop('muted');

//let muted = localStorage.getItem('muted');

let footerOpen = false; // default for sliding footer

// --------------------------------------------------------- Game Functions
$('.logo-sec').click(function () {
    // returns user back to home page
    return window.location.assign("index.html");
});

// --------------------------------------------------------- Audio
// General Buttons
$('.btn-click').on('click', () => {
    // reference: https://stackoverflow.com/questions/15888716/how-do-i-play-an-audio-file-with-jquery/38499527
    console.log('sound played');
    $('.btn-sound')[0].currentTime = 0;
    $('.btn-sound')[0].play();
});

// Toggle Button
$('.toggle-slide').on('click', () => {
    $('.toggle-sound')[0].currentTime = 0;
    $('.toggle-sound')[0].play();
});

// Mute Button


function muteSound(sfx) {
    if (sfx.target.checked) {
        // https://stackoverflow.com/questions/23409992/toggling-the-muted-attribute-of-html5-audio
        $('audio').prop('muted', !soundEffects);
        console.log('HELLO!!!!!');
        $('.mute-btn i').toggleClass('fa-volume-mute fa-volume-up');
        localStorage.setItem('sound', 'muted');
    } else {
        $('audio').prop('muted', soundEffects);
        $('.mute-btn i').toggleClass('fa-volume-up');
        localStorage.setItem('sound', 'unmuted');
    }
}

toggleSound.addEventListener('change', muteSound, false);

if (muteSetting) {
    if (muteSetting === 'true') {
        toggleSound.checked = true;
    }
}


/*$('.mute-sound').on('click', function muteSound(){
    $('audio').prop('muted', true);
    $('.mute-sound i').toggleClass('fa-volume-mute fa-volume-up');
    localStorage.setItem('muted', true);
    console.log('muted');
});*/

/*$(document).ready(function() {
    $('.mute-sound').on('click', function() {
        // reference: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/
        let soundEffects = $('audio');

        if (muted === 'true') {
            for (let x = 0; x < soundEffects.length; x++) {
                soundEffects[x].muted = false;
            }
            localStorage.setItem('muted', 'false');
            console.log('unmuted'); 
        } else {
            for (let x = 0; x < soundEffects.length; x++) {
                soundEffects[x].muted = true;
            }
            localStorage.setItem('muted', 'true');
            $('.mute-sound i').toggleClass('fa-volume-mute fa-volume-up');
        }
        console.log('muted');
    });
});*/

// reference: https://stackoverflow.com/questions/44046493/how-to-save-this-button-status-in-a-localstorage
/* if (muteState === 'true'){
    muteSound();
    sessionStorage.setItem('muteState', true);
} else {
    sessionStorage.setItem('muteState', false);
}

$('.mute-sound').on('click', () => {
    muteSound();
});

function muteSound(){
    
    reference: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/
    let soundEffects = $('audio');

    if (silence) {
        for (let x = 0; x < soundEffects.length; x++) {
            soundEffects[x].muted = false;
        }
        silence = false;
        console.log('unmuted');
        
    }
    else {
        for (let x = 0; x < soundEffects.length; x++) {
            soundEffects[x].muted = true;
        }
        silence = true;
        $('.mute-sound i').toggleClass('fa-volume-mute fa-volume-up');
    }
    console.log('muted');
}*/

// --------------------------------------------------------- Player Information
/* Welcome Modal allows user to enter name of choice
    Code accumulated through researching similar functions with the majority of credits to fellow CI students. */
function checkForUserData() {
    // check if user already exists
    if ((userName === null) || (userName === "Player") || (userName === "")) {
        sessionStorage.setItem("tvHighScore", 0);
        sessionStorage.setItem("chartHighScore", 0);
        sessionStorage.setItem("tbHighScore", 0);
        sessionStorage.setItem("movieHighScore", 0);

        setTimeout(function() {
            $("#welcomeModal").modal({
                backdrop: 'static',
                keyboard: false
            });
        }, 500);
    }
    else {
        userName = sessionStorage.getItem("userName");
        
        tvHighScore = sessionStorage.getItem("tvHighScore");
        chartHighScore = sessionStorage.getItem("chartHighScore");
        tbHighScore = sessionStorage.getItem("tbHighScore");
        movieHighScore = sessionStorage.getItem("movieHighScore");
        return;
    }
}

$('#username-submit').on('click', function() {
    userData();
});

function userData() {
    // enters player information
    userName = $('#username').val();

    sessionStorage.setItem("userName", userName);
    
    if ((userName)|| ((((userName !== null) && (userName !== "Player") && (userName !== ""))))) { 
        $('#welcomeModal').modal('hide');
    }
}

// --------------------------------------------------------- Light / Dark Mode Toggle
/* Light / Dark toggle function styling for UX purposes
	 Sourced and edited from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8 */
function switchMode(mode) {
    if (mode.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchMode, false);

function switchMode(mode) {
    // Store User Preference
    if (mode.target.checked) {
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


