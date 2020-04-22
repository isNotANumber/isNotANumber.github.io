$(function() {

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); 

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
            
        $("#burger-menu").removeClass("active");
        $("#nav").removeClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* Burger Menu */

    $("#burger-menu").on("click", function(event) {
        event.preventDefault();

        $("#nav a").removeClass("active");
        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    });


    /* Portfolio Filter */

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        $(filter).removeClass("active");
        $(this).toggleClass("active");

        let cat = $(this).data("filter");

        if(cat == "all") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data("cat");

                if(workCat != cat) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }

            });
        }


    });


});