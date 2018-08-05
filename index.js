'use strict';

export const chunk = (arr, chunkSize) => {
    let startKey = 0;
    const newArr = [];
    const amountOfChunks =
        arr.length / chunkSize < 1 ? 1 : Math.floor(arr.length / chunkSize);
    // if the chunk size is as big or bigger then the the lenght of the arr
    if (amountOfChunks === 1) {
        return [[...arr]];
    }
    const makeChunk = (startIndex, chunkSzs, theArray) => {
        return theArray.slice(startIndex, startIndex + chunkSize);
    };
    //
    for (let i = 1; i <= amountOfChunks; i++) {
        newArr.push(makeChunk(startKey, chunkSize, arr));
        startKey += chunkSize;
    }
    if (startKey < arr.length) {
        for (let i2 = startKey; i2 < arr.length; i2++) {
            newArr.push(arr[i2]);
        }
    }
    return newArr;
};
