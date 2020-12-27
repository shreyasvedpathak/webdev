for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

document.addEventListener("keydown", function(pressed_key){
  makeSound(pressed_key.key);
  buttonAnimation(pressed_key.key);
})

function makeSound(key){
  switch (key) {
    case "w": {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    }
    case "a": {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    }
    case "s": {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    }
    case "d": {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    }
    case "j": {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    }
    case "k": {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    }
    case "l": {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    }
  default: console.log(key);
  }
}

function buttonAnimation(pressed_key){

  var currentKey = document.querySelector("." + pressed_key);
  currentKey.classList.add("pressed");
  setTimeout(function(){
    currentKey.classList.remove("pressed");
  }, 100)
}
