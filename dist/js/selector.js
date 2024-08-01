const header = document.getElementById("menuHeader");
const pic = document.querySelectorAll(".menuPic");
const selector = document.getElementById("selectorList");
const selectorList = selector.querySelectorAll("li");
const grid = document.getElementById("gridSection");

const menu = [
  {
    id: "Vegan",
    menuItems: [
      "images/vegan.jpeg",
      "images/vegan2.jpeg",
      "images/vegan.jpeg",
      "images/vegan2.jpeg",
      "images/vegan.jpeg",
      "images/vegan2.jpeg",
    ],
  },
  {
    id: "Weekly",
    menuItems: [
      "images/weekly.jpeg",

      "images/weekly2.jpeg",

      "images/weekly.jpeg",

      "images/weekly2.jpeg",

      "images/weekly.jpeg",

      "images/weekly2.jpeg",
    ],
  },
  {
    id: "Bread",
    menuItems: [
      "images/bread.jpeg",

      "images/bread2.webp",

      "images/bread.jpeg",

      "images/bread2.webp",

      "images/bread.jpeg",

      "images/bread2.webp",
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
        item.classList.add("bg-salmon");
      } else {
        item.classList.remove("bg-salmon");
      }
    });

    const pics = menu.find(({ id }) => id === header.innerText).menuItems; // find the style for the menu btn pressed

    pic.forEach((item, index) => {
      item.classList.add("-translate-x-[350px]", "opacity-0"); // transition animation
      let timer = index * 50; // used to stagger the animation

      setTimeout(function () {
        item.classList.remove("-translate-x-[350px]"); // transition animation

        item.classList.add("translate-x-[350px]"); // transition animation

        item.src = pics[index - 1]; // the index has 7 items... idk why

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
