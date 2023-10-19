let bubbleSort = function (arr) {
    let i = 0;
    while (i < arr.length - 1) {
        for (j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        i++;
    }
    return arr;
}
console.log(bubbleSort([10, 13, 1, 2, 0, 90, 6, 7]));

// const bubbleSort = input => {
//     let swapping = true;
    
//     while (swapping) {
//       swapping = false;
//       for (let i = 0; i < input.length - 1; i++) {
//         if (input[i] < input[i + 1]) {
//           swap(input, i, i + 1);
//           swapping = true;
//         }
//       }
//     }
    
//     return input;
//   };