// Pseudocode:
// 1- defined a variable for an array called X=[1,-4,0,-1].
// 2- for loop for elements of array X.
// 3- if statement that check if the value of elements in array X is negative.
// 4- replace all negative numbers to 'Turing'.
// 5- print the new array X.

// Code:
var X=[1,-4,0,-1];
for (let i=0; i<X.length; i++) {
    if (X[i]<0) {
        X[i]='Turing';
    }
}
console.log ('X=',X)

// Diagram:
// i = 0 ... 1 !< 0 = 1
// i = 1 ... -4 < 0 = 'Turing'
// i = 2 ... 0 !< 0 = 0
// i = 3 ... -1 < 0 = 'Turing'
// result => X=[1,'Turing',0,'Turing]