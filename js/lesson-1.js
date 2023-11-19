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

const num = "2";
let result = "";

switch (Number(num)) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "літо";
    break;
  case 4:
    result = "осінь";

    break;

  default:
    result = "invalid";
    break;
}

// console.log(result);
