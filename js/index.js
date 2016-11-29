$(document).ready(function() {

//ANIMATIONS AT THE START OF THE PAGE LOAD----------------------------------
    $('.mainDiv').fadeIn(1400);
    $('.grid').animate({width:'show'}, 1350);

//BUTTON FUNCTIONALITY - CLICK TO SHOW PAGE---------------------------------
    $('#servicesSide').click(function() {
        $('#portfolioPage, #aboutPage, #contactPage').hide();
        $('header').animate({ 
            opacity: 0
        }, 600, function() {
            $('#headerTitle').text('Services');
            $('header').animate({opacity: 1}, 600);
        });
        $('.mainDiv').animate({
            opacity: .5,
            right: 1200}, 600, function() {
                $('#servicesPage').show();
        }).animate({right: 0}, 800).animate({opacity: 1}, 600);
    });

    $('#portfolioSide').click(function() {
        $('#servicesPage, #aboutPage, #contactPage').hide();
        $('.mainDiv').animate({
            opacity: .5,
            right: 1200}, 600, function() {
                $('#portfolioPage').show();
            }).animate({right: 0}, 800).animate({opacity: 1}, 600);
    });

    $('#aboutSide').click(function() {
        $('#portfolioPage, #servicesPage, #contactPage').hide();
        $('.mainDiv').animate({
            opacity: .5,
            right: 1200}, 600, function() {
                $('#aboutPage').show();
            }).animate({right: 0}, 800).animate({opacity: 1}, 600);
    });

    $('#contactSide').click(function() {
        $('#portfolioPage, #aboutPage, #servicesPage').hide();
        $('.mainDiv').animate({
            opacity: .5,
            right: 1200}, 600, function() {
                $('#contactPage').show();
            }).animate({right: 0}, 800).animate({opacity: 1}, 600);
    });

});