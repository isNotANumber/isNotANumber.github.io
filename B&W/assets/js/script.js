$(function() {

    /* Smooth Scroll */

    /*$("[data-scroll]").on("click", function(event) {
        event.preventDefault(); 

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
            
        $("#burger-menu").removeClass("active");
        $("#nav").removeClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });*/



    /* Burger Menu */

    $("#burger-menu").on("click", function(event) {
        event.preventDefault();

        $("#nav a").removeClass("active");
        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    });
});