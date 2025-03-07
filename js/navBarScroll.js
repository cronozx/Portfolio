document.addEventListener('DOMContentLoaded', () => {
    const navBarLinks = document.querySelectorAll('.navbar-link');

    navBarLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            
            const splitStrings = element.id.split('-');
            const elementByID = document.querySelector('.' + splitStrings[0]);

            elementByID.scrollIntoView({block: "start", behavior: "smooth"});
        });
    });
});