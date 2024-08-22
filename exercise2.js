// Write a JavaScript function to check if a given number is prime or not.

function isPrime(num) {

  if(!typeof num === 'number')return 'Invalid input';

  if(num < 2) return false;
  for (let i = 2; i < num; i++) {
     if (num % i === 0) return false;
    }

  return true;
}

console.log(isPrime(11)); 