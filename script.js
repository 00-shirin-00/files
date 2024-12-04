"use strict";
// -----------menu >> ---------------------------
const flash_icon_menu = document.querySelector("img.flash-icon");
const ul = document.querySelector("nav ul");
let isMenuClose = true;
//header >>
const header = document.querySelector("header h2");

console.log(header);
resize(); //فراخوانی تابع تغییر سایز

// --استفاده از resize برای هر بار تغییر سایز عرض صفحه
window.addEventListener("resize", () => {
  resize();
});

// تابع تغییر سایزکل صفحه >>
function resize() {
  //وقتی صفحه بزرگ باشه >>
  if (window.innerWidth > 768) {
    ul.classList.remove("two");
    ul.classList.add("one");
    flash_icon_menu.style.display = "none";
    // وقتی صفحه کوچیک میشه >>
  } else if (window.innerWidth < 767) {
    ul.style.display = "none";
    ul.classList.remove("one");
    flash_icon_menu.style.display = "block";
 
    // header >>
   header.style.fontSize = "1.6rem";
     header.style.lineHeight = "1.5";  // Correct way to set lineHeight
     header.style.paddingLeft = "3rem"; // Correct way to set paddingLeft

    // (header.style.fontSize = "1.6rem"), lineHeight='1rem',paddingLeft='3rem';
  }
  console.log("عرض: " + window.innerWidth + ", ارتفاع: " + window.innerHeight);
}

//کلیک کردن روی ایکون فلش صورتی >>
flash_icon_menu.addEventListener("click", () => {
  // اگر زیر منو بسته بود > بازش کن >>
  if (isMenuClose) {
    ul.style.display = "flex";
    ul.classList.add("two");
    flash_icon_menu.style.transform = "rotate(-120deg)";
    isMenuClose = false;
    console.log("open");

    //اگر باز بود > ببندش >>
  } else {
    ul.classList.remove("two");
    ul.style.display = "none";
    flash_icon_menu.style.transform = "rotate(160deg)";
    isMenuClose = true;
    console.log("close");
  }
});

// -----------slider model >> ---------------------------
const sliderEl = document.querySelectorAll("#models div");

const removeClass = () => {
  for (let index = 0; index < sliderEl.length; index++) {
    sliderEl[index].classList.remove("activ");
  }
};

for (let index = 0; index < sliderEl.length; index++) {
  sliderEl[index].addEventListener("click", () => {
    removeClass();
    // for disable other activ class
    sliderEl[index].classList.toggle("activ");
  });
}

// ---------------Dark and light mode >>---------------------
const text = document.querySelector("section#collection h2");
const btn = document.querySelector("#button");
const root = document.querySelector(":root");
let isLight = true;
// console.log(btn);
btn.addEventListener("click", () => {
  if (isLight) {
    text.style.setProperty("color", "white");
    btn.classList.replace("btn-light-model", "btn-Dark-model");
    // btn.classList.remove("btn-light-model");
    // btn.classList.add("btn-Dark-model");
    btn.textContent = "light";
    root.style.setProperty("--color-white", "#03346E");
    root.style.setProperty("--color-dark-blue-1", "white");
    isLight = false;
  } else {
    text.style.setProperty("color", "black");
    btn.textContent = "Dark";
    console.log("Button clicked!");
    btn.classList.replace("btn-Dark-model", "btn-light-model");
    // btn.classList.remove("btn-Dark-model");
    // btn.classList.add("btn-light-model");
    root.style.setProperty("--color-white", "white");
    root.style.setProperty("--color-dark-blue-1", "#03346E");
    isLight = true;
  }
});
