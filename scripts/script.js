// Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, 
// а затем формировать карточки работников с полученной информацией.

const formElem = document.querySelector('.workers_form');
let workersArr = [];

formElem.addEventListener('submit', (event) => {
  event.preventDefault();
  const {firstname, lastname, age} = event.target; //this
  workersArr.push({
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
  })
  firstname.value = '';
  lastname.value = '';
  age.value = '';
  console.log(workersArr);
})
