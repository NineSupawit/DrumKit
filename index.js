

// document.querySelector("button").addEventListener('click', handleClick);
//
// function handleClick () {
//   alert("Clicked");
// }

for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++ ) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () { //arow function

 //console.log(this.innerHTML);

 var bottonInnerHTML = this.innerHTML;

 switch (bottonInnerHTML) {

   case "w":
   var audio = new Audio ('sounds\tom-1.mp3');
   audio.play();
   break;

   case "a":
   var audio = new Audio ('sounds\tom-2.mp3');
   audio.play();
   break;

   case "s":
   var audio = new Audio ('sounds\tom-3.mp3');
   audio.play();
   break;

   case "d":
   var audio = new Audio ('sounds\tom-4.mp3');
   audio.play();
   break;

   case "j":
   var audio = new Audio ('sounds\crash.mp3');
   audio.play();
   break;

   case "k":
   var audio = new Audio ('sounds\kick-bass.mp3');
   audio.play();
   break;

   case "l":
   var audio = new Audio ('sounds\snare.mp3');
   audio.play();
   break;

   default:

 }
}
);

}

document.addEventListener("keydown", function (){
  alert("keydown");
});


// var audio = new Audio ('sounds\crash.mp3');
// audio.play();
