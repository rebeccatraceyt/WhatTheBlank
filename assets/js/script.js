














// --------------------------------------------------------- Footer
// Sets the year to the current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Implements sliding footer function
    // sourced and edited from http://jsfiddle.net/nathanbweb/JHu7j/ 
jQuery(function($) {
    var open = false;
    $('#footerButton').click(function () {
        if(open === false) {
            $('#footerContent').animate({ height: '300px' });
            $(this).css('backgroundPosition', 'bottom left');
            open = true;
        } else {
            $('#footerContent').animate({ height: '0px' });
            $(this).css('backgroundPosition', 'top left');
            open = false;
        }
    });		
});