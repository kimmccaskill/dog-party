// function insertName(dogName) {
//
// };
var insertName = document.querySelector('.name-input')
var submit = document.querySelector('.name-submit')
var someDogText = document.querySelector('.some-dogs')


// submit.addEventListener('click', function(event) {
//   event.preventDefault();
//   someDogText.innerHTML = insertName.value;
// });
// form refreshing after submitting  //

submit.addEventListener('click', function() {
  someDogText.innerHTML = insertName.value;
});
