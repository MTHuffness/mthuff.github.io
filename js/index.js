$(document).ready(function() {
    $('.mainDiv').fadeIn(1400);
    $('.grid').animate({width:'show'}, 1350);

    $('#servicesSide').click(function() {
        $('#portfolioPage, #aboutPage, #contactPage').hide();
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