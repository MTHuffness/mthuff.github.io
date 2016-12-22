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
    });

//TRANSITIONS FOR EACH BUTTON
    //BOX 1 BUTTONS
    $('.next1').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(-90deg)'
        });
        $('#triangle li:nth-child(2)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(1)').css({
            opacity: .25
        });    
    });

    $('.prev1').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(90deg)'
        });
        $('#triangle li:nth-child(4)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(1)').css({
            opacity: .25
        });    
    });
    //BOX 2 BUTTONS
    $('.next2').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(-180deg)'
        });
        $('#triangle li:nth-child(3)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(2)').css({
            opacity: .25
        });    
    });
    $('.prev2').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(0deg)'
        });
        $('#triangle li:nth-child(1)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(2)').css({
            opacity: .25
        });    
    });
    //BOX 3 BUTTONS
    $('.next3').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(-270deg)'
        });
        $('#triangle li:nth-child(4)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(3)').css({
            opacity: .5
        });    
    });
    $('.prev3').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(270deg)'
        });
        $('#triangle li:nth-child(2)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(3)').css({
            opacity: .5
        });    
    });
    //BOX 4 BUTTONS
    $('.next4').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(0deg)'
        });
        $('#triangle li:nth-child(1)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(4)').css({
            opacity: .5
        });    
    });
    $('.prev4').click(function() {
        $('#triangle').css({
            transform: 'translateZ(-470px) rotateY(180deg)'
        });
        $('#triangle li:nth-child(3)').css({
            opacity: 1
        });
        $('#triangle li:nth-child(4)').css({
            opacity: .5
        });    
    });
});