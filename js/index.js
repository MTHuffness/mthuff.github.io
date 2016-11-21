$(document).ready(function() {
    $('.mainDiv').fadeIn(1400);
    $('.linkDiv').effect('slide', 'right', 1400);
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