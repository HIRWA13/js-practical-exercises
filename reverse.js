const reverseStr = (str)=> {
    const newStr = str.split(' ');
    const reversed = [];
    for(let i = 0; i < newStr.length; i++) {
       reversed.push(newStr[i].split('').reverse().join(""));
    }
    console.log(reversed.join(" "));
}
reverseStr("I am the good boy");