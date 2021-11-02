const modal = document.querySelector(".gallery-modal");
const closeBtn = document.querySelector(".fa-times-circle");
const modalContainer = document.querySelector(".gallery-modal-container");
const modalContent = document.querySelector(".gallery-modal-content");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// display modal
function display(value) {
  document.querySelector("#image-num").innerHTML = value + "/16";
  modal.style.display = "block";
  modalContent.classList.add("child-" + value);

  prev.addEventListener("click", function () {
    if (value === 1) {
      value = 17;
    }

    modalContent.classList.remove("child-" + value);
    value = value - 1;
    modalContent.classList.add("child-" + value);
    document.querySelector("#image-num").innerHTML = value + "/16";
  });

  next.addEventListener("click", function () {
    if (value === 16) {
      value = 0;
      removeAll();
    }

    modalContent.classList.remove("child-" + value - 1);
    value = value + 1;
    modalContent.classList.add("child-" + value);
    document.querySelector("#image-num").innerHTML = value + "/16";
  });
}

function hide() {
  modal.style.display = "none";
}

// remove all added classes
function removeAll() {
  modalContent.classList.remove("child-1");
  modalContent.classList.remove("child-2");
  modalContent.classList.remove("child-3");
  modalContent.classList.remove("child-4");
  modalContent.classList.remove("child-5");
  modalContent.classList.remove("child-6");
  modalContent.classList.remove("child-7");
  modalContent.classList.remove("child-8");
  modalContent.classList.remove("child-9");
  modalContent.classList.remove("child-10");
  modalContent.classList.remove("child-11");
  modalContent.classList.remove("child-12");
  modalContent.classList.remove("child-13");
  modalContent.classList.remove("child-14");
  modalContent.classList.remove("child-15");
  modalContent.classList.remove("child-16");
}

// close modal once close button gets clicked
closeBtn.addEventListener("click", function () {
  hide();
  removeAll();
});

// close modal when outside is clicked
window.onclick = function (event) {
  if (event.target == modalContainer || event.target == modal) {
    removeAll();
    this.hide();
  }
};

