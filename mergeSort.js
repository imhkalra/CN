let merge = function (arr1, arr2, array) {
    
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            array[k] = arr1[i];
            i++;
            k++;
        }
        else {
            array[k] = arr2[j];
            j++;
            k++;
        }
    }
    while (i !== arr1.length) {
        array[k] = arr1[i];
        i++;
        k++;
    }
    while (j !== arr2.length) {
        array[k] = arr2[j];
        j++;
        k++;
    }

}

let mergeSort = function (array) {
    if (array.length <= 1) return array;
    let arr1 = []; let arr2 = [];
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        arr1[i] = array[i];
    }
    for (let j = Math.floor(array.length / 2); j < array.length ; j++){
        arr2[j - Math.floor(array.length / 2)] = array[j];
    }
    mergeSort(arr1);
    mergeSort(arr2);
    
    merge(arr1, arr2, array);
}

let nums = [10, 12, 5, 4, 1, 100, 80, 120];
console.log(nums);
mergeSort(nums);
console.log(nums);
