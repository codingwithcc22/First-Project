// Back to Top Button
const backToTopBtn = document.querySelector(".back_to_top");

window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 300);
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//click to enlarge image
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const portfolioImgs = document.querySelectorAll(".portfolio_logos img");

portfolioImgs.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("open");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
});