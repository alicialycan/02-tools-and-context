'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('testing fp', () => {

    const arr = [1,2,3,4,5];
    fp.forEach(arr, el => console.log( el));
        fp.map(arr, el => el * 2);
    fp.filter(arr, el => el % 2 === 0);
    fp.reduce(arr, (a,b) => a + b, 0);
});