/*
# Flood Fill Algorithm:

Given a 2d array and two indices representing a row and column, update the value of that cell and all connected cells. Cells are connected if they are touching horizontally or vertically and they have the same value.

Return a boolean that is true if and only if the matrix was modified.
*/

const directions = [
	[1, 0], // down
	[-1, 0], // up
	[0, 1], // right
	[0, -1], // left
];

function floodFill(matrix, r, c, val) {
	const oldVal = matrix[r][c];
	const modified = oldVal !== val;

	if (modified) {
		// we only need to do work if the color is not yet set
		// this prevents infinite loops
		matrix[r][c] = val;

		for (const [dR, dC] of directions) {
			// this might be out of bounds
			// use optional chaining short
			if (matrix[r + dR]?.[c + dC] === oldVal) {
				floodFill(matrix, r + dR, c + dC, val);
			}
		}
	}

	// return matrix;
	return modified;
}

const matrix = [
	[1, 1, 1],
	[1, 1, 1],
	[1, 2, 2],
];

console.log(floodFill(matrix, 1, 1, 3));
