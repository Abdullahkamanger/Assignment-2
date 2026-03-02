const img = document.getElementById("image");
const showBtn = document.getElementById("showImage");
const hideBtn = document.getElementById("hideImage");
showBtn.addEventListener("click", () => {
    img.style.display = "block";
    hideBtn.style.display = "block";
    showBtn.style.display = "none";
})

hideBtn.addEventListener("click", () => {
    img.style.display = "none";
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
})