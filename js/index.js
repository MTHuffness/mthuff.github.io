$(document).ready(function() {
    $('.mainDiv').fadeIn(1400);
    $('.linkDiv').animate({width:'show'}, 1350);
    $('.linkDiv').hover(
        function() {
            $(this).removeClass("linkDiv").addClass("linkDivHover");
    }, function() {
            $(this).removeClass("linkDivHover").addClass("linkDiv");
    });
    $('.linkDiv').click(function() {
            $(this).effect('bounce',{times:1}, 200).removeClass("linkDivHover").addClass("linkDivClick");
    })
});