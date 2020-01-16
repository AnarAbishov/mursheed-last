$(document).ready(function () {
    $( "#menu-btn" ).click(function() {
        $(".sub-menu").slideToggle( "slow", function() {
        });
    });
});