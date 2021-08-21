const arrows = document.querySelectorAll(".arrow");
const underscores = document.querySelectorAll(".underscore");
const images = document.querySelectorAll(".imageContainer");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const links = document.querySelectorAll("a");
let currentSlide = 0;
const changeCurrentImage = () => {
  images.forEach((image, i) => {
    image.style.transform = `translate(${(i - currentSlide) * 4000}px)`;
  });
};
const intervalFunc = () => {
  underscores[currentSlide].classList.remove("active");
  currentSlide = currentSlide < 2 ? currentSlide + 1 : 0;
  underscores[currentSlide].classList.add("active");
  changeCurrentImage();
};
let id = setInterval(intervalFunc, 4000);
links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.href.split("#")[1];
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  })
);
arrows.forEach((arr) => {
  arr.addEventListener("click", (e) => {
    clearInterval(id);
    underscores[currentSlide].classList.remove("active");
    const left = e.target.dataset.value === "left";
    // const oldActive = currentSlide;
    if (left) {
      currentSlide = currentSlide > 0 ? currentSlide - 1 : 2;
    } else {
      currentSlide = currentSlide < 2 ? currentSlide + 1 : 0;
    }
    changeCurrentImage();
    id = setInterval(intervalFunc, 3000);
    underscores[currentSlide].classList.add("active");
  });
});
underscores.forEach((underscore) => {
  underscore.addEventListener("click", (e) => {
    clearInterval(id);
    underscores[currentSlide].classList.remove("active");
    currentSlide = parseInt(e.target.dataset.value) - 1;
    changeCurrentImage();
    id = setInterval(intervalFunc, 3000);
    underscores[currentSlide].classList.add("active");
  });
});

const timeFunc = () => {
  // console.log("here");
  const date_now = new Date();
  const date_future = new Date(2021, 8, 28);
  let delta = Math.floor((date_future - date_now) / 1000);
  const hours = Math.floor(delta / 3600);
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = Math.floor(delta % 60);
  // what's left is seconds
  // const seconds = Math.floor(delta % 60);
  hour.innerText = `${hours} hours`;
  second.innerText = `${seconds} seconds`;
  minute.innerText = `${minutes} minutes`;
};
timeFunc();
const id2 = setInterval(timeFunc, 1000);
// document.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     navbar.style.background = "rgba(255,255,255,0.5)";
//   } else {
//     navbar.style.background = "rgba(0,0,0,0.5)";
//   }
//   links.forEach((link) => link.classList.toggle("dark", window.scrollY > 10));
// });
