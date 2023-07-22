 const greatestCommonDivisor = (num1, num2) => {
    let result = 0;
    if(num1 > num2) {
        result = num1 - num2;
    } else if(num2 > num2) {
            result = num2 - num1;
       }
    return result;
}
console.log(greatestCommonDivisor(24, 36));
console.log(greatestCommonDivisor(36, 24));
console.log(greatestCommonDivisor(36, 36));
console.log(greatestCommonDivisor(24, 24));
console.log(greatestCommonDivisor(24, 12));