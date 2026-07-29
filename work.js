const gallery = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

gallery.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
  });
});

close.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
