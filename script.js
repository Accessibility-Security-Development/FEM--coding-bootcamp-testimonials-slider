let sliderPrevious = document.getElementById('previous');
let sliderNext = document.getElementById('next');

sliderPrevious.addEventListener('click', previous);
sliderNext.addEventListener('click', next);

let imagesList = document.getElementsByClassName('testimonial');
let currentImage = imagesList[0];
let imagesNumber = imagesList.length - 1;
let index = 0; // the value of the index of the first image that is displayed when the page loads

function previous() {
  if (index > 0) {
    //if the first image is displayed and the user clicks the previous button
    index = index - 1; // then the index is set to point to the last image
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
    //if the last image is displayed and the user clicks the next button
    index = 0; // then the index is set to 0 to point to the first image
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
