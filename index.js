

// Detecting the button on screen

var numOfButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        this.style.color="white";
        setTimeout(() => {
            this.style.color = ""; // Reverts to default color
        }, 200);
        makeSound(button);
    });
}

// Detecting the button on keyboard

document.addEventListener("keydown", function(event){
    var key = event.key;
    makeSound(key);
    var button = document.querySelector("." + key); // Assuming each button has a class matching its key
    if (button) {
        button.style.color = "white"; // Change text color to white
        setTimeout(() => {
            button.style.color = ""; // Reverts to default color after 200ms
        }, 200);
    }
});


function makeSound(key){
    switch (key) {
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
    
        default:
            break;
    }
}


