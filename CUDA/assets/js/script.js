$(function() {

    /* Burger Menu */

    $("#burger-menu").on("click", function(event) {
        event.preventDefault();
        
        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    });

});