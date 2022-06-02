// eslint-disable-next-line strict
console.log('DOM');

// set-ExecutionPolicy RemoteSigned -Scope CurrentUser
// Get-ExecutionPolicy
// Get-ExecutionPolicy -list

const div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
const textNode = document.createTextNode('А вот и я');
document.body.append(div);
