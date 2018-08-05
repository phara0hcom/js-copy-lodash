'use strict';

import { expect } from 'chai';
import _ from 'lodash';
import { chunk } from '../';

const testArr1 = [1, 2, 3];
const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

describe("test Tamer's chunk function", function() {
    const lodashChunk1 = _.chunk(testArr1, 5);
    const tamerChunk1 = chunk(testArr1, 5);
    it('return should be the same as', function() {
        expect(tamerChunk1).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunk1).to.deep.equal(lodashChunk1);
    });
});

describe("test Tamer's chunk2 with chunksize of 3 function", function() {
    const lodashChunk2 = _.chunk(testArr2, 3);
    const tamerChunk2 = chunk(testArr2, 3);
    it('return should be the same as', function() {
        expect(tamerChunk2).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunk2).to.deep.equal(lodashChunk2);
    });
});

describe("test Tamer's chunk2 with chunksize of 4 function", function() {
    const lodashChunk2 = _.chunk(testArr2, 4);
    const tamerChunk2 = chunk(testArr2, 4);
    it('return should be the same as', function() {
        expect(tamerChunk2).to.be.a('array');
    });
    it('should return the same as lodash', function() {
        expect(tamerChunk2).to.deep.equal(lodashChunk2);
    });
});
