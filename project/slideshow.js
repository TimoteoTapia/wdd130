let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// get the feedback div element so we can do something with it.
const feedbackElement = document.getElementById("feedback");
// get the form so we can read what was entered in it.
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener("submit", function (e) {
  // stop the form from doing the default action.
  e.preventDefault();
  // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
  feedbackElement.innerHTML =
    "Hello " +
    formElement.user_name.value +
    "! Thank you for your message. We will get back with you as soon as possible!";
  // make the feedback element visible.
  feedbackElement.style.display = "block";
  // add a class to move everything down so our message doesn't cover it.
  document.body.classList.toggle("moveDown");
});
