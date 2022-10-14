// FIND NUMBER OF DRUM BUTTONS

var numberOfDrumButtons = document.querySelectorAll(".drum").length

// SET UP LOOP FOR WHAT addEventListener listens for
// we want up to 7 buttons to addEventListener to a "click" function

for (var i = 0; i < numberOfDrumButtons; i++) {


  //Detecting Button Click
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {

      // MAKE A CLICK FUNCTION

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

    });
};


//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});


function makeSound(key) {


  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;


    default:
      console.log(buttonInnerHTML)
  };
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." +  currentKey);



    activeButton.classList.add("pressed");

    //Setting Time Out

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);

}









// var x = new Audio("sounds/tom-1.mp3")
// function() { x.play();})
