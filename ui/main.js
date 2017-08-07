console.log('Loaded!');
//Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
// Move the Image
var img= document.getElementById('madi');
function moveRight () {
    var marginLeft=0;
    marginLeft =  marginLeft+5;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,500);
};