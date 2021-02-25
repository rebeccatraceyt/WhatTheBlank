// --------------------------------------------------------- Variables
let userName = localStorage.getItem("userName"); // Load username

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
    
    const tvQuestions = [
        {
            question: "I'll be there for you, when the rain starts to _ _ _ _",
            answers: {
                a: 'fall',
                b: 'pour',
                c: 'rain'
            },
            correctAnswer: 'b'
        },
        {
            question: "The license plate said fresh and it had _ _ _ _ in the mirror",
            answers: {
                a: 'dice',
                b: 'mice',
                c: 'rice'
            },
            correctAnswer: 'a'
        },
        {
            question: "Hanging out down the _ _ _ _ _, the same old thing we did last week",
            answers: {
                a: 'beach',
                b: 'street',
                c: 'block'
            },
            correctAnswer: 'b'
        }
    ];
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
