let selectionSort = function (array) {
    let minElemIndex = -1;
    let minimum = Infinity;
    for (let i = 0; i < array.length-1; i++){
        for (let j = i; j < array.length; j++){
            if (array[j] < minimum) {
                minimum = array[j];
                minElemIndex = j;
            } 
        }
        let temp = array[i];
            array[i] = array[minElemIndex];
            array[minElemIndex] = temp;
            minimum = Infinity;
    }
    return array;
}

let nums = [17, 9, 10, 90, 8, 3, 2, 1, 10, 24, 35, 70];
console.log(nums);
selectionSort(nums);
console.log(nums);