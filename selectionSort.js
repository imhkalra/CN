// DP
// Backtracking
// Recursion
// Searching, Sorting 

function selectionSort(arr) {
    let minElemIndex = -1;
    let minimum = Infinity;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = i; j < n; j++){
            if (arr[j] < minimum) {
                minimum = arr[j];
                minElemIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minElemIndex];
        arr[minElemIndex] = temp;
        minimum = Infinity;
    }
    return arr;
}

console.log(selectionSort([10, 11, 13, 15, 18, 2, 4, 1]));