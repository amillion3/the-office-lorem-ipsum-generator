var button = document.getElementById("button");

button.onclick = function(e) {
    e.preventDefault();
    console.log("clicked");
    var div1 = document.getElementById("lorem-ipsum");
    var div2 = document.getElementsByClassName("placeholder-div")[0];
    console.log(div1);
    console.log(div2);
    div1.style.display = "flex";
    div2.style.display = "flex";
};


// var innerContents = document.getElementsByClassName("generated-text")[0].innerHTML;
//     if (!innerContents.includes("<p>")) {
//       $('.copy-button').hide();
//       document.getElementsByClassName("generated-text")[0].style.display = "none";
//     };
//     var clip = new Clipboard('.copy-button');
//     clip.on('success', function(e) {
//       $('#copyOverlay').show();
//       $('#copyOverlay').fadeOut(2000);
//       e.clearSelection();
//     });