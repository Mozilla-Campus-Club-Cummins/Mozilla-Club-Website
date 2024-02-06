document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbarList = document.querySelector('.navbar-list');
  
    menuIcon.addEventListener('click', function () {
      navbarList.classList.toggle('show');
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navbarList.classList.remove('show');
      }
    });
  });