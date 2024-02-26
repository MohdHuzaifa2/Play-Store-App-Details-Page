let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let slideshow = document.querySelector(".slideshow");
let topBtn = document.querySelector(".top-btn");
let overlay = document.querySelector(".overlay");
let screenshots = document.querySelectorAll(".screenshots");
let images = ["assets/img/1.jpg","assets/img/2.jpg","assets/img/3.jpg","assets/img/4.jpg"];
let index = 0;

function showImage(index) {
    slideshow.src = images[index];
    if (index == 0) {
        leftBtn.style.display = "none";
    } else {
        leftBtn.style.display = "flex";
    }
    if (index == (images.length-1)) {
        rightBtn.style.display = "none";
    } else {
        rightBtn.style.display = "flex";
    }
}

Array.from(screenshots).forEach(image => image.onclick = function() {
    showImage(images.indexOf(image.getAttribute("src")))
    overlay.classList.add("active");
})
// Close button functionality
leftBtn.addEventListener("click", function() {
    showImage(images.indexOf(slideshow.getAttribute("src")) - 1);
})
rightBtn.addEventListener("click", function() {
    showImage(images.indexOf(slideshow.getAttribute("src")) + 1);
})
topBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
})