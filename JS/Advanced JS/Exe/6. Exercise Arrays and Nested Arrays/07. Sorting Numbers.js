function customSort(arr) {
    // Sort the array in ascending order.
    arr.sort((a, b) => a - b);
  
    // Initialize an empty result array.
    const result = [];
  
    // Iterate through the sorted array and build the result array.
    let left = 0; // Index for the smallest numbers
    let right = arr.length - 1; // Index for the largest numbers
  
    while (left < right) {
      result.push(arr[left++]); // Add the smaller number from the left
      result.push(arr[right--]); // Add the larger number from the right
    }
  
    // If the array length is odd, there will be one element left in the middle.
    if (left === right) {
      result.push(arr[left]);
    }
  
    return result;
  }
console.log(customSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))