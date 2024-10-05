function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const textElement = document.getElementById('animated-text');
const phrases = ['Senior Software Engineer', 'Mobile Developer', 'Web Developer'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = isDeleting
    ? currentPhrase.substring(0, charIndex--)
    : currentPhrase.substring(0, charIndex++);

  textElement.textContent = currentText;

  // Control the speed of typing and deleting
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseAtEnd = isDeleting ? 500 : 1500; // Pause before deleting or moving to the next word

  // When word is completely typed
  if (!isDeleting && charIndex === currentPhrase.length) {
    setTimeout(() => (isDeleting = true), pauseAtEnd);
  }
  // When word is completely deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();
