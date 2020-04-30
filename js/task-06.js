let total = 0;

while (true) {
  let imput = prompt('Введите число:', '');

  if (imput === null) {
    alert('Отменено пользователем.');
    break;
  }

  imput = Number(imput);
  const notANumber = Number.isNaN(imput);

  if (notANumber) {
    alert('Введено не число, текущая итерация будет пропущена!');
    continue;
  }
  total += imput;
}

alert(`Общая сумма чисел = ${total}`);
