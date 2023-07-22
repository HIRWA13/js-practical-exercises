const arraySats= (array) => {
    const obj = new Object();
    // we need to calcuate the sum, average, min and max value in 
    // the array and those information will be diplayed in the array.
    const length = array.length
    const sum = array.reduce((total, item) => total + item, 0)
    const average = parseFloat(sum / length);
    const sorted = array.sort((a, b) => a - b);
    const min = sorted[0]
    const max = sorted[sorted.length - 1];
    
    // add our elements in the object:
    obj.sum = sum;
    obj.average = Number(average.toFixed(2))
    obj.min = min;
    obj.max = max;
    return obj;
}
console.log(arraySats([1, 2, 3, 4, 5]));