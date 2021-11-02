// IIFEs starts here
{
  // Access DOM elements
  const boxes = document.querySelectorAll(".box");
  const showcase = document.querySelector("#showcase");
  const images = document.querySelectorAll(".img");

  // set current index to zero
  let currentIndex = 0;

  // convert nodelist to an array
  const newImages = Array.from(images);

  // get image size
  const imageSize = newImages[0].clientWidth;

  // hide all elements and except first
  var display = () => {
    for (const current of newImages) {
      if (current.className.includes("img-1")) {
        continue;
      }
      current.style.display = "none";
    }
  };

  // show hidden images with colored boxes by index
  var slideImages = () => {
    currentIndex++;

    if (currentIndex > boxes.length) {
      currentIndex = 1;
    }

    // remove previous box
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("current-box");
    }

    // remove previous image
    for (var i = 0; i < newImages.length; i++) {
        newImages[i].style.display = 'none';
    }

    boxes[currentIndex - 1].classList.add("current-box");
    newImages[currentIndex].style.display = "block";

    setTimeout(slideImages, 5000);
  };

  slideImages();
} // IIFEs ends here
