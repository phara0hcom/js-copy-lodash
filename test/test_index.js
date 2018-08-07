'use strict';

import { expect } from 'chai';
import _ from 'lodash';
import { chunk } from '../';

const testStr = '[1, 2, 3]';
const testArr1 = [1, 2, 3];
const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

describe("test Tamer's chunk function (testArr1 , 5)", function() {
    const lodashChunk1 = _.chunk(testArr1, 5);
    console.log({ lodashChunk1 });
    const tamerChunk1 = chunk(testArr1, 5);
    console.log({ tamerChunk1 });
    it('return should be the same as', function() {
        expect(tamerChunk1).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunk1).to.deep.equal(lodashChunk1);
    });
});

describe("test Tamer's chunk function (testArr2 , 3)", function() {
    const lodashChunk2 = _.chunk(testArr2, 3);
    console.log({ lodashChunk2 });
    const tamerChunk2 = chunk(testArr2, 3);
    console.log({ tamerChunk2 });
    it('return should be the same as', function() {
        expect(tamerChunk2).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunk2).to.deep.equal(lodashChunk2);
    });
});

describe("test Tamer's chunk function (testArr2 , 5)", function() {
    const lodashChunk2 = _.chunk(testArr2, 5);
    console.log({ lodashChunk2 });
    const tamerChunk2 = chunk(testArr2, 5);
    console.log({ tamerChunk2 });
    it('return should be the same as', function() {
        expect(tamerChunk2).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunk2).to.deep.equal(lodashChunk2);
    });
});

describe("test Tamer's chunk function (testStr , 4)", function() {
    const lodashChunkStr = _.chunk(testStr, 4);
    console.log({ lodashChunkStr });
    const tamerChunkStr = chunk(testStr, 4);
    console.log({ tamerChunkStr });
    it('return should be the same as', function() {
        expect(tamerChunkStr).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunkStr).to.deep.equal(lodashChunkStr);
    });
});
