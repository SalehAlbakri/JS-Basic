// Pseudocode:
// 1- defined a variable called i.
// 2- defined a variable called sum to save the result and equal it.
// 3- for loop from 1 to 135.
// 4- add the new number to the sum variable.
// 5- print 'Number is:' i 'Sum:' sum.

// Code:
var i;
var sum=0;
for (i=1; i<=135; i++) {
    sum +=i
    console.log ('Number is:',i,'Sum:',sum)
}

// Diagram:
// i = 1 ... res = Number is: 1 Sum: 1
// i = 2 ... res = Number is: 2 Sum: 3
// i = 3 ... res = Numbers is: 3 Sum: 6
// .
// .
// .
// i = 134 ... res = Number is: 134 Sum: 9045
// i = 135 ... res = Number is: 135 Sum: 9180