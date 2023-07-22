const removeDuplicates = (array) => {
    const nonDuplicateArr = [];
    for(let i = 0; i < array.length; i++){
        if(!nonDuplicateArr.includes(array[i])){
            nonDuplicateArr.push(array[i]);
        }
    }
    return nonDuplicateArr;
}
console.log(removeDuplicates([1, 2, 2, 4, 5, 6,7, 7, 8, 1, 2]));