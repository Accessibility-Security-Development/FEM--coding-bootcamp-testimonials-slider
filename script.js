let sliderPrevious = document.getElementById('previous');
let sliderNext = document.getElementById('next');

sliderPrevious.addEventListener('click', previous);
sliderNext.addEventListener('click', next);

let imagesList = document.getElementsByClassName('testimonial');
let currentImage = imagesList[0];
let imagesNumber = imagesList.length - 1; // length = 3 - 1
let index = 0; // the value of the index of the first image that is displayed when the page loads

function previous() {
  if (index > 0) {
    index = index - 1;
  } else {
    index = imagesNumber;
  }

  for (let i = 0; i < imagesList.length; i++) {
    if (!imagesList[i].classList.contains('testimonial--display')) {
      console.log('flowers');
      imagesList[i].classList.add('testimonial--display');
    }
  }

  imagesList[index].classList.remove('testimonial--display');
}

function next() {
  if (index == imagesNumber) {
    index = 0;
  } else {
    index = index + 1;
  }

  for (let i = 0; i < imagesList.length; i++) {
    if (!imagesList[i].classList.contains('testimonial--display')) {
      console.log('flowers');
      imagesList[i].classList.add('testimonial--display');
    }
  }

  imagesList[index].classList.remove('testimonial--display');
}
