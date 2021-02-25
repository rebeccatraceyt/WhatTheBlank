// --------------------------------------------------------- Variables
let userName = localStorage.getItem("userName"); // Load username

const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]'); // toggles light/dark function 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // gets users theme preference

var footerOpen = false; // default for sliding footer


// --------------------------------------------------------- Modals
// Welcome Modal
    // Code accumulated through researching similar functions with the majority of credits to fellow CI students.
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

// --------------------------------------------------------- Category Functions
// Music Category functions
$('#tv-cat').on('click', function() {
    $('#welcome-message').hide();
    console.log('hello');
});
$('#chart-cat').on('click', function() {
    $('#welcome-message').hide();
    console.log('hello');
});
$('#tb-cat').on('click', function() {
    $('#welcome-message').hide();
    console.log('hello');
});
$('#movie-cat').on('click', function() {
    $('#welcome-message').hide();
    console.log('hello');
});
$('#logo-sec').on('click', function() {
    $('#welcome-message').show();
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

// Implements sliding footer function
    // sourced and edited from http://jsfiddle.net/nathanbweb/JHu7j/     
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
