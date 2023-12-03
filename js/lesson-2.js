//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
function totalSum(salaries) {
  let totalSalary = 0;
  const arraySalary = Object.values(salaries);
  for (const item of arraySalary) {
    totalSalary += item;
  }
  return totalSalary;
}
console.log(totalSum(salaries));
