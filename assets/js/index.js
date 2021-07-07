const countDownDate = new Date('Aug 7, 2021 15:37:25').getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('mins').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
});








const questions = document.querySelectorAll(".qu");

questions.forEach(function (question) {
  const btn = question.querySelector("#btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("active");
      }
    });

    question.classList.toggle("active");
  });
});

const mains = document.querySelectorAll(".main-box");

mains.forEach(function (main) {
  const pre = main.querySelector("#pre");

  pre.addEventListener("click", function () {

    mains.forEach(function (item) {
      if (item !== main) {
        item.classList.remove("active");
      }
    });

    main.classList.toggle("active");
  });
});









//aos
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out',
});





//scroll navbar


const nav = document.getElementById('nav');



window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add('nav-color');
  } else {
    nav.classList.remove('nav-color');
  }
});