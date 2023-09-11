document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const topnav = document.querySelector('.topnav');
    const main = document.querySelector('main');
  
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      topnav.classList.toggle('open');
      main.classList.toggle('open');
    });
  });
  