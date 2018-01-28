// Get the div for lorem ipsum text (returns an array)
var loremDiv = document.getElementsByClassName("generated-text");
var loremDivText = document.getElementsByClassName("placeholder-div");

// Get the button that generates text (returns an array)
var btn = document.getElementsByClassName("generate-button");

// When the user clicks the button, display the lorem ipsum div
btn[0].onclick = function(e) {
    e.preventDefault();  //prevents page from reloading
    loremDiv[0].style.display="block";
    loremDivText[0].style.display="block";
}