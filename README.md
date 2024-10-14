# JavaScript Algorithms

## Big O Notation Graph

![Big O Notation Graph](images/Big-O-Notation-Graphc.png)

## Ways to Practice

- [Use Quokka.js Pro](https://quokkajs.com/) in Visual Studio Code
- Courses:
  - [Software Engineering Interviews](https://www.tryexponent.com/courses/software-engineering) (paid course via Exponent)
  - Eric Traub Udemy courses:
    - [Learning Data Structures in JavaScript from Scratch](https://www.udemy.com/course/learning-data-structures-in-javascript-from-scratch/?couponCode=ST14MT101024)
    - [Learning Algorithms in JavaScript from Scratch](https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/)

## Understanding Big O Notation

- Among the three types of asymptotic notation (Big O, Omega, and Theta) **Big O notation** is the most commonly used because it provides an upper bound on an algorithm’s running time, representing the worst-case scenario.
- Comparing Big O complexity Table
  | Complexity                          | Big-O notation                    | Performance                |
  | ----------------------------------- | --------------------------------- | -------------------------- |
  | :green_heart: Constant              | :green_heart: O(1)                | :green_heart: Excellent    |
  | :white_check_mark: Logarithmic      | :white_check_mark: O(log n)       | :white_check_mark: Good    |
  | :warning: Linear                    | :warning: O(n)                    | :warning: Acceptable       |
  | :large_orange_diamond: Linearithmic | :large_orange_diamond: O(n log n) | :large_orange_diamond: Bad |
  | :exclamation: Quadratic             | :exclamation: O(n^2)              | :exclamation: Terrible     |
  | :exclamation: Exponential           | :exclamation: O(2^n)              | :exclamation: Terrible     |
  | :exclamation: Factorial             | :exclamation: O(n!)               | :exclamation: Terrible     |

## Analyzing Time Complexity

Analyzing the time complexity of an algorithm involves examining the number of operations it performs as the size of the input grows. An operation, in this context, refers to a basic computational step, such as a comparison or arithmetic operation.

### Linear Time Complexity
In this function, the number of operations scales linearly with the size of the input array arr. Thus, this function has a time complexity of `O(n)`, where `n` is the number of elements in the array. This is known as linear time complexity.

```js
function iterateArr(arr) {
   arr.map(item => console.log(item));
}
```

## Quadratic Time Complexity
Function below:
- The nested for loops iterate over all pairs of elements, resulting in `O(n^2)` time complexity.
- The separate for loop adds `O(n)` time complexity.
- When combined, the total time complexity is dominated by the quadratic term, so the overall complexity is `O(n^2)`.
```js
function quadraticExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
    for (let item of arr) {
        console.log(item);
    }    
}

const arr = [1, 2, 3];
quadraticExample(arr);
```