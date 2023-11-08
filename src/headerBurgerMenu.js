class BurgerMenu {
  constructor() {
    this.burgerIcon = document.querySelector('.icon.burger-icon');
    this.dropDownMenu = document.querySelector('.menu.dropDown-menu');
    this.menuRightBlock = document.querySelector('.menu.dropDown-menu > .nav.right-block');
    this.menuLeftBlock = document.querySelector('.menu.dropDown-menu > .nav.left-block');
    this.menuCloseIcon = document.querySelector('.button.close > .icon.close-icon');
  }

  // Open burger menu when clicked on icon
  toggleBurgerMenu() {
    this.burgerIcon.addEventListener('click', () => {
      const windowInnerWidth = window.innerWidth;

      // Show the drop down menu
      this.dropDownMenu.style.opacity = 1;
      this.dropDownMenu.style.visibility = 'visible';

      // Show the right side items in drop down menu
      this.menuRightBlock.style.opacity = 1;
      this.menuRightBlock.style.visibility = 'visible';

      // If windows is smalller than 961px, show in menu remaining items
      if (windowInnerWidth < 961) {
        this.menuLeftBlock.style.opacity = 1;
        this.menuLeftBlock.style.visibility = 'visible';
      }
    });
  }

  // Hide menu when screen size is changeg and items don't fit in
  hideMenuOnResize() {
    addEventListener('resize', () => {
      const windowInnerWidth = window.innerWidth;

      // Hide elements if window width > 1200
      if (windowInnerWidth > 1350) {
        // Hide the drop down menu
        this.dropDownMenu.style.opacity = 0;
        this.dropDownMenu.style.visibility = 'hidden';
        // Hide the right side items from drop down menu
        this.menuRightBlock.style.opacity = 0;
        this.menuRightBlock.style.visibility = 'hidden';
      }

      // Hide elements if window width > 960
      if (windowInnerWidth > 960) {
        // Hide left side items from drop down menu
        this.menuLeftBlock.style.opacity = 0;
        this.menuLeftBlock.style.visibility = 'hidden';
      }
      // Show items if window is smaller than 960
      else {
        this.menuLeftBlock.style.opacity = 1;
        this.menuLeftBlock.style.visibility = 'visible';
      }
    });
  }

  // Close drop down menu by click on icon X
  closeMenu() {
    this.menuCloseIcon.addEventListener('click', () => {
      // Hide the drop down menu
      this.dropDownMenu.style.opacity = 0;
      this.dropDownMenu.style.visibility = 'hidden';

      // Hide the right side items on close
      this.menuRightBlock.style.opacity = 0;
      this.menuRightBlock.style.visibility = 'hidden';

      // Hide left side items on close
      this.menuLeftBlock.style.opacity = 0;
      this.menuLeftBlock.style.visibility = 'hidden';
    });
  }

  logInConsole() {}
}

const burgerMenu = new BurgerMenu();

export { burgerMenu };
