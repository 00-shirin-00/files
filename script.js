const sliderEl = document.querySelectorAll("#models div");

const removeClass = () => {
  for (let index = 0; index < sliderEl.length; index++) {
    sliderEl[index].classList.remove("activ");
  }
};

for (let index = 0; index < sliderEl.length; index++) {
    sliderEl;[index].addEventListener("click", () => {
        removeClass();
        // for disable other activ class
        sliderEl[index].classList.toggle("activ");
    })
}
