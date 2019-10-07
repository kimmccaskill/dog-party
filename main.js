var insertName = document.querySelector('.name-input')
var submit = document.querySelector('.name-submit')
var someDogText = document.querySelector('.some-dogs')

submit.addEventListener('click', function() {
  someDogText.innerHTML = insertName.value;
});
