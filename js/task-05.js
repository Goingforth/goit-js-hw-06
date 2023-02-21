const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  refs.output.textContent =
    refs.input.value != "" ? event.currentTarget.value : "Anonymous";
};

refs.input.addEventListener("input", onInputChange);
