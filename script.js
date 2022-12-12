const remainingEl = document.getElementById("liters");
const remainedDivEl = document.getElementById("remained");
const percentageEl = document.getElementById("percentage");

const smallCups = document.querySelectorAll(".small-cup");
let remaining = 2;
const cupSize = 0.25;
let percentage = 0;

remainingEl.textContent = `${remaining}L`;
remainingEl.nextElementSibling.textContent = "Remained";

smallCups.forEach((cup, ind) => {
  cup.addEventListener("click", (e) => {
    if (!cup.classList.contains("full")) {
      for (let index = 0; index <= ind; index++) {
        if (!smallCups[index].classList.contains("full")) {
          smallCups[index].classList.add("full");
        }
      }
    } else {
      for (let index = ind; index < smallCups.length; index++) {
        smallCups[index].classList.remove("full");
      }
    }
    const selectedCups = document.querySelectorAll(".small-cup.full");
    const remainingLiters = remaining - selectedCups.length * cupSize;
    const percentageCurrent = (selectedCups.length / smallCups.length) * 100;
    if (remainingLiters !== 0) {
        remainedDivEl.style.visibility = 'visible'
      remainingEl.textContent = `${remainingLiters}L`;
      remainingEl.nextElementSibling.textContent = "Remained";
    } else {
        remainedDivEl.style.visibility = 'hidden'
    }
    if (percentageCurrent !== 0) {
      percentageEl.textContent = `${percentageCurrent}%`;
      percentageEl.style.height = `${percentageCurrent}%`;
    } else {
      percentageEl.textContent = ``;
      percentageEl.style.height = "0";
    }
  });
});
