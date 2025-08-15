document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const sumbitButton = document.getElementById('submit-button');

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                    'Accept': 'application/json'
            }
        });

        

        if (response.ok) {
            sumbitButton.classList.add('submit-success')
            sumbitButton.innerHTML = '<i class="bi bi-check-circle"></i> ' + sumbitButton.textContent

            setTimeout(() => {
                sumbitButton.classList.remove('submit-success')
                sumbitButton.textContent = 'Send Message'
            }, 2000)

            form.reset();
        } else {
            sumbitButton.classList.add('submit-fail')
            sumbitButton.innerHTML = '<i class="bi bi-exclamation-circle"></i> ' + sumbitButton.textContent

            setTimeout(() => {
                sumbitButton.classList.remove('submit-fail')
                sumbitButton.textContent = 'Send Message'
            }, 2000)
        }

        form.reset();
    })
})