document.addEventListener('DOMContentLoaded', () => {
    const aboutMeNav = document.querySelector('.about-me-nav');
    const aboutMeSection = document.querySelector('.aboutme');
    
    aboutMeNav.addEventListener('click', (event) => {
        event.preventDefault();
        
        aboutMeSection.scrollIntoView({block: "start", behavior: 'smooth'});
    });
});