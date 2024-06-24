const colors = ["red", "blue", "green", "yellow"];
const btn = document.querySelector('.btn');
const color = document.querySelector('span');

btn.addEventListener('click', function() {
  let color = getRandomNumber();
  document.body.style.backgroundColor = colors[color];
  color.textContent = colors[color];

});


function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
