'use strict';

const capitalize = str =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

const getFullName = ({firstName, surName}) =>
  `${capitalize(firstName)} ${capitalize(surName)}`;

const printFullName = arr => {
  arr.forEach(element =>
    void console.log(getFullName(element)));
};

const listPerson = [
  {
    firstName: 'сергей',
    surName: 'попов',
  },
  {
    firstName: 'михаИЛ',
    surName: 'ИВАнов',
  },
  {
    firstName: 'АНЖЕЛИКА',
    surName: 'ВАрум',
  },
];

// printFullName(listPerson);
