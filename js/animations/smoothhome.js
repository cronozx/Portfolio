document.addEventListener("DOMContentLoaded", function() {
    const brand = document.getElementById("brand");
    const topElement = document.getElementById("top");

    if (brand && topElement) {
        brand.addEventListener("click", function(event) {
            event.preventDefault();
            topElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});