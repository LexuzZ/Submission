// Menu Toolbar
const navbarNav = document.querySelector('.navbar-nav');

// click
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// menghilangkan toolbar
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e){
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }

});

