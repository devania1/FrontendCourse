let rotate = 0;
const deg = 90;

const div = document.querySelector(".square");
const btn = document.querySelector("button");
div.style.transition = "2s";

btn.addEventListener('click', function(){
    rotate = rotate + deg; //rotate += deg;
    div.style.transform = `rotate(${rotate}deg)`;
})