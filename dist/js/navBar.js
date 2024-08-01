const navList = document.getElementById("navList");
const btn = document.getElementById("hamBtn");
const body = document.querySelector("body");
const overlay = document.getElementById("overlay");
const navLinks = navList.querySelectorAll("li");

const clickHandler = () => {
  btn.classList.toggle("fa-rotate-90");
  btn.classList.toggle("text-tan");
  body.classList.add("overflow-hidden");

  if (overlay.classList.contains("top-[-1000px]")) {
    overlay.classList.remove("top-[-1000px]");
    overlay.classList.add("top-0");
    body.classList.remove("overflow-hidden");
  } else {
    overlay.classList.remove("top-0");
    overlay.classList.add("top-[-1000px]");
    body.classList.remove("overflow-hidden");
  }
};

btn.addEventListener("click", clickHandler);

navLinks.forEach((link) => {
  link.addEventListener("click", clickHandler);
});
