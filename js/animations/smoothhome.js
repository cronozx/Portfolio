import { closeNavPage } from './navbar/openNavBar.js'

document.addEventListener("DOMContentLoaded", function() {
    const brand = document.getElementById("brand");
    const topElement = document.getElementById("top");

    if (brand && topElement) {
        brand.addEventListener("click", function(event) {
            event.preventDefault();

            if (navbar.classList.contains('nav-open')) {
                closeNavPage()
            }

            topElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});