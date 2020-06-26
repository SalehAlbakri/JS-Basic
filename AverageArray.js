// Pseudocode:
// 1- defined a variable for an array called X=[2,1,3].
// 2- defined a variable called sum=0.
// 3- defined a variable called Average=0.
// 4- for loop for elements of array X.
// 5- sum the result.
// 6- divisible sum by the number of elements of array X.
// 7- print 'Average:'Average.

// Code:
var X=[2,1,3];
var sum=0;
var Average=0;
for (let i=0; i<X.length; i++) {
    sum +=X[i];
    Average =sum/X.length;
}
console.log ('Average:',Average)

// Diagram:
// i = 0 ... sum = 2
// i = 1 ... sum = 2 + 1 = 3
// i = 2 ... sum = 3 + 3 = 6
// Average = 6 / 3 = 2 
// result = Average: 2