class Carousel {
  constructor() {
    this.slider = document.querySelector('.cards__carousel');
    this.isDown = false;
  }

  activateCarousel() {
    let startX;
    let scrollLeft;

    this.slider.addEventListener('mousedown', (e) => {
      this.isDown = true;
      this.slider.classList.add('cards__card--active');
      startX = e.pageX - this.slider.offsetLeft;
      scrollLeft = this.slider.scrollLeft;
    });
    this.slider.addEventListener('mouseleave', (_) => {
      this.isDown = false;
      this.slider.classList.remove('cards__card--active');
    });
    this.slider.addEventListener('mouseup', (_) => {
      this.isDown = false;
      this.slider.classList.remove('cards__card--active');
    });
    this.slider.addEventListener('mousemove', (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.slider.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      this.slider.scrollLeft = scrollLeft - walk;
    });
  }
}

const carousel = new Carousel();

export { carousel };
