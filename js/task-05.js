let answ = prompt('Введите страну доставки', ''),
  setMessage = (name, price) =>
    alert(`Доставка в ${name} будет стоить ${price} кредитов`);

answ = answ.toLowerCase();
switch (answ) {
  case 'китай':
    setMessage('Китай', 100);
    break;

  case 'чили':
    setMessage('Чили', 250);
    break;

  case 'австралия':
    setMessage('Австралия', 170);
    break;

  case 'индия':
    setMessage('Индия', 80);
    break;

  case 'ямайка':
    setMessage('Ямайка', 120);
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
