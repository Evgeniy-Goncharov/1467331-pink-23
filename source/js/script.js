var header = document.querySelector('.page__header');
var navToggle = document.querySelector('.nav-toggle');

header.classList.remove('page__header--no-js');

navToggle.addEventListener('click', function () {
  header.classList.toggle('page__header--nav-opened')
});
