var para = document.querySelector('h1');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('QUIEN SOS CHABON?');
  para.textContent = 'Soy ' + name;
}