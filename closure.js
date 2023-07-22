const createCounter = () => {
    let count = 0;
    const counter = () => {
        count++
         return count;
    }
    return {
        counter
    }
}
let result = createCounter();
console.log(result.counter());
console.log(result.counter());
console.log(result.counter());
console.log(result.counter());
