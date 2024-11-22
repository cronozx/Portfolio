document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector('.nav-item .nav-link[href="#aboutme"]');

    if (link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });

                setTimeout(function() {
                    history.replaceState(null, null, ' ');
                }, 1000);
            }
        });
    }
});