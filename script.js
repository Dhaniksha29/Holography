document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            // Generate a random color
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            section.style.backgroundColor = randomColor;
        });
    });
});
