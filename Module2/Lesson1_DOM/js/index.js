'use strict';

const listDiv = document.querySelectorAll('div');
listDiv[7].remove();


const itemsList = document.getElementsByClassName('item');

itemsList[3].after(itemsList[0]);

const itemTitles = document.getElementsByClassName('item__title');
itemTitles[0].after(itemTitles[3]);


const itemImages = document.getElementsByClassName('item__image');
itemImages[4].after(itemTitles[4]);
itemImages[5].after(itemTitles[0]);


const propsItemsTwo = document.querySelectorAll('.props__item_two');
const propsItemsFour = document.querySelectorAll('.props__item_four');

propsItemsFour[3].after(propsItemsFour[0]);
propsItemsTwo[7].after(propsItemsTwo[8]);
propsItemsTwo[8].after(propsItemsTwo[9]);


const propsLists = document.querySelectorAll('.props__list');

propsLists[2].before(propsLists[4]);
itemTitles[3].after(propsLists[2]);

const elem = document.createElement('h2');
const text = document.createTextNode('this и прототипы объектов');
elem.append(text);
itemTitles[1].replaceWith(elem);