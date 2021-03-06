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
