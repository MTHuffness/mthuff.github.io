$(document).ready(function() {
    $('.mainDiv').fadeIn(1400);
    $('.linkDiv').animate({width:'show'}, 1350);
    $('.rightTriangle').delay(1350).fadeIn(1200);
    $('.linkDiv').hover(
        function() {
            $(this).removeClass("linkDiv").addClass("linkDivHover");
            $(this).find('.rightTriangle').fadeOut(200).fadeIn(200).removeClass('rightTriangle').addClass('rightTriangle2');
    }, function() {
            $(this).removeClass("linkDivHover").addClass("linkDiv");
            $(this).find('.rightTriangle2').removeClass('rightTriangle2').addClass('rightTriangle');
    });
    $('.linkDiv').click(function() {
            $(this).effect('bounce',{times:1}, 200).removeClass("linkDivHover").addClass("linkDivClick");
    })
});