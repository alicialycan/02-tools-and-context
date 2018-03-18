'use strict';

const fp = {};

fp.forEach = (arr, cb) => {
    if (arr === null || arr.length === 0) {
        return undefined;
    }
    for (let i = 0; i < arr.length; i++) {
        let result = cb(arr[i])
        arr[i] = result;
    }
    return undefined;
};

fp.map = (arr, cb) => {
    if (arr === null || arr.length === 0) {
        return undefined;
    } else {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(cb(arr[i]));
        }
        return result;
    }
};

fp.filter = (arr, cb) => {
    if (arr === null || arr.length === 0) {
        return undefined;
    } else {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
};

fp.reduce = (arr, cb, initialState) => {
    let result = 0;
    if (initialState) {
        result = initialState;
    }
    if (arr === null) {
        return undefined;
    } else if (arr.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            result = cb(result, arr[i]);
        }
    }
    return result;
};

module.exports = fp;