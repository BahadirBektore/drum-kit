// Detecting Button Press

$(".drum").click(function () {
    var buttonInnerHTML = $(this).html();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

// Detecting Keyboard Press

$(document).keydown(function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    var sounds = {
        "w": "sounds/tom-1.mp3",
        "a": "sounds/tom-2.mp3",
        "s": "sounds/tom-3.mp3",
        "d": "sounds/tom-4.mp3",
        "j": "sounds/snare.mp3",
        "k": "sounds/crash.mp3",
        "l": "sounds/kick.mp3"
    };

    if (sounds[key]) {
        new Audio(sounds[key]).play();
    } else {
        console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = $("." + currentKey);
    activeButton.addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100);
}