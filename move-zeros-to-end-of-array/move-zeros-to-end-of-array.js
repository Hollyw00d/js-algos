/*
# Move Zeros to End of Array

Move all zeros to the end of an array while maintaining the order of the other elements. Given an array of integers, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

## Constraints
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.

For example, given the input array `[0, 1, 0, 3, 12]`, after calling your function, the array should be `[1, 3, 12, 0, 0]`.

*/

function moveZerosToEnd(arr) {
	let length = arr.length;

	// If the length of the array is less than 2, there's no need to perform any operations,
	// so we return the array as is
	if (length < 2) return arr;

	// Initialize a variable 'counter' to keep track of the current position where non-zero elements should be placed
	let counter = 0;

	// Iterate through each element of the array
	for (let i = 0; i < length; i++) {
		// If the element is non-zero, move it to the current position indicated by 'counter' and increment 'counter'
		if (arr[i] !== 0) {
			arr[counter] = arr[i];
			counter += 1;
		}
	}

	// Fill the remaining positions in the array with zeros
	// by continuing to increment 'counter' until it reaches the length of the array
	while (counter < length) {
		arr[counter] = 0;
		counter += 1;
	}

	// Return the modified array, where all non-zero elements have been moved to the end followed by zeros
	return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
