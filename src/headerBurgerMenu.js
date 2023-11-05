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

      // Show the drop down menu
      this.drowDownItems.style.opacity = 1;
      this.drowDownItems.style.visibility = 'visible';

      // Show the right side items in drop down menu
      this.rightSideItems.style.opacity = 1;
      this.rightSideItems.style.visibility = 'visible';

      // If windows is smalller than 961px, show in menu remaining items
      if (windowInnerWidth < 961) {
        this.leftSideItems.style.opacity = 1;
        this.leftSideItems.style.visibility = 'visible';
      }
    });
  }

  // Hide menu when screen size is changeg and items don't fit in
  hideMenuOnResize() {
    addEventListener('resize', () => {
      const windowInnerWidth = window.innerWidth;

      // Hide elements if window width > 1200
      if (windowInnerWidth > 1200) {
        // Hide the drop down menu
        this.drowDownItems.style.opacity = 0;
        this.drowDownItems.style.visibility = 'hidden';
        // Hide the right side items from drop down menu
        this.rightSideItems.style.opacity = 0;
        this.rightSideItems.style.visibility = 'hidden';
      }

      // Hide elements if window width > 960
      if (windowInnerWidth > 960) {
        // Hide left side items from drop down menu
        this.leftSideItems.style.opacity = 0;
        this.leftSideItems.style.visibility = 'hidden';
      }
      // Show items if window is smaller than 960
      else {
        this.leftSideItems.style.opacity = 1;
        this.leftSideItems.style.visibility = 'visible';
      }
    });
  }

  // Close drop down menu by click on icon X
  closeMenu() {
    this.closeIcon.addEventListener('click', () => {
      // Hide the drop down menu
      this.drowDownItems.style.opacity = 0;
      this.drowDownItems.style.visibility = 'hidden';

      // Hide the right side items on close
      this.rightSideItems.style.opacity = 0;
      this.rightSideItems.style.visibility = 'hidden';

      // Hide left side items on close
      this.leftSideItems.style.opacity = 0;
      this.leftSideItems.style.visibility = 'hidden';
    });
  }
}

const burgerMenu = new BurgerMenu();

export { burgerMenu };
