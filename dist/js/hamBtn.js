const ham = document.getElementById("hamBtn");
const cart = document.getElementById("cart");
const icon = document.getElementById("cart-icon");
let oldScrollY = window.scrollY;
let cartTop = cart.offsetTop;

const mobileScroll = () => {
  if (oldScrollY < window.scrollY) {
    ham.classList.add("opacity-0");
  } else {
    ham.classList.remove("opacity-0");
  }
  oldScrollY = window.scrollY;
};

const cartScroll = () => {
  let currentScroll =
    window.pageYOffset + 40 || document.documentElement.scrollTop; // add the top so it doesn't jump

  if (currentScroll >= cartTop) {
    // apply position: fixed if you
    cart.classList.add("fixed", "text-mocha");

    icon.classList.add("fa-beat-fade");
  } else {
    // apply position: static
    cart.classList.remove("fixed", "text-mocha"); // if you scroll above it
    icon.classList.remove("fa-beat-fade");
  }
};
window.onscroll = function (e) {
  mobileScroll();
  cartScroll();
};
