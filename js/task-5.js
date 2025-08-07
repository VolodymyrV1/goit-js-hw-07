const colorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector("span.color");

colorButton.addEventListener("click", handleClick);


function handleClick() {
  const getColor = getRandomHexColor();
  body.style.backgroundColor = getColor;
  spanColor.textContent = getColor;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
