class BurgerMenu {
  constructor() {
    this.burgerIcon = document.querySelector('.burger-icon');
    this.drowDownItems = document.querySelector('.dropdown-items');
    this.rightSideItems = document.querySelector('.right-side-items');
    this.leftSideItems = document.querySelector('.left-side-items');
    this.closeIcon = document.querySelector('.close-menu-icon');
  }

  // Open burger menu when clicked on icon
  toggleBurgerMenu() {
    this.burgerIcon.addEventListener('click', () => {
      const windowInnerWidth = window.innerWidth;

      this.rightSideItems.style.display = 'block';
      this.drowDownItems.style.display = 'block';

      if (windowInnerWidth < 961) {
        this.leftSideItems.style.display = 'block';
      }
    });
  }

  // Hide menu when screen size is changeg and items don't fit in
  hideMenuOnResize() {
    addEventListener('resize', () => {
      const windowInnerWidth = window.innerWidth;

      if (windowInnerWidth > 1200) {
        this.drowDownItems.style.display = 'none';
      }
      if (windowInnerWidth > 960) {
        this.leftSideItems.style.display = 'none';
      }
    });
  }

  // Close menu by click on icon X
  closeMenu() {
    this.closeIcon.addEventListener('click', () => {
      this.drowDownItems.style.display = 'none';
    });
  }
}

const burgerMenu = new BurgerMenu();

export { burgerMenu };
