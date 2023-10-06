"use strict;";

const domGrid = document.getElementById("domGrid");
const domNumber = document.getElementById("domNumber");
const domNumberBtn = document.getElementById("domNumberBtn");
const domResetBtn = document.getElementById("domResetBtn");

domNumberBtn.addEventListener("click", getBoxes);
domResetBtn.addEventListener("click", resetBoxes);

function getBoxes() {
  const numberIsValid = !domNumber.value || isNaN(domNumber.value) || domNumber.value <= 0 || domNumber.value > 100;
  if (numberIsValid) {
    alert("Error... Max number 100, Min number 1.");
    return;
  }

  for (let i = 1; i <= parseInt(domNumber.value); i++) {
    const domBox = document.createElement("div");

    if (i % 5 === 0 && i % 3 === 0) {
      domBox.innerHTML = "fizzbuzz";
      domBox.classList.add("bg-[#f0466f]", "box");
      domGrid.append(domBox);
    } else if (i % 3 === 0) {
      domBox.innerHTML = "fizz";
      domBox.classList.add("bg-[#0cd6a1]", "box");
      domGrid.append(domBox);
    } else if (i % 5 === 0) {
      domBox.innerHTML = "buzz";
      domBox.classList.add("bg-[#ffd166]", "box");
      domGrid.append(domBox);
    } else {
      domBox.innerHTML = i;
      domBox.classList.add("bg-[#1389b2]", "box");
      domGrid.append(domBox);
    }
  }
  return;
}

function resetBoxes() {
  domGrid.innerHTML = "";
  return;
}
