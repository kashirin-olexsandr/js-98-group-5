//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

// let min = 16;

// if (min >= 0 && min <= 15) {
//     console.log('відноситься до 1 частини');
// } else if (min > 15 && min <= 30) {
//     console.log('відноситься до 2 частини');
// } else if (min > 30 && min <= 45) {
//     console.log('відноситься до 3 частини');
// } else {
//     console.log('відноситься до 4 частини');
// }

//~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = "2";
// let result = "";

// switch (Number(num)) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";

//     break;

//   default:
//     result = "invalid";
//     break;
// }

// // console.log(result);

//~ Створи функцію logNumbers яка приймає число і логує від 0 і до цього числа
//~ скористаємося циклом while
// function logNumbers(num) {
//   let i = 0;
//   while (i <= num) {
//     console.log((i = i + 1));

//     // return i;
//   }
// }
// console.log(logNumbers(20));


//~ Створи функцію logNumbers яка приймає min і max
//~і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max
// Hello world

function logNumbers(min, max) {
  let sum = 0;

  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(logNumbers(10, 20));

// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
