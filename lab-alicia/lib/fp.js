'use strict';

const fp = (arr, cb) => {

    fp.forEach = (arr, cb) => {
        if (arr.length === 0 || arr === null)
            return undefined;
    }

    fp.map = (arr, cb) => {
        if (arr.length === 0 || arr === null) {
            return undefined;
        } else {
            let result = [];
        for (let i = 0; i < arr.length; i ++) {
            result.push(cb(arr[i]));
        }
        return result;
        }
    }

    fp.filter = (arr, cb) => {
        if (arr.length === 0 || arr === null) {
            return undefined;
        } else {
            let result = [];
        for (let i = 0; i < arr.length; i++);
            let data = cb(arr[i])
            if (data) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}

    fp.reduce = (arr, cb, initialState) => {
        let result = initialState;
        if (arr.length === 0 || arr === null) {
            return undefined;
        } else {
            for (let i = 0; i < arr.length; i ++) {
                result = cb(result, arr[i]);
            }
        }
    return result;
};

module.exports.fp = fp;