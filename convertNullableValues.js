const convertNullableValues = (obj) => {
    const newObj = {};
    for(let key in obj){
        if (obj[key] === null){
            newObj[key] = 0;
            } else if (obj[key] === undefined){
                newObj[key] = '';
                } else {
                    newObj[key] = obj[key];
                    }
                 }
                    return newObj;
             }

console.log(convertNullableValues({a: null, b: 1, c: undefined, d: 4}));
console.log(convertNullableValues({a: null, b: 1, c: undefined, d: 4, e: null, f: undefined}));
