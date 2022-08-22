let testimonialOne = document.getElementById('testimonial-one');
let testimonialTwo = document.getElementById('testimonial-two');
let sliderPrevious = document.getElementById('previous');
let sliderNext = document.getElementById('next');

sliderPrevious.addEventListener('click', displayToggle);
sliderNext.addEventListener('click', displayToggle);

function displayToggle() {
  testimonialOne.classList.toggle('testimonial--display');
  testimonialTwo.classList.toggle('testimonial--display');
}
