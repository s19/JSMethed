'use strict'

const allStud = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const filedStud = ['Сидоров','Смирнов','Попов'];

const getfilterувStudents = ([...allStud], [...filedStud]) => {
    for (const key in filedStud) {
        if (allStud.includes(filedStud[key])) 
        allStud.splice(allStud.indexOf(filedStud[key]), 1);
    }
    return allStud;
}

console.log(getfilterувStudents(allStud, filedStud));