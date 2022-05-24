alert('Ты приёмный');
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dogg.png') {
      myImage.setAttribute ('src','images/Pipka.jpg');
    } else {
      myImage.setAttribute ('src','images/dogg.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Ты кто по жизни, браток?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Вечер в хату, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Вечер в хату, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }