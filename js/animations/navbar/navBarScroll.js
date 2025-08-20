import { closeNavPage } from './openNavBar.js'

document.addEventListener('DOMContentLoaded', () => {
    const navBarLinks = document.querySelectorAll('.nav-link');

    navBarLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            
            const splitStrings = element.id.split('-');
            const elementByID = document.querySelector('.' + splitStrings[0]);

            if (navbar.classList.contains('nav-open')) {
                closeNavPage()
            }

            elementByID.scrollIntoView({block: "start", behavior: "smooth"});
        });
    });
});