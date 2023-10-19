function printAllPairs(array) {
    let leftPointer = 0;
    let rightPointer = leftPointer+1;
    let output = [];
    while (rightPointer != array.length) {
        output.push([array[leftPointer], array[rightPointer]]);
        rightPointer++;
        if (rightPointer == array.length && leftPointer != array.length - 1) {
            leftPointer++;
            rightPointer = leftPointer + 1;
        }
    }
    return output;
}

console.log(printAllPairs([1, 2, 3, 4, 5]));