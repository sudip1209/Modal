"use strict";

// storing all class that are needed in a constant value
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

// declearing a variable that will open Modal this will help us for not reapeating the code
const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// declearing a variable that will close Modal this will help us for not reapeating the code
const closeModal = function () {
  console.log("button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// to add click event to all buttons
for (let i = 0; i < btnsOpenModel.length; i++)
  //   btnsOpenModel[i].addEventListener('click', function () {
  //     console.log('button clicked');
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
  btnsOpenModel[i].addEventListener("click", openModal);

//close the model
btnCloseModel.addEventListener("click", closeModal);

// btnCloseModel.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// this will close the modal if we click outside the modal
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

overlay.addEventListener("click", closeModal);

//for knowing which key is pressing
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  //use of escape key
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
