var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/11pasadena.jpg') {
      myImage.setAttribute ('src','images/11pasadena2.jpg');
    } else {
      myImage.setAttribute ('src','images/11pasadena.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = '11 Pasadena Place, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '11 Pasadena Place, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}