'use strict'

/// Function for getting power to 10
const getPower = () => {
    for (let i = 1; i <= 10; i++) {
        console.log('-------------------');
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} = ${i ** j}`);
        }
    }
};

getPower();