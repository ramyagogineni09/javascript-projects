let imageList = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  sliderImage.src = imageList[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  sliderImage.src = imageList[currentIndex];
});
