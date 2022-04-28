'use strict';

{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = ([...allСashbox]) => {
        let sum = 0;
        for (let i = 0; i < allСashbox.length; i++) {
            sum += allСashbox[i];
        }
        return Math.floor(sum / allСashbox.length);
    }

    console.log(getAverageValue(allСashbox));
}