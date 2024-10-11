"use strict";

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
console.log(btn);
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
      btn.classList.replace("btn-Dark-model","btn-light-model" );
    // btn.classList.remove("btn-Dark-model");
    // btn.classList.add("btn-light-model");
    root.style.setProperty("--color-white", "white");
    root.style.setProperty("--color-dark-blue-1", "#03346E");
    isLight = true;
  }
});
