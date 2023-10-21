function descendingBubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const array = [10, 3, 5, 21, 2, 9, 11, 1, 5, 6, 9];
descendingBubbleSort(array);

console.log("Sorted array in descending order: " + array);
