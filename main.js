var button = document.getElementById('button');

button.onclick = function(e) {
    e.preventDefault();
    var div = document.getElementsByClassName('generated-text');
    div[0].style.display = 'block';
};