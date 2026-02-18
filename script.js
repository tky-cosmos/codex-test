const countElement = document.getElementById("count");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

const renderCount = () => {
  countElement.textContent = count;
};

incrementButton.addEventListener("click", () => {
  count += 1;
  renderCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  renderCount();
});
