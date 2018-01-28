// function displayLoremTextBox() {
//     // generated-text.style.display="block";
//     document.getElementById("generated-text").style.display="block";
// }

// Get the modal
var loremDiv = document.getElementById("generated-text");

// Get the button that opens the modal
var btn = document.getElementById("generate-button");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    loremDiv.style.display = "block";
}