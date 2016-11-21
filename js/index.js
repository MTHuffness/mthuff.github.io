$(document).ready(function() {
    $('.mainDiv').fadeIn(1400);
    $('.linkDiv').effect('slide', 'left', 1400);
    $('.linkDiv').hover(
        function() {
            $(this).removeClass("linkDiv").addClass("linkDivHover");
    }, function() {
            $(this).removeClass("linkDivHover").addClass("linkDiv");
    });
    $('.linkDiv').click(function() {
            $(this).removeClass("linkDivHover").addClass("linkDivClick");
    })
});