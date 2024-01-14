/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const swapButton = document.querySelector("#swapButton");
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");

swapButton.addEventListener("click", handleClick);
function handleClick() {
  const valueLeft = leftSwapInput.value;
  const valueRight = rightSwapInput.value;
  console.log(leftSwapInput.value);
  leftSwapInput.value = valueRight;
  rightSwapInput.value = valueLeft;
}
