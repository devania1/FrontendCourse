$(".interface").on("click", function(){

    if ($(this).hasClass("orange")) {
        $('body').toggleClass("orange");
    } else if ($(this).hasClass("green")) {
        $('body').toggleClass("green");
    } else if ($(this).hasClass("increase")) {
        $('.text').animate({"font-size": "+=5"}, 500);
    } else if ($(this).hasClass("move")) {
        $('.text').animate({"left": "+=5"}, 100);
    }
})