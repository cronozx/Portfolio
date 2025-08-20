document.addEventListener('DOMContentLoaded', () => {
    const navBarButton = document.getElementById('navbar-button')
    const navbar = document.getElementById('navbar')
    const navPage = document.getElementById('navpage')

    const navLinks = document.querySelectorAll('.nav-page-links')

    navBarButton.addEventListener('click', () => {
        if (navbar.classList.contains('nav-open')) {
            closeNavPage()
        } else {
            navbar.classList.add('nav-open')
            navPage.classList.add('nav-open') 

            setTimeout(() => {
                navLinks.forEach(element => {
                    element.classList.add('slide')
                });
            }, 400)
        }
    })
})

export function closeNavPage() {
    const navbar = document.getElementById('navbar')
    const navPage = document.getElementById('navpage')

    const navLinks = document.querySelectorAll('.nav-page-links')

    navbar.classList.remove('nav-open')
    navPage.classList.remove('nav-open')

    navLinks.forEach(element => {
        element.classList.remove('slide')
    });
}