document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('name-icon-slide-right');
            } else {
                entry.target.classList.remove('name-icon-slide-right');
            }
        })
    })

    const elements = document.querySelectorAll('.name-icon');
    elements.forEach(element => {
        observer.observe(element);
    })
})