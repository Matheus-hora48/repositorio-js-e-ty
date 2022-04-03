function fizzBuzz(num) {
  if (typeof num !== 'number') {
    return num
  }
  if (num % 5 == 0 && num % 3 == 0) {
    return 'FizzBuzz'
  } else if (num % 5 == 0) {
    return 'Fizz'
  } else if (num % 3 == 0) {
    return 'Buzz'
  } else {
    return num
  }
}




let numero = fizzBuzz(1)

console.log(numero)
