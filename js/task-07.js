const inputFontSize = document.querySelector("#font-size-control");
const textСhangeSize = document.querySelector("#text");

const changeFontSize = () => {
  textСhangeSize.style.fontSize = inputFontSize.value + "px";
};

changeFontSize();

inputFontSize.addEventListener("input", changeFontSize);
