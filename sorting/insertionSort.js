const input = [5, 4, 1, 3, 2];

function insertionSort(input) {
  // Start from the second element (start of the unsorted portion of array)
  for (let i = 1; i < input.length; i++) {
    const currentVal = input[i];
    // Compare the current element to the sorted portion
    // Copy to move the value that is larger than current value
    for (var j = i-1; j >= 0; j--) {
      if (currentVal > input[j]) break;
      input[j+1] = input[j];
    }
    // Insert current value to proper position
    input[j+1] = currentVal;

  }
  return input;
}

console.log(insertionSort(input));