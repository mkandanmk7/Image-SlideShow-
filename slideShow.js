let images = [
  "/assets/cat1.jpg",
  "/assets/cat2.jpg",
  "/assets/cat3.jpg",
  "/assets/cat4.jpg",
  "/assets/cat5.jpg",
  "/assets/cat6.jpg",
  "/assets/cat7.jpg",
  "/assets/cat8.jpg",
  "/assets/cat9.jpg",
  "/assets/cat10.jpg",
];
let i = 0;

let img = document.querySelector("#image");
img.src = images[6];
function playImage() {
  i++;
  if (i >= images.length) {
    //if last pic reached again go for first pic.
    i = 0;
  } else if (i < 0) {
    //if i=negative show last pic.
    i = images.length - 1;
  }
  img.src = images[i];
}
let active = setInterval(playImage, 1000 * 2);
function hover() {
  clearInterval(active);
}

function unhover() {
  active = setInterval(playImage, 1000 * 2);
}
function forward(boolean) {
  if (boolean == true) {
    i++;
    console.log("true");
    if (i == images.length) {
      i = 0;
    }
    img.src = images[i];
  }
}

function backward(boolean) {
  if (boolean === false) {
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
    img.src = images[i];
  }
}

// setInterval();
