// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


// Single button open and close

function openPopup() {
  $('.popup').css('display', 'block');
  $("p, h2, button").addClass("open-popup"); //sets to block so popup is visible 
  $("p, h2, button").removeClass("popup");
}

function closePopup() {
  $('.popup').css('display', 'none'); //closes popup, sets state to none
  $("p, h2, button").addClass("popup");
  $("p, h2, button").removeClass("open-popup");
}

function changeImage() {
  $('.button1 img').attr('src', 'img/untiled.jpg');
  $("img").addClass("popup-img")} //changes image from environment.jpg to IMG