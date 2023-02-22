const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

const onInputChangeColorBorder = () => {
  switch (input.value.trime().length) {
    case 0:
      input.classList.remove("valid", "invalid");
      break;
    case inputLength:
      input.classList.contains("invalid")
        ? input.classList.replace("invalid", "valid")
        : input.classList.add("valid");
      break;
    default:
      input.classList.contains("valid")
        ? input.classList.replace("valid", "invalid")
        : input.classList.add("invalid");
  }
};

input.addEventListener("blur", onInputChangeColorBorder);
