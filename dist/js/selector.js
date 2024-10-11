const header = document.getElementById("menuHeader");
const pic = document.querySelectorAll(".menuPic");
const caption = document.querySelectorAll(".menuCaption");
const selector = document.getElementById("selectorList");
const selectorList = selector.querySelectorAll("li");
const grid = document.getElementById("gridSection");

const menu = [
  {
    id: "Vegan",
    menuItems: [
      "images/yummyPastry.webp",

      "images/yummyPastry.webp",

      "images/yummyPastry.webp",

      "images/yummyPastry.webp",

      "images/yummyPastry.webp",

      "images/yummyPastry.webp",
    ],
  },
  {
    id: "Weekly",
    menuItems: [
      "images/crossiant.png",

      "images/crossiant.png",

      "images/crossiant.png",

      "images/crossiant.png",

      "images/crossiant.png",

      "images/crossiant.png",
    ],
  },
  {
    id: "Bread",
    menuItems: [
      "images/pastry.webp",

      "images/pastry.webp",

      "images/pastry.webp",

      "images/pastry.webp",

      "images/pastry.webp",

      "images/pastry.webp",
    ],
  },
  {
    id: "Empanadas",
    menuItems: [
      "images/empanada.jpeg",

      "images/empanada2.jpeg",

      "images/empanada.jpeg",

      "images/empanada2.jpeg",

      "images/empanada.jpeg",

      "images/empanada2.jpeg",
    ],
  },
];

const handleChange = (e) => {
  // only run function if we are selecting a different category
  if (header.innerText !== e.target.innerText) {
    header.innerText = e.target.innerText; // set the header to the category we selected

    // change the bg color for the selected button and remove the bg color from the unslected items
    selectorList.forEach((item) => {
      if (item.innerText === header.innerText) {
        item.classList.remove("border-tan");
        item.classList.add("border-mocha");
      } else {
        item.classList.remove("border-mocha");
        item.classList.add("border-tan");
      }
    });

    const pics = menu.find(({ id }) => id === header.innerText).menuItems; // find the style for the menu btn pressed
    let count = 0;
    console.log(pic);
    pic.forEach((item, index) => {
      count++;
      console.log(count);
      item.classList.add("-translate-x-[350px]", "opacity-0"); // transition animation
      let timer = index * 50; // used to stagger the animation

      setTimeout(function () {
        item.classList.remove("-translate-x-[350px]"); // transition animation

        item.classList.add("translate-x-[350px]"); // transition animation

        item.src = pics[index - 1]; // since index starts at 1s
        // console.log(caption[index]);

        setTimeout(function () {
          item.classList.remove("translate-x-[350px]", "opacity-0"); // transition animation
        }, 120);
      }, 100 + timer);
    });
  } else {
    return 0;
  }
};

selectorList.forEach((item) => item.addEventListener("click", handleChange));
