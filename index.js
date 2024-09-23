const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dots span");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        dots[0].classList.add("active")
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    dots.forEach(dot => {
        dot.classList.remove("active")
    });
    dots[slideIndex].classList.add("active");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}


dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        clearInterval(intervalId);
        slideIndex = parseInt(e.target.getAttribute('data-slide'));
        showSlide(slideIndex);

        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        dots[slideIndex].classList.add("active");
    });
});

document.addEventListener('keydown', function(event) {
    const output = document.getElementById('output');
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});