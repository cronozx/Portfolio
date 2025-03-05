document.addEventListener("DOMContentLoaded", function() {
    history.pushState("", document.title, window.location.pathname);
});