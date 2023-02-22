function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  onChangeColor: document.querySelector("button.change-color"),
  infoChangeColor: document.querySelector("span.color"),
};

const changeBackgroundColor = () => {
  const randomHexColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomHexColor;
  refs.infoChangeColor.textContent = randomHexColor;
};

refs.onChangeColor.addEventListener("click", changeBackgroundColor);
