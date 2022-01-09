function myFunction() {
    var x = document.getElementsByTagName("nav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

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