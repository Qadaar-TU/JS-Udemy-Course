"use strict";

const modal = document.querySelector(".modal"); //das pop-up fenster
const overlay = document.querySelector(".overlay"); // backround verschwommen
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// wenn auf die "show modal gedrückt wird, erscheinen die modal fenster"
//diese sind ja im HTML da, aber hidden
//mit classlist manipulieren wir die klassen in HTML und entfernen
//dass hidden, damit es sichtbar wird
for (let index = 0; index < btnsOpenModal.length; index++)
  btnsOpenModal[index].addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//damit die Fenster mit x Wegklickbar sind
btnCloseModal.addEventListener("click", closeModal);

// damit man nicht nur aufs x drucken muss, sondern
// überall ins Blur reindrücken kann damit sich Modal schließt
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
