'use strict';
const img = document.getElementById('penis');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate maximum possible width/height without overflowing
    const maxWidth = Math.min(window.innerWidth - mouseX, mouseX) * 2;
    const maxHeight = Math.min(window.innerHeight - mouseY, mouseY) * 2;

    img.style.width = `${Math.min(maxWidth, window.innerWidth * 0.3)}px`;
    img.style.height = `${Math.min(maxHeight, window.innerHeight * 0.3)}px`;

    // Position the image
    img.style.left = `${mouseX}px`;
    img.style.top = `${mouseY}px`;
});


const wrapper = document.querySelector('.image');

document.addEventListener('mousemove', (e) => {
  wrapper.style.left = `${e.clientX}px`;
  wrapper.style.top = `${e.clientY}px`;
});
