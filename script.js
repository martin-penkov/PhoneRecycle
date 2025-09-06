document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const requestTypeRadios = document.querySelectorAll('input[name="requestType"]');
    const repairDescriptionGroup = document.getElementById('repair-description-group');

    requestTypeRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target.value === 'repair') {
                repairDescriptionGroup.classList.remove('hidden');
            } else {
                repairDescriptionGroup.classList.add('hidden');
            }
        });
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form submitted');
        console.log(data);

        alert("Благодарим ви за вашето запитване! Ще се свържем с вас скоро.");
        contactForm.reset();
    });
});