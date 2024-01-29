const myBtn = document.getElementById('myBtn');
const myPopup = document.getElementById('Popup');
const myI = document.getElementById('myI');

myBtn.addEventListener('click', () => {
  myPopup.classList.toggle('fade');
  myBtn.classList.toggle('share-color');
  myI.classList.toggle('share-I-color');
});



// myPopup.addEventListener('mouseleave', () => { 
//   myPopup.classList.remove('fade');
// })