let quickSort = function (array, si = 0, ei = array.length) {
    // Get 1st element to right place
    // Count total no of elements smaller than p
    // swipe the elements lesser and bigger on either side

    function partition() {
        let pivotElement = array[si];
        let smallerNumberCount = 0;
        for (let i = si+1; i < ei; i++){
            if (array[i] < pivotElement) {
                smallerNumberCount++;
            }
        }
        let temp = array[si + smallerNumberCount];
        array[si + smallerNumberCount] = pivotElement;
        array[si] = temp;

        let i = si;
        let j = ei;
        while (i < j) {
            if (array[i] < pivotElement) {
                i++;
            } else if (array[j] >= pivotElement) {
                j--;
            } else {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i++;
                j--;
            }
        }
        return si + smallerNumberCount;
    }


    if (si >= ei) {
        return;
    }

    let pivotIndex = partition(array, si, ei);
    quickSort(array, si, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, ei);

}

let nums = [10, 12, 13, 7, 9, 100, 90, 89, 35, 45, 67];
quickSort(nums, 0, nums.length-1);
console.log(nums);