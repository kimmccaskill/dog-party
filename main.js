const insertName = document.querySelector('.name-input')
const submit = document.querySelector('.name-submit')
const someDogText = document.querySelector('.some-dogs')

submit.addEventListener('click', function() {
  someDogText.innerHTML = insertName.value;
});
