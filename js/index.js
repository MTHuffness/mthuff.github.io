$(document).ready(function() {

    $('#menu').click(function() {
        dropDown();
    });

function dropDown() {
        $('#menu').hide(1000);
        $('#linkMenu').slideDown(1000);
        $('.link').addClass('mobileLink');
        $('.link').removeClass('link linkCurrent');
        $('#menuClose').fadeIn(1000);
        $('header').css('margin-bottom', '40%');
};

    $('#menuClose').click(function() {
        $(this).slideUp(1000);
        $('#linkMenu').delay(1000).slideUp(1000);
        $('#menu').fadeIn(800);  
        $('header').css('margin-bottom', '0');
    })
});