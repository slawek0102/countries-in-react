[1.2, 3, 4, 6].reduce((acc, item) => {
    [...acc, newItem]
}, []);


reduce([1, 2, 3, 4, 5], (result, item) => {
    result.push(item * 2);
    return result;
}, []); // [ 2, 4, 6, 8, 10 ]