import './CSS/style.css';
import { burgerMenu } from './toggleBurgerMenu';

function enableBurgerMenu() {
  burgerMenu.toggleBurgerMenu();
  burgerMenu.hideMenuOnResize();
  burgerMenu.closeMenu();
}

enableBurgerMenu();
