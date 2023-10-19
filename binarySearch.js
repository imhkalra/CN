function linearSearch(arr, num) {
    let index = 0;
    while (index != arr.length) {
        if (arr[index] == num) {
            return index;
        }
        index++;
    }
    return -1;
}

function binarySearchUsingRecursion(arr, num, si = 0, ei = arr.length) {
    let middleIndex = Math.floor((si + ei) / 2);
    if (arr[middleIndex] == num) return middleIndex;
    if (arr[middleIndex] > num) return binarySearchUsingRecursion(arr, num, si, middleIndex - 1);
    else if (arr[middleIndex] < num) return binarySearchUsingRecursion(arr, num, middleIndex + 1, ei);
    return -1;
}

// console.log(binarySearchUsingRecursion([1, 2, 3, 4, 5, 6, 7], 8)) //-1


function binarySearchUsingIteration(arr, num) {
    let si = 0;
    let ei = arr.length - 1;
    while (si <= ei) {
        let middleIndex = Math.floor((si + ei) / 2);
        if (arr[middleIndex] === num) return middleIndex;
        else if (arr[middleIndex] > num) {
            ei = middleIndex - 1;
        }
        else if (arr[middleIndex] < num) {
            si = middleIndex + 1;
        }
        else return -1;
    }
}

console.log(binarySearchUsingIteration([1,2,3,4,5,6,7,8], 5)) // 7