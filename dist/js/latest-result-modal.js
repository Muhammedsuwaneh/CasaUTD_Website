const modal = document.querySelector(".result-wrapper");
const modalContent = document.querySelector(".modal-content");
const resultBtn = document.getElementById("btn-result");
const closeBtn = document.querySelector("#modal-close");

const modalContainer = document.querySelector(".modal-container");

resultBtn.addEventListener("click", function () {
  modal.classList.add("visible");
  modalContent.style.display = "block";
  modalContent.classList.add("modal-items");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("visible");
  modal.classList.remove("modal-items");
  modalContent.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === modalContainer ) {
    modal.classList.remove("visible");
    modal.classList.remove("modal-items");
    modalContent.style.display = "none";
  }
};
