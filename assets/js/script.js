// --------------------------------------------------------- Variables
// Media Query Variables
const smallMQ = window.matchMedia('(max-width:700px)');
const mediumMQ = window.matchMedia('(min-width:700px) and (max-width:991px)');

// Storage Variables
let userName = sessionStorage.getItem("userName"); // Load username

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // gets users theme preference
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]'); // toggles light/dark function 

const soundSetting = sessionStorage.getItem("sound") ? sessionStorage.getItem("sound") : null; // gets users sound effects preference

// Audio Variables
const btnSound = new Audio('assets/audio/btn-click.mp3');
const slideSound = new Audio('assets/audio/toggle.mp3');
export const endSound = new Audio('assets/audio/game-end.mp3');
export const correctSound = new Audio('assets/audio/correct.mp3');
export const incorrectSound = new Audio('assets/audio/incorrect.mp3');

// Misc Variables
let footerOpen = false; // default for sliding footer

// --------------------------------------------------------- Audio
// General Buttons
$('.btn-click').on('click', () => {
    // reference: https://stackoverflow.com/questions/15888716/how-do-i-play-an-audio-file-with-jquery/38499527
    btnSound.currentTime = 0;
    btnSound.play();
});

// Toggle Button
$('.toggle-slide').on('click', () => {
    slideSound.currentTime = 0;
    slideSound.play();
});

// Mute Button - toggles mute for ALL pages
$('.mute-btn').on('click', () => {
    if($('.mute-btn i').hasClass('fa-volume-up')) {
        muteOn();        
        sessionStorage.setItem("sound", 'off');
    } 
    
    else if ($('.mute-btn i').hasClass('fa-volume-mute')) {
        muteOff();
        sessionStorage.setItem("sound", "on");
    }
});

function muteOn() {
    $('.mute-btn i').toggleClass('fa-volume-mute fa-volume-up');

    // reference: https://stackoverflow.com/questions/23409992/toggling-the-muted-attribute-of-html5-audio
    btnSound.muted = true;
    slideSound.muted = true;
    endSound.muted = true;
    correctSound.muted = true;
    incorrectSound.muted = true;
}

function muteOff() {
    $('.mute-btn i').toggleClass('fa-volume-mute fa-volume-up');

    btnSound.muted = false;
    slideSound.muted = false;
    endSound.muted = false;
    correctSound.muted = false;
    incorrectSound.muted = false;
}

if (soundSetting) {
    // Checks Users preference - based off similar conditional for toggle function
    if (soundSetting === "off") {
        muteOn();
    }
}

// --------------------------------------------------------- Player Information
/* Allows user to enter name of choice
    Code accumulated through researching similar functions with the majority of credits to fellow CI students. */
function checkForUserData() {
    // check if user already exists
    if ((userName === null) || (userName === "Player") || (userName === "")) {
        sessionStorage.setItem("tvHighScore", 0);
        sessionStorage.setItem("chartHighScore", 0);
        sessionStorage.setItem("tbHighScore", 0);
        sessionStorage.setItem("movieHighScore", 0);
        
        // If user does not exist, they have to enter data
        $("#player-info").css("display", "block");
    }
    else {
        userName = sessionStorage.getItem("userName");

        sessionStorage.getItem("tvHighScore");
        sessionStorage.getItem("chartHighScore");
        sessionStorage.getItem("tbHighScore");
        sessionStorage.getItem("movieHighScore");

        $("#player-info").css("display", "none");
        $("#header").css("display", "block");
        $("#home").css("display", "block");
        $(".footer-home").css("display", "block");
        $(".footer-sm").css("display", "block");
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
        $("#player-info").css("display", "none");
        $("#header").css("display", "block");
        $("#home").css("display", "block");
        $(".footer-home").css("display", "block");
        $(".footer-sm").css("display", "block");
    }
}

// --------------------------------------------------------- Light / Dark Mode Toggle
/* Light / Dark toggle function styling for UX purposes
	 Sourced and edited from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8 */
if (currentTheme) {
// Check for User Preference
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        $('.light-bg').addClass('dark-bg').removeClass('light-bg');
    }
}

function switchMode(mode) {
    // Store User Preference
    if (mode.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        $('.light-bg').addClass('dark-bg').removeClass('light-bg');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
		$('.dark-bg').addClass('light-bg').removeClass('dark-bg');
    }
}

toggleSwitch.addEventListener('change', switchMode, false);

// --------------------------------------------------------- Footer
// Sets the year to the current year
document.getElementsByClassName('current-year')[0].innerHTML = new Date().getFullYear();
document.getElementsByClassName('current-year')[1].innerHTML = new Date().getFullYear();

/* Implements sliding footer function
    sourced and edited from http://jsfiddle.net/nathanbweb/JHu7j/ */
$('.footer-button').on('click', function () {
    if (smallMQ.matches) {
        if(footerOpen === false) {
            $('.footer-content').animate({ height: '65px' });
            $(this).css('backgroundPosition', 'bottom left');
            $("i", this).toggleClass("fa-caret-square-up fa-caret-square-down"); // reference: https://stackoverflow.com/questions/15345784/change-icon-on-click-toggle/15345885 
            footerOpen = true;
        } else {
            $('.footer-content').animate({ height: '0px' });
            $(this).css('backgroundPosition', 'top left');
            $("i", this).toggleClass("fa-caret-square-down fa-caret-square-up");
            footerOpen = false;
        } 
    } 
    
    if (mediumMQ.matches) {
        if(footerOpen === false) {
            $('.footer-content').animate({ height: '85px' });
            $(this).css('backgroundPosition', 'bottom left');
            $("i", this).toggleClass("fa-caret-square-up fa-caret-square-down"); // reference: https://stackoverflow.com/questions/15345784/change-icon-on-click-toggle/15345885 
            footerOpen = true;
        } else {
            $('.footer-content').animate({ height: '0px' });
            $(this).css('backgroundPosition', 'top left');
            $("i", this).toggleClass("fa-caret-square-down fa-caret-square-up");
            footerOpen = false;
        } 
    } 
});	

// --------------------------------------------------------- Form Validation
// Checking if form is valid - reference: https://codepen.io/tetnuc/pen/gRqOEO
$('#suggestionForm').validate({
    rules: {
        pName: {
            required: true
        },
        pEmail: {
            required: true
        },
        pMessage: {
            required: true
        }
    },
    messages: {
        pName: {
            required: "Please complete all fields"
        },
        pEmail: {
            required: "Please complete all fields"
        },
        pMessage: {
            required: "Please complete all fields"
        }
    },

});

$('#form-submit').click(function (event) {
    // reference: https://stackoverflow.com/questions/5127813/call-mvc-3-client-side-validation-manually-for-ajax-posts
    event.preventDefault();
    if($('#suggestionForm').valid()) {
        Swal.fire({
            icon: 'success',
            title: 'Thank You!',
            text: 'Your message has been received',
            showConfirmButton: false,
            timer: 1500
        });
        $('#form-modal').modal('hide');
        sendMail();
    }
});

// Accumulated from CI tutorial and https://www.youtube.com/watch?v=x7Ewtay0Q78
function sendMail(){
    let tempParams = {
        user_name: document.getElementById("pName").value,
        user_email: document.getElementById("pEmail").value,
        user_msg: document.getElementById("pMessage").value,
    };
    emailjs.send('service_ky4ewk5', 'template_i8i69po', tempParams);
}

// --------------------------------------------------------- On Page Load 
// Initialize game on page load
checkForUserData();