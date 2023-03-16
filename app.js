// define the selectors

const grid = document.querySelector(".grid");
const gridItems = [...document.querySelectorAll(".grid-item")];
const gridRows = [...document.querySelectorAll(".row")];
const images = [...document.querySelectorAll(".img")];
const heading = document.querySelector(".heading");
const info = [...document.querySelectorAll("h4")];

// use JS to apply the images, its JPG not JPEG
images.forEach((img, idx) => {
  img.style.backgroundImage = `url(/images/${idx + 1}.jpg)`;
});

// loop through all grid items
gridItems.forEach((item, idx) => {
  item.addEventListener("mouseover", (e) => {
    let isActive = e.target.classList.contains("active");
    console.log(e.target);
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].classList.remove("active");
    }

    // if the div that we clicked had active
    if (isActive) {
      gridRows[0].style.height = "50%";
      gridRows[1].style.height = "50%";
      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.remove("expand");
      }
      // stop here so it doesnt process anything else
      return;
    }

    gridItems[idx].classList.add("active");
    if (window.innerWidth > 600) {
      if (idx == 0 || idx == 3) {
        setActive[(0, 3)];
      }

      if (idx == 1 || idx == 4) {
        setActive[(1, 4)];
      }

      if (idx == 2 || idx == 5) {
        setActive[(2, 5)];
      }

      if (idx <= 2) {
        gridRows[0].style.height = "70%";
        gridRows[1].style.height = "30%";
      } else {
        gridRows[0].style.height = "30%";
        gridRows[1].style.height = "70%";
      }
    }
  });

  //CHAT GPT suggestion on the mouseout
  item.addEventListener("mouseout", (e) => {
    gridItems.forEach((item) => {
      item.classList.remove("active");
    });
    gridRows[0].style.height = "50%";
    gridRows[1].style.height = "50%";
    setActive([]);
  });
});

function setActive(idxArr) {
  for (let i = 0; i < gridItems.length; i++) {
    if (idxArr.includes(i)) {
      gridItems[i].classList.add("expand");
    } else {
      gridItems[i].classList.remove("expand");
    }
  }
}

//Time Stamp: 39:29
// Continuing with the expand class so both rows are affected

setTimeout(() => {
  heading.classList.add("show");
}, 500);

setTimeout(() => {
  grid.style.opacity = 1;
}, 1000);
