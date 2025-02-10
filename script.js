document.addEventListener('DOMContentLoaded', () => {
    const gifsAndEmotes = document.querySelectorAll('img, .emoji');

    function enlargeElements() {
        gifsAndEmotes.forEach(element => {
            element.style.transform = 'scale(1.5)';
            element.style.transition = 'transform 0.3s ease';
        });
    }

    function resetElements() {
        gifsAndEmotes.forEach(element => {
            element.style.transform = 'scale(1)';
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'n' && event.key.toLowerCase() === 'o') {
            enlargeElements();
        } else {
            resetElements();
        }
    });
});