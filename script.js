// Slajder
let index = 0;
let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");
let interval;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

function changeSlide(n) {
  let newIndex = (index + n + slides.length) % slides.length;
  showSlide(newIndex);
}

function goToSlide(i) {
  showSlide(i);
}

function startAutoSlide() {
  interval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

startAutoSlide();

document.getElementById("slider").addEventListener("mouseenter", stopAutoSlide);
document.getElementById("slider").addEventListener("mouseleave", startAutoSlide);

/* Dark mode */
function toggleDark() {
    document.body.classList.toggle("dark");
}

/* Hamburger */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

/* Przyciski od div'a samochodu */
function extendText(inputtext){
    document.getElementById(inputtext).hidden = !document.getElementById(inputtext).hidden;

}