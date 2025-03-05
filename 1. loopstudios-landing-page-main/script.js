const menuIcon = document.querySelector(".menu-icon");
const hiddenSidbar = document.querySelector(".hiden-sidebar");
const body = document.querySelector("body");
const close = document.querySelector(".close");



menuIcon.addEventListener("click", () => {
    hiddenSidbar.classList.add("toggle")
    body.style.overflow = "hidden"
})
close.addEventListener("click", () => {
    hiddenSidbar.classList.remove("toggle")
    body.style.overflow = "scroll"
})