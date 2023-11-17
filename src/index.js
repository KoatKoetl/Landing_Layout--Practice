import './CSS/style.css';
import { burgerMenu } from './headerBurgerMenu';
import { carousel } from './carousel';

const primaryCarousel = document.querySelector('.cards__carousel');
const secondaryCarousel = document.querySelector('.testimonials__carousel');

burgerMenu.enableHeaderBurgerMenu();
carousel.activateCarousel(primaryCarousel);
carousel.activateCarousel(secondaryCarousel);
