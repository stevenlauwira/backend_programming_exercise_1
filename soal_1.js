prima = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
limitPrima=(limit)=> {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        if (prima(num)) {
            primes.push(num);
        }
    }
    return primes;
}

const limit = 1000;
const primeNumbers = limitPrima(limit);

console.log(`Bilangan prima dari 1 hingga ${limit} adalah:`);
console.log(primeNumbers);
