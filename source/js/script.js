var header = document.querySelector('.page-header');
var navToggle = document.querySelector('.nav-toggle');

header.classList.remove('page-header--no-js');

navToggle.addEventListener('click', function () {
  header.classList.toggle('page-header--nav-opened')
});
