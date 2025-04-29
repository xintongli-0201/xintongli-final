console.log("Created by Xintong Li");
console.log("Email: xintongli@alum.calarts.edu");
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.animationDelay = `${i * 0.2}s`;
    });
});