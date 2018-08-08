'use strict';

import { expect } from 'chai';
import _ from 'lodash';
import * as tamer_ from '../';

const myFuncList = ['chunk', 'compact', 'slice'];

const testObject = {
    testInt: 1234567890,
    testObj: {
        one: 1,
        two: 2,
        three: 3,
        false: false,
        empty: ''
    },
    testStr: '[0, 1, 2, 3, false]',
    testArr: [NaN, 0, 1, null, undefined, 4, 5, 6, false, 8, 9, '', 10]
};

myFuncList.forEach(el => {
    for (const key in testObject) {
        if (testObject.hasOwnProperty(key)) {
            describe(`test Tamer's ${el.toUpperCase()} function ( ${key} , 4 )`, function() {
                const lodashChunk = _[el](testObject[key], 4, 12);
                //console.log({ ['_.Chunk ' + key]: lodashChunk });
                const tamerChunk = tamer_[el](testObject[key], 4, 12);
                //console.log({ ['t_Chunk ' + key]: tamerChunk });
                it('return should be an Array', function() {
                    expect(tamerChunk).to.be.a('array');
                });
                it('should return the same as lodash', function() {
                    expect(tamerChunk).to.deep.equal(lodashChunk);
                });
            });
        }
    }
});

// for (const key in testObject) {
//     if (testObject.hasOwnProperty(key)) {
//         describe(`test Tamer's CHUNK function ( ${key} , 4 )`, function() {
//             const lodashChunk = _.chunk(testObject[key], 4);
//             //console.log({ ['_.Chunk ' + key]: lodashChunk });
//             const tamerChunk = tamer_.chunk(testObject[key], 4);
//             //console.log({ ['t_Chunk ' + key]: tamerChunk });
//             it('return should be the same as', function() {
//                 expect(tamerChunk).to.be.a('array');
//             });
//             it('should return the same as lodash', function() {
//                 expect(tamerChunk).to.deep.equal(lodashChunk);
//             });
//         });

//         describe(`test Tamer's COMPACT function ( array = ${key} )`, function() {
//             const lodashCompact = _.compact(testObject[key]);
//             //console.log({ ['_.Compact ' + key]: lodashCompact });
//             const tamerCompact = tamer_.compact(testObject[key]);
//             //console.log({ ['t_Compact ' + key]: tamerCompact });
//             it('return should be the same as', function() {
//                 expect(tamerCompact).to.be.a('array');
//             });
//             it('should return the same as lodash', function() {
//                 expect(tamerCompact).to.deep.equal(lodashCompact);
//             });
//         });

//         describe(`test Tamer's SLICE function ( array = ${key} , start = 4, end = 12 )`, function() {
//             const lodashSlice = _.slice(testObject[key], 4, 12);
//             //console.log({ ['_.Slice ' + key]: lodashSlice });
//             const tamerSlice = tamer_.slice(testObject[key], 4, 12);
//             //console.log({ ['t_Slice ' + key]: tamerSlice });
//             it('return should be the same as', function() {
//                 expect(tamerSlice).to.be.a('array');
//             });
//             it('should return the same as lodash', function() {
//                 expect(tamerSlice).to.deep.equal(lodashSlice);
//             });
//         });
//     }
// }
