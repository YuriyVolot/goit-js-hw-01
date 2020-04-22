let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let numberOfDrones = prompt('Какое количество дронов Вы хотите преобрести?');
if (numberOfDrones === null) {
  console.log('Отменено пользователем!');
} else if (numberOfDrones === '0') {
  alert(`Вы ничего не купили. на счету ${credits}кредитов`);
} else {
  totalPrice = Number(numberOfDrones) * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    alert(
      `Вы купили ${numberOfDrones} дроидов, на счету осталось ${credits}кредитов.`,
    );
  }
}
