const fizzBuzz = (number) => {
    const isDivisbleBy3 = (number % 3) === 0;
    const isDivisbleBy5 = (number % 5) === 0;

    if (isDivisbleBy3 && isDivisbleBy5) {
        return "FizzBuzz";
    }

    if (isDivisbleBy3) {
        return "Fizz";
        }
    
    if (isDivisbleBy5) {
        return "Buzz";
    }

return number 

};
    
module.exports = fizzBuzz;
