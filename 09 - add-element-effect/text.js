const buttonJS = document.querySelector(".js");
const buttonJQ = document.querySelector(".jq");

//tworzymy element - div

buttonJS.addEventListener('click', function() {
    const div = document.createElement('div');
        
    //dodajemy klasę do diva -classlist?
    
    div.className = "box";

    //dodajemy element do strony
    
    document.body.appendChild(div);

})


$('.jq').on("click", function() {
    $("body").append('<div class="box">')
})
