const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all fields!");
  } else {
    const formData = { email, password };
    console.log(formData);
    form.reset();
  }
};

form.addEventListener("submit", onFormSubmit);
