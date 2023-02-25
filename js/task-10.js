function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  number: document.querySelector("input"),
  onBtnCreate: document.querySelector("button[data-create]"),
  onBtnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = () => {
  const amount = Number(refs.number.value);
  const newBoxes = [];
  let baseSize = 30;

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");

    newBox.style.width = `${baseSize}px`;
    newBox.style.height = `${baseSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    newBoxes.push(newBox);

    baseSize += 10;
  }

  refs.boxes.append(...newBoxes);
};

const destroyBoxes = () => {
  while (refs.boxes.firstChild) {
    refs.boxes.removeChild(boxes.firstChild);
  }
  refs.number.value = "";
};

refs.onBtnCreate.addEventListener("click", createBoxes);

refs.onBtnDestroy.addEventListener("click", destroyBoxes);
