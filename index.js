'use strict';

//Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
export const chunk = (arr, chunkSize) => {
    if (typeof arr === 'string') arr = arr.split('');
    let startKey = 0;
    let newArr = [];
    const amountOfChunks =
        arr.length / chunkSize < 1 ? 1 : Math.floor(arr.length / chunkSize);
    // if the chunk size is as big or bigger then the the lenght of the arr
    if (amountOfChunks === 1) {
        return [[...arr]];
    }

    //
    for (let i = 1; i <= amountOfChunks; i++) {
        newArr = [...newArr, arr.slice(startKey, startKey + chunkSize)];
        startKey += chunkSize;
    }
    if (startKey < arr.length) {
        newArr = [...newArr, arr.slice(startKey, arr.length)];
    }

    return newArr;
};

//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
export const compact = arr => {};

// Creates a slice of array from start up to, but not including, end.
// Note: This method is used instead of Array#slice to ensure dense arrays are returned.
export const slice = (arr, start = 0, end) => {
    const length = arr == null ? 0 : arr.length;
    if (!length) {
        return [];
    }
    // Arguments
    // array (Array): The array to slice.
    // [start=0] (number): The start position.
    // [end=array.length] (number): The end position.
    let newArr = [];

    for (let i = start; i < end; i++) {
        newArr = [...newArr, arr[i]];
    }

    return newArr;
    // Returns
    // (Array): Returns the slice of array.
};
