
export const editFromObjectToArray = (object)=>{
    const arr = Object.entries(object).map(([key, value]) => ({ question: key, answer: value }));
    return arr;
}

export const editFromArrayToObject = (arr)=>{
    const obj = {};
    arr.forEach(item => {
        obj[item.qustion] = item.value;
    });
    return obj;
}
