// define the selectors

const grid = document.querySelector(".grid");
const griditems = [...document.querySelectorAll(".grid-item")];
const gridRows = [...document.querySelectorAll(".row")];
const images = [...document.querySelectorAll(".img")];
const heading = document.querySelectorAll(".heading");

// use JS to apply the images, its JPG not JPEG
images.forEach((img, idx) => {
  img.style.backgroundImage = `url(/images/${idx + 1}.jpg)`;
});

// loop through all grid items
griditems.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    let isActive = e.target.classList.contains("active");
    for (let i = 0; i < griditems.length; i++) {
      griditems[i].classList.remove("active");
    }

    // if the div that we clicked had active
    if (isActive) {
      gridRows[0].style.height = "50%";
      gridRows[1].style.height = "50%";
      for (let i = 0; i < griditems.length; i++) {
        griditems[i].classList.remove("expand");
      }
      // stop here so it doesnt process anything else
      return;
    }

    griditems[idx].classList.add("active");
  });
});

//Time Stamp: 39:29
// Continuing with the expand class so both rows are affected
