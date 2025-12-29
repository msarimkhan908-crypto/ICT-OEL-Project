// Animate skill bars
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkillBars() {
    skillFills.forEach(fill => {
        const parent = fill.parentElement;
        const parentTop = parent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (parentTop < windowHeight - 50) {
            fill.style.width = fill.style.width; // triggers CSS transition
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
