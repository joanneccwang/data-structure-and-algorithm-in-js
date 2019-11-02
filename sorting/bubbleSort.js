const input = [5, 2, 3, 1, 4];

function bubbleSort(input) {
  // After every iteration, i items are sorted
  for (let i = input.length; i > 0; i--) {
    // Loop and compare the rest unsorted items
    for (let j = 0; j < i - 1; j++) {
      // Swap
      if (input[j] > input[j+1]) {
        let temp = input[j];
        input[j] = input[j+1];
        input[j+1] = temp;
      }
    }
  }
  return input;
}

console.log(bubbleSort(input));