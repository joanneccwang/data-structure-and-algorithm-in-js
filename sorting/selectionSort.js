const input = [5, 4, 1, 3, 2];

function selectionSort(input) {
  for (let i = 0; i < input.length; i++) {
    // Store the first index as minimum value's position
    let minPosition = i;

    // Run through the rest of the array to find the real minimun value's position
    for (let j = i+1; j < input.length; j++) {
      if (input[j] < input[minPosition]) {
        minPosition = j;
      }
    }

    // Swap values if minimum is not the value you initially began with
    if (input[i] !== input[minPosition]) {
      temp = input[i];
      input[i] = input[minPosition];
      input[minPosition] = temp;
    }
  }

  return input;
}

console.log(selectionSort(input));