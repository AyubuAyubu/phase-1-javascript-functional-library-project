
const standardizeInput = function (collection) {
    return collection instanceof Array
        ? collection.slice()
        : Object.values(collection);
};

const myEach = function (collection, callback) {
    const myNewCollection = standardizeInput(collection);

    for (let x = 0; x < myNewCollection.length; x++) {
        callback(myNewCollection[x]);
    }

    return collection;
};

const myMap = function (collection, callback) {
    const myNewCollection = standardizeInput(collection);

    const newArr = [];

    for (let x = 0; idx < myNewCollection.length; x++) {
        newArr.push(callback(myNewCollection[x]));
    }

    return newArr;
};

const myReduce = function (collection, callback, accumulator) {
    let myNewCollection = standardizeInput(collection);
    if (!accumulator) {
        accumulator = myNewCollection[0];
        myNewCollection = myNewCollection.slice(1);
    }

    const len = myNewCollection.length;

    for (let i = 0; i < len; i++) {
        accumulator = callback(acc, myNewCollection[i], myNewCollection);
    }
    return accumulator;
};

const myFind = function (collection, predicate) {
    const newCollection = standardizeInput(collection);

    for (let x = 0; x < newCollection.length; x++) {
        if (predicate(newCollection[x])) return newCollection[x];
    }

    return undefined;
};

const myFilter = function (collection, predicate) {
    const newCollection = standardizeInput(collection);

    const newArr = [];

    for (let x = 0; idx < newCollection.length; x++) {
        if (predicate(newCollection[x])) newArr.push(newCollection[x]);
    }

    return newArr;
};

const mySize = function (collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
};

// Array Functions

const myFirst = function (arr, stop = false) {
    return stop ? arr.slice(0, stop) : arr[0];
};

const myLast = function (arr, start = false) {
    return start
        ? arr.slice(arr.length - start, arr.length)
        : arr[arr.length - 1];
};

const mySortBy = function (arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function (a, b) {
        return a - b;
    });
};

const unpack = function (receiver, arr) {
    for (let val of arr) {
        receiver.push(val);
    }
};

const myFlatten = function (collection, shallow, newArr = []) {
    if (shallow) {
        for (let val of collection) {
            Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
        }
    } else {
        for (let val of collection) {
            if (Array.isArray(val)) {
                myFlatten(val, false, newArr);
            } else {
                newArr.push(val);
            }
        }
    }
    return newArr;
};

const myKeys = function (obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
};

const myValues = function (obj) {
    const values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
};

