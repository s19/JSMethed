'use strict'

const getLeapYears = (start, end) => Array
    .from({ length: end - start + 1 }, (n, i) => start + i)
    .filter(n => ((n % 100) && !(n % 4)) || !(n % 400));

console.log(getLeapYears(1888, 2022));