export const editFromObjectToArray = (object)=>{
    const arr = Object.entries(object).map(([key, value]) => ({ question: key, answer: value }));
    return arr;
}

export const editFromArrayToObject = (arr)=>{
    const formObject = arr.reduce((acc, item) => {
        acc[item.question] = item.answer;
        return acc;
    }, {});
    return formObject;
}

export const arrayToObjectWithId = (formObject, answers)=>{
    const result = Object.keys(formObject).map(key => {
        const originalItem = answers.find(item => item.question === key);
        return {
            id: originalItem.id,
            question: key,
            answer: formObject[key]
        };
    });
    return result
}

