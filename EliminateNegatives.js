// Pseudocode:
// 1- defined a variable for an array called X=[2,-1,4,-3].
// 2- for loop for elements of array X.
// 3- if statement that check if the value of elements in array X is negative.
// 4- replace all negative numbers to 0.
// 5- print the new array X.

// Code:
var X=[2,-1,4,-3];
for (let i=0; i<X.length; i++) {
    if (X[i]<0) {
        X[i]=0;
    }
}
console.log ('X=',X)

// Diagram:
// i = 0 ... 2 !< 0 = 2
// i = 1 ... -1 < 0 = 0
// i = 2 ... 4 !< 0 = 4
// i = 3 ... -3 < 0 = 0
// result => X=[2,0,4,0]