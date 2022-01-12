function myFunction() {
    var x = document.getElementsById("menuABC");
    alert(x.className);
    // x.className = "responsive";
    // if (x.className === "tai") {
    //     x.className = "responsive";
    // } 
    // else {
    //     x.className = "navbar";
    // }
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