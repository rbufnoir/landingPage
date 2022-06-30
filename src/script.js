function changeTheme() {
  const listInput = document.getElementsByName("theme");
  let i = 0;

  while (i < listInput.length && !listInput[i].checked)
    i++;
  document.body.attributes[0].nodeValue=listInput[i].id;
}


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    document.addEventListener('keydown', event => {
        let key = event.key;
        const currentTime = Date.now();

        switch(key) {
          case "&":
            document.getElementsByName("theme")[0].checked=true;
            break;
          case "é":
            document.getElementsByName("theme")[1].checked=true;
            break;
          case "\"":
            document.getElementsByName("theme")[2].checked=true;
            break;
          case "ArrowUp":
            slideNavigation('top');
            break;
          case "ArrowDown":
            slideNavigation('bottom');
            break;
            case "ArrowLeft":
              plusSlide(-1);
              break;
            case "ArrowRight":
              plusSlide(1);
              break;
        }
        changeTheme();
    });
});

document.addEventListener('wheel', scroll => {
  let scrollDir = scroll.deltaY;

  if (scrollDir > 0) {
    animation('top');
  }
  else {
    animation('bottom');
  }
});

<<<<<<< HEAD
function removeAnimate(layer) {
  layer[0].classList.remove('revealer--animate');
  layer[0].style.bottom = "";
  layer[0].style.top = "";
  layer[0].style.animationName = "";
}

//document.body.getElementsByClassName("revealer")[0].addEventListener("animationend", coucou)


function changePageCurrent(child) {
  console.log(child);
  const page = document.getElementsByClassName("page--current")[0]
  if (page.previousElementSibling != null && child === 'top') {
    page.previousElementSibling.classList.add("page--current");
    animateSlider(child);
  }
  else if (page.nextElementSibling != null && child === 'bottom') {
    page.nextElementSibling.classList.add("page--current");
    animateSlider(child);
  }
}

function removeCurrentPage (page) {
  page.classList.remove("page--current");
}

function animateSlider(direction) {
  if (direction === "top") {
    document.getElementsByClassName("revealer")[0].style.bottom = "";
    document.getElementsByClassName("revealer")[0].style.top = "100%";
    document.getElementsByClassName("revealer")[0].style.animationName = "animationBot";
    }
  else if (direction === "bottom"){
=======
function shutterAnimationConfig(direction) {
  if (direction === 'top') {
    document.getElementsByClassName("revealer")[0].style.bottom = "";
    document.getElementsByClassName("revealer")[0].style.top = "100%";
    document.getElementsByClassName("revealer")[0].style.animationName = "animationBot";
  }
  else {
>>>>>>> bosseLeJsConnard
    document.getElementsByClassName("revealer")[0].style.bottom = "100%";
    document.getElementsByClassName("revealer")[0].style.top = "";
    document.getElementsByClassName("revealer")[0].style.animationName = "animationTop";
  }
}

<<<<<<< HEAD
function animation(direction) {
  const layer = document.getElementsByClassName("revealer");
  const page = document.getElementsByClassName("page--current")[0];

  animateSlider(direction);
  setTimeout(function () {changePageCurrent(direction)}, 1000);
  setTimeout(function () {removeCurrentPage(page)}, 1000);
  layer[0].classList.add('revealer--animate');
  layer[0].addEventListener("animationend", function () {removeAnimate(layer)});
  layer[0].addEventListener("webkitAnimationEnd", function () {removeAnimate(layer)});
=======
function resetShutter(shutter) {
  shutter.style.bottom = "";
  shutter.style.top = "";
  shutter.style.animationName = "";
  shutter.classList.remove("revealer--animate");
}

function nextSlide(direction) {
  const page = document.getElementsByClassName("page--current")[0];

  page.classList.remove("page--current");
  if (direction === 'top')
    page.previousElementSibling.classList.add("page--current");
  else
    page.nextElementSibling.classList.add("page--current");

}

function slideNavigation(direction) {
  const page = document.getElementsByClassName("page--current")[0];
  const shutter = document.getElementsByClassName("revealer")[0];

  if ((direction === 'top' && page.previousElementSibling !== null) || (direction === 'bottom' && page.nextElementSibling !== null)) {
    shutterAnimationConfig(direction);
    shutter.classList.add("revealer--animate");
    shutter.addEventListener("animationend", function () {resetShutter(shutter)});
    setTimeout(function () {nextSlide(direction)}, 1000);
  }
>>>>>>> bosseLeJsConnard
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  if (n == 1) {
    for (i = 0; i < 4; i++)
      document.getElementsByClassName("anim")[i].style.animationName = "animDroite";
    console.log(n);
  }
  else {
    for (i = 0; i < 4; i++)
      document.getElementsByClassName("anim")[i].style.animationName = "animGauche";
    console.log(n);

  }
  /*const index = slideIndex+n;
  const test = document.getElementsByClassName("anim")[index];
  test.addEventListener("animationend", function() {showSlides(index)});*/
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container");

  if (n > slides.length)
    slideIndex = 1;
  if (n < 1)
    slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.getElementsByClassName("prev")[0].addEventListener("click", function() {
  plusSlide(-1)});
document.getElementsByClassName("next")[0].addEventListener("click", function() {
    plusSlide(1)});
