














// --------------------------------------------------------- Footer
// Sets the year to the current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Implements sliding footer function
    // sourced and edited from http://jsfiddle.net/nathanbweb/JHu7j/     
var open = false;
$('#footerButton').click(function () {
    if(open === false) {
        $('#footerContent').animate({ height: '30px' });
        $(this).css('backgroundPosition', 'bottom left');
        $("i", this).toggleClass("fa-caret-square-up fa-caret-square-down") // reference: https://stackoverflow.com/questions/15345784/change-icon-on-click-toggle/15345885 
        open = true;
    } else {
        $('#footerContent').animate({ height: '0px' });
        $(this).css('backgroundPosition', 'top left');
        $("i", this).toggleClass("fa-caret-square-down fa-caret-square-up")
        open = false;
    }  
});		