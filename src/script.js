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
            animation('top');
            break;
          case "ArrowDown":
            animation('bottom');
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

function removeAnimate() {
  const layer = document.getElementsByClassName("revealer");
  layer[0].classList.remove('revealer--animate');
  layer[0].style.bottom = "";
  layer[0].style.top = "";
  layer[0].style.animationName = "";
}

function animation(direction) {
  const layer = document.getElementsByClassName("revealer");

  if (direction === "top") {
    document.getElementsByClassName("revealer")[0].style.bottom = "";
    document.getElementsByClassName("revealer")[0].style.top = "100%";
    document.getElementsByClassName("revealer")[0].style.animationName = "animationBot";
    const page = document.getElementsByClassName("page--current")[0];
    if (typeof page.previousElementSibling !== 'undifined') {
      page.previousElementSibling.classList.add("page--current");
      page.classList.remove("page--current");
    }
  }
  else {
    document.getElementsByClassName("revealer")[0].style.bottom = "100%";
    document.getElementsByClassName("revealer")[0].style.top = "";
    document.getElementsByClassName("revealer")[0].style.animationName = "animationTop";
    const page = document.getElementsByClassName("page--current")[0]
    if (typeof page.nextElementSibling !== 'undifined') {
      page.nextElementSibling.classList.add("page--current");
      page.classList.remove("page--current");
    }
  }
  layer[0].classList.add('revealer--animate');
  layer[0].addEventListener("animationend", removeAnimate);
  layer[0].addEventListener("webkitAnimationEnd", removeAnimate);
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
