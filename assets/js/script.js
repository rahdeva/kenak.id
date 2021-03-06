// untuk responsive navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// untuk alert saat click Google Play
const buttons = document.querySelectorAll(".button");
for(let button of buttons){
    button.addEventListener('click', function(event){

        // mendapatkan objek elemen yang diklik
        const target = event.target;

        if(target.classList.contains('google-play')){
            alert("Coming Soon!");
            return;
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("form");
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();   
        addResult();
    });
});