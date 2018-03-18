'use strict';

const fp = require('../lib/fp.js');

describe('testing fp', () => {

    // For Each
    describe('testing fp.forEach', () => {
        let expected = [];
        it('should return undefined ', () => {
            let arr = null;
            let result = [];
            let cb = ((num) => num * 2);
            fp.forEach(arr, (num) => {
                result.push(cb(num));
            });
            expect(result).toEqual(expected);
        })
    });

    describe('testing fp.forEach', () => {
        let expected = [2, 4, 6, 8, 10];
        it('should multiply each number by 2 in the array', () => {
            let arr = [1, 2, 3, 4, 5];
            let result = [];
            let cb = ((num) => num * 2);
            fp.forEach(arr, (num) => {
                result.push(cb(num));
            });
            expect(result).toEqual(expected);
        })
    });

    // Map
    describe('testing fp.map', () => {
        it('should multiply each number by 2 in the array', () => {
            let arr = [2, 3, 4];
            let cb = ((num) => num * 2);
            let result = fp.map(arr, cb);
            let expected = [4, 6, 8];
            expect(result).toEqual(expected);
        })
    });

    // Filter
    describe('testing fp.filter', () => {
        it('should remove odd numbers from the array', () => {
            let arr = [1, 2, 3, 4, 5];
            let cb = ((num) => num % 2 === 0);
            let result = fp.filter(arr, cb);
            let expected = [2, 4];
            expect(result).toEqual(expected);
        })
    });

    // Reduce
    describe('testing fp.reduce', () => {
        it('should add all numbers and return a value of 15', () => {
            let arr = [1, 2, 3, 4, 5];
            let cb = ((a, b) => a + b);
            let result = fp.reduce(arr, cb, 0);
            let expected = 15;
            expect(result).toEqual(expected);
        })
    })
});