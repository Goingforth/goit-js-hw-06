const inputFontSize = document.querySelector("#font-size-control");
const textСhangeSize = document.querySelector("#text");

textСhangeSize.style.fontSize = inputFontSize.value + "px";

const changeFontSize = (event) => {
  textСhangeSize.style.fontSize = event.currentTarget.value + "px";
};

inputFontSize.addEventListener("input", changeFontSize);
