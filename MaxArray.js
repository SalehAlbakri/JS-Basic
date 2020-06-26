// Pseudocode:
// 1- defined a variable for an array called X=[2,-3,-1,0].
// 2- defined a variable called max=X[0].
// 3- for loop for elements of array X.
// 4- if statement that check if the value of elements in array X is bigger than max.
// 5- print 'Max is:'max.

// Code:
var X=[2,-3,-1,0];
var max=X[0];
for (let i=0; i<X.length; i++) {
    if (X[i]>max) {
        max= X[i]
    }
}
console.log ('Max is:',max)

// Diagram:
// i = 0 ... max = 2
// i = 1 ... max = 2
// i = 2 ... max = 2
// i = 3 ... max = 2
// Max is: 2
