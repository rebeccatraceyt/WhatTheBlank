
// --------------------------------------------------------- Light / Dark Mode Toggle
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchMode, false);












// --------------------------------------------------------- Footer
// Sets the year to the current year
document.getElementById("current-year").innerHTML = new Date().getFullYear();

// Implements sliding footer function
    // sourced and edited from http://jsfiddle.net/nathanbweb/JHu7j/     
var open = false;
$('#footer-button').click(function () {
    if(open === false) {
        $('#footer-content').animate({ height: '50px' });
        $(this).css('backgroundPosition', 'bottom left');
        $("i", this).toggleClass("fa-caret-square-up fa-caret-square-down") // reference: https://stackoverflow.com/questions/15345784/change-icon-on-click-toggle/15345885 
        open = true;
    } else {
        $('#footer-content').animate({ height: '0px' });
        $(this).css('backgroundPosition', 'top left');
        $("i", this).toggleClass("fa-caret-square-down fa-caret-square-up")
        open = false;
    }  
});		