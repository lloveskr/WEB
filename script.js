// Select all xylophone keys
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    // Add event listener to play note on click
    key.addEventListener('click', () => playNoteAndAnimate(key));
});

function playNoteAndAnimate(key) {
    const note = key.getAttribute('data-note');
    const audio = new Audio(`Sounds/${note}.mp3`);
    audio.play();
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 100);
}

// (Optional) Add keyboard functionality
document.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[data-note="${e.key.toUpperCase()}"]`);
    if (key) playNoteAndAnimate(key);
});