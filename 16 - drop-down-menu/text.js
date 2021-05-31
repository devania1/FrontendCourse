// const arrow = document.querySelector(".arrow");
// const nav = document.querySelector("nav");

// arrow.addEventListener("click", function() {
//     arrow.classList.toggle("on");
//     nav.classList.toggle("on");
// })

//zrobić wersję w JQ

$(".arrow").on("click", function() {
    $(".arrow, nav").toggleClass("on");
})