let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let slideshow = document.querySelector(".slideshow");
let topBtn = document.querySelector(".top-btn");
let overlay = document.querySelector(".overlay");
let screenshots = document.querySelectorAll(".screenshots");
let images = ["https://play-lh.googleusercontent.com/tNuMAclO_TrRn5RbiSo2iU2ySljFaHjCIWoMUSoemUcl4FjTyVO0PpJZL_zTrYf7v_4=w1052-h592-rw","https://play-lh.googleusercontent.com/ijfSGQUCqeCmCQX0w_HjdSWkiYZoFk5JZ5CsxmGI-qT1VPT8V3wGohMBpWZOAp2o7A=w1052-h592-rw","https://play-lh.googleusercontent.com/Ck5x7vPWfgXoLvkGqVs5INzV3dzHMYYy4Jr6YVpXDTR-00p_V_kpGABtfXCp9qx10cs=w1052-h592-rw","https://play-lh.googleusercontent.com/ef3mz9xoDiwk08KB7B6oN0uSqJkxy8yMBwdOl9TGc3rSsOLdYBQlRZqMCduJjJyeBQ=w1052-h592-rw","https://play-lh.googleusercontent.com/8InPqYGQ-28qwt_mLmm6R3VzbMcf3ZSJNUxO_OJosyLRqPHeStZFtjKskgDvHkanfRUJ=w1052-h592-rw","https://play-lh.googleusercontent.com/Jt-ttCMUUkZ_-u8DS3MeRrzlWkup3trRGcJrpo5vSIGzxdBs3nk3GkNZ9wWG9zAkfA=w1052-h592-rw","https://play-lh.googleusercontent.com/GZc67XnRN0XxNTv1J4pTw79lMiQFYKGx5dDEYPEsMUWDgNnHnUoyHg76cn61M3QTwXC5=w1052-h592-rw","https://play-lh.googleusercontent.com/3VmrU-Se_cvnW6L_skAv6ZC2fut3Fl2XqoZPl74eROsw0gUl4ANSrh8D8M5W6-mSLBI=w1052-h592-rw","https://play-lh.googleusercontent.com/Lgz--QiIwM5jGw9rCGSMcvocR6ctLyNLdU52FQqNefybXhVhmcaj9Fh_S-QombddtoU5=w1052-h592-rw"];
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