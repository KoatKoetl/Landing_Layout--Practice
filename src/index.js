import './CSS/style.css';
import { burgerMenu } from './headerBurgerMenu';

function enableHeaderBurgerMenu() {
  burgerMenu.toggleBurgerMenu();
  burgerMenu.hideMenuOnResize();
  burgerMenu.closeMenu();
  burgerMenu.logInConsole();
}

enableHeaderBurgerMenu();
