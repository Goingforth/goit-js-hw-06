let counterValue = 0;
const visualValueCounter = document.querySelector("#value");
const rewriteValueCounter = (counterValue) =>
  (visualValueCounter.textContent = counterValue);

const decremBtn = document.querySelector('button[data-action="decrement"]');
const incremBtn = document.querySelector('button[data-action="increment"]');
decremBtn.addEventListener("click", () => {
  counterValue -= 1;
  rewriteValueCounter(counterValue);
});
incremBtn.addEventListener("click", () => {
  counterValue += 1;
  rewriteValueCounter(counterValue);
});
