const ADMIN_PASSWORD = 'jqueryismyjam';
let massage = prompt('Введите пароль:');

if (massage === null) {
  massage = 'Отменено пользователем!';
} else if (massage === ADMIN_PASSWORD) {
  massage = 'Добро пожаловать!';
} else {
  massage = 'Доступ запрещён, неверный пароль!';
}

alert(massage);
