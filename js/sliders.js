const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider(); line 6 method preffered to this 
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("display-slide");
    }
};

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    };

    slides.forEach(slide => {
        slide.classList.remove("display-slide");
    });
    slides[slideIndex].classList.add("display-slide");
};

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
};

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
};