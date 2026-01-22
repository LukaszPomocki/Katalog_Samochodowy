/* Slider */
const slides = [
    "https://picsum.photos/id/1011/1600/800",
    "https://picsum.photos/id/1015/1600/800",
    "https://picsum.photos/id/1020/1600/800"
];

let index = 0;
const slide = document.getElementById("slide");

function showSlide() {
    slide.src = slides[index];
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
}

setInterval(nextSlide, 4000);

/* Dark mode */
function toggleDark() {
    document.body.classList.toggle("dark");
}

/* Hamburger */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}