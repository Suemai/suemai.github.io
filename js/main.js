import { initializeNavbar } from './nav.js';
import { initializeAnimations } from './animations.js';
import { initializeStars } from './stars.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeNavbar();
    initializeAnimations();
    initializeStars();
});
