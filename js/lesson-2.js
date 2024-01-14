//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function totalSum(salaries) {
//   let totalSalary = 0;
//   const arraySalary = Object.values(salaries);
//   for (const item of arraySalary) {
//     totalSalary += item;
//   }
//   return totalSalary;
// }
// console.log(totalSum(salaries));

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта
// const arrey = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//   for (let i = 0; i < stones.length; i++) {
//     console.log(stones[i].name === stonesName);
//     if (stones[i].name === stonesName) {
//       return `${stonesName} costs: ${stones[i].price * stones[i].quantity}`;
//     }
//   }
// }
// console.log(calcTotalPrice(arrey, "Щебінь"));

//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку
const string = "Nunc sed turpis a felis in nunc fringilla";

function findLongestWord(string) {
  const arrWords = string.split(` `);
  console.log(arrWords);
  let maxWord = "";
  console.log(maxWord);
  for (const word of arrWords) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  return maxWord;
}
console.log(findLongestWord(string));
