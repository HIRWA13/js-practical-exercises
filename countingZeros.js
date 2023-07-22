const countingZeros = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let numStr = i.toString();
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j] === "0") {
        count++;
                  }
             }
        }
        return count;
    };
// test cases
console.log(countingZeros(10));
console.log(countingZeros(100));
console.log(countingZeros(200));
console.log(countingZeros(400));
        


