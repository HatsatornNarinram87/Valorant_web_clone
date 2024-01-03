const headerINfoBtn = document.getElementById("headerInfoBtn");
const blackDot = document.getElementById("blockDot");
const hoverMark = document.getElementById("hoverMark");
const menuLeft = document.querySelectorAll("#menuLeft > li");

headerINfoBtn.addEventListener("mouseover", () => {
  blackDot.style.backgroundColor = "#fff";
  hoverMark.style.left = "102%";
});
headerINfoBtn.addEventListener("mouseout", () => {
  blackDot.style.backgroundColor = "#111";
  hoverMark.style.left = "-5%";
});

menuLeft.forEach(function (liElement) {
  let i = 0;
  let dropdownMenu = liElement.querySelectorAll(".menu_left--dropdown");
  if (dropdownMenu.length != 0) {
    console.log("Found dropdown menu: ", dropdownMenu[0]);
    liElement.addEventListener("mouseover", () => {
      dropdownMenu[0].style.display = "block";
    });
    liElement.addEventListener("mouseout", () => {
      dropdownMenu[0].style.display = "none";
    });
  }
  i++;
});
