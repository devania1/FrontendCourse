const firstDiv = document.querySelector(".s1");
const secondDiv = document.querySelector(".s2");

function changeColor() {
    // firstDiv.classList.toggle('red');
    // secondDiv.classList.toggle('red');
    this.classList.toggle('red');
}

//można zrobić za pomocą foreach
firstDiv.addEventListener("click", changeColor);
secondDiv.addEventListener("click", changeColor);