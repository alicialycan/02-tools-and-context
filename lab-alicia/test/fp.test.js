'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('testing fp', () => {

    describe('testing fp.forEach', () => {
        let expected = [1, 2, 3, 4, 5];
        it('should return lines of 1, 2, 3, 4, 5', () => {
            const arr = [1, 2, 3, 4, 5];
            let cb = console.log(cb);
            let result = fp.forEach(arr, cb);
            expect(result).toEqual(expected);
        })
    });

    describe('testing fp.map', () => {
        let expected = [2, 4, 6, 8, 10];
        it('should multiply each integer by 2 and return [2, 4, 6, 8, 10]', () => {
            const arr = [1, 2, 3, 4, 5];
            let cb = (data => data * 2);
            let result = fp.map(arr, cb);
            expect(result).toEqual(expected);
        })
    });

    describe('testing fp.filter', () => {
        let expected = [2, 4];
        it('should remove odd integers from the arr return [2, 4]', () => {
            const arr = [1, 2, 3, 4, 5];
            let cb = (data => data % 2);
            let result = fp.filter(arr, cb);
            expect(result).toEqual(expected);
        })
    });

    describe('testing fp.reduce', () => {
        let expected = [15];
        it('should add all integers return a value of 15', () => {
            let numbers = [1, 2, 3, 4, 5];
            let result = fp.reduce(numbers, (runningValue, number) => runningValue + number, 0);
            expect(result).toEqual(expected);
        })
    });
});