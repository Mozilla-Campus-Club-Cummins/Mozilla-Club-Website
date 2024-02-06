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
  
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".image-slider img");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Change slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);

    // Initial slide display
    showSlide(currentSlide);
});