class Carousel {
  constructor() {
    this.isDown = false;
  }

  activateCarousel(carouselId) {
    let startX;
    let scrollLeft;

    carouselId.addEventListener('mousedown', (e) => {
      this.isDown = true;
      carouselId.classList.add('cards__card--active');
      startX = e.pageX - carouselId.offsetLeft;
      scrollLeft = carouselId.scrollLeft;
    });
    carouselId.addEventListener('mouseleave', (_) => {
      this.isDown = false;
      carouselId.classList.remove('cards__card--active');
    });
    carouselId.addEventListener('mouseup', (_) => {
      this.isDown = false;
      carouselId.classList.remove('cards__card--active');
    });
    carouselId.addEventListener('mousemove', (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - carouselId.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      carouselId.scrollLeft = scrollLeft - walk;
    });
  }
}

const carousel = new Carousel();

export { carousel };
