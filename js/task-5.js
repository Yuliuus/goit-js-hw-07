const changeColor = document.querySelector(".color");
const colorSpan = document.querySelector(".color");

changeColor.addEventListener("click", () => {
 const newColor = getRandomHexColor();
 document.body.style.backgroundColor = newColor;
 colorSpan.textContent = `${newColor}`;
}
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

