'use strict'

/// Function for getting power to 10
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

/// Let's check from 1 to 5
{
    for (let i = 1; i <= 5; i++) {
        let txt = isPrime(i) == true ? "prime" : "not prime";
        console.log(`${i} - ${txt}`)
    }
}
