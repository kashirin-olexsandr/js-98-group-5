/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const swapButton = document.querySelector("#swapButton");
// const leftSwapInput = document.querySelector("#leftSwapInput");
// const rightSwapInput = document.querySelector("#rightSwapInput");

// swapButton.addEventListener("click", handleClick);
// function handleClick() {
//   const valueLeft = leftSwapInput.value;
//   const valueRight = rightSwapInput.value;
//   console.log(leftSwapInput.value);
//   leftSwapInput.value = valueRight;
//   rightSwapInput.value = valueLeft;
// }
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const input = document.querySelector('#passwordInput');
console.log(input);
const button = document.querySelector('#passwordButton');
console.log(button);

button.addEventListener('click', onBtnClick); 

function onBtnClick(e) {
  
  if (input.type === "text") {
    input.type = "password";
    button.textContent = "Розкрити";
  } else {
    input.type = "text";
    button.textContent = "Приховати";

  };

 
}




