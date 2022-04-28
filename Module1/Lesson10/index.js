'use strict'

/// defineProperty
{
    const car = {
        car: 'mini',
        model: 'cooper',
        price: 30000,
        get comment() {
            return `Last comment: ${this.trueComment}`;
        },
        set comment(val) {
            if (typeof val === 'string') {
                this.trueComment = val;
            }                
        },
        trueComment: 'not',
    };

    // Object.define([
    //     'require',
    //     'dependency'
    // ], function(require, factory) {
    //     'use strict';
        
    // });

    Object.defineProperty(car, 'model', 
        {
            /// свойства обьекта, атрибут 'model' - флаги (дескрипторы)
            configurable: true, // конфигурировать
            enumerable: false, // перечислять 
            writable: false, // перезаписывать или удалять
        }
    );

    // Object.defineProperty(car, 'fullName', 
    //     {
    //         // получаем значения атрибутов обьекта
    //         get() {
    //             return `${this.car} ${this.model}`;
    //         },
    //         // записываем значения в атрибуты обьекта
    //         set(val) {
    //             if (typeof val === 'string') {
    //                 this.comment = val;
    //             }                
    //         }
    //     }
    // );

    //car.model = 'electric';
    ///delete car.model;

    // console.log(car.comment);
    // car.comment = 123;

    // console.log(car.comment);
    // car.comment = 'Super car!';
    
    // console.log(car.comment);

    // console.log(car);
    // console.log(Object.keys(car));
    // console.log(Object.values(car));
    // console.log(Object.entries(car));

    {
        /// Коллекции Map/Set
        /// WeakMap/WeakSet

        const Tor = {
            title: 'Thor',
            universe: 'Marvel',
        }

        const Hulk = {
            title: 'Hulk',
            universe: 'Marvel',
        }

        const Batman = {
            title: 'Batman',
            universe: 'DC',
        }


        const actors = new Map(); 
        const heroes = new Set();
        
        heroes.add('Hulk');
        heroes.add('SpiderMan');
        heroes.add('StarLord');
        heroes.add('Hulk');


        actors.set(Batman, 'Бен Афлек');
        actors.set(Tor, 'Крис Хемсворт');
        actors.set(Hulk, 'Марк Руфало');
        actors.set('SpiderMan', 'Тоби Магвайер');
        actors.set('Iron Man', 'Роберт Дауни-мл.');
        actors.set('Superman', 'Генри Кавил');        
        actors.set('Star Lord', 'Крис Прэтт');

        


        // console.log(actors.get('Hulk'));

        // console.log(actors.keys());
        // console.log(actors.values());
        // console.log(actors.entries());

        // /// Array
        // console.log([...actors.keys()]);
        // /// Array
        // console.log([...actors.values()]);
        // /// 2 dimension Array
        // console.log([...actors.entries()]);

        /// Array
        console.log([...heroes.keys()]);
        /// Array
        console.log([...heroes.values()]);
        /// 2 dimension Array
        console.log([...heroes.entries()]);

        console.log(heroes.has('SpiderMan'));

        //actors.delete('Iron Man');
        //actors.clear();
        //console.log(actors.size);

        // for (const [hero, actor] of actors) {
        //     console.log(`${actor} в роли ${hero}`);
        // }


        console.log(actors);

        /// MAP
        /// WeakMap может хранить данные только ссылочного типа
        /// итерировать нельзя
        /// has, delete, get
        //console.log(actorsMap);


        /// SET
        const arr = [1,2,3,3,3,7,1,7];
        console.log(heroes);
        console.log(Array.from(new Set(arr)));


        /// WeakSet может хранить структурные типы данных
        /// Не итерируется
        const heroesWeakSet = new WeakSet();
        
        heroesWeakSet.add(Hulk);
        heroesWeakSet.add(Batman);
        heroesWeakSet.add(Tor);
        heroesWeakSet.add(Hulk);

        /// spread
        heroesWeakSet.add({...Hulk});
        console.log(heroesWeakSet);


        /// Map - упорядоченные коллекции пары Ключ/Значение
        /// Set - упорядоченный список уникальных значений
    }

}