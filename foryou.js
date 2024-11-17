let swiperContainer = document.querySelector('.swiper-container');
let swiperSlides = document.querySelectorAll('.swiper-slide');
let currentIndex = 0;
let startX = 0;
let endX = 0;

swiperContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

swiperContainer.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

swiperContainer.addEventListener('touchend', () => {
  if (endX - startX > 50 && currentIndex > 0) {
    // Swipe left
    currentIndex--;
  } else if (endX - startX < -50 && currentIndex < swiperSlides.length - 1) {
    // Swipe right
    currentIndex++;
  }

  updateSlides();
});

function updateSlides() {
  swiperSlides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.transform = 'translateX(0)';
    } else if (index < currentIndex) {
      slide.style.transform = 'translateX(-100%)';
    } else {
      slide.style.transform = 'translateX(100%)';
    }
  });
}

updateSlides();