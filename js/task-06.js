const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

const onInputChangeColorBorder = (event) => {
  switch (event.currentTarget.value.trim().length) {
    case 0:
      event.currentTarget.classList.remove("valid", "invalid");
      break;
    case inputLength:
      event.currentTarget.classList.contains("invalid")
        ? event.currentTarget.classList.replace("invalid", "valid")
        : event.currentTarget.classList.add("valid");
      break;
    default:
      event.currentTarget.classList.contains("valid")
        ? event.currentTarget.classList.replace("valid", "invalid")
        : event.currentTarget.classList.add("invalid");
  }
};

input.addEventListener("blur", onInputChangeColorBorder);
