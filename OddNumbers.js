// Pseudocode:
// 1- defined a variable called i.
// 2- for loop to loop through the numbers between 1 - 135.
// 3- if statement that check if the number is not divisible by 2. 
// 4- print the result.

// Code:
var i;
for (i=1; i<=135; i++) {
    if (i%2===1) {
        console.log (i)
    }
}

// Diagram:
// i = 1 ... res = 1
// i = 2 ... res = 1 becuase 2 % 2 = 0
// i = 3 ... res = 1, 3
// .
// .
// .
// i = 134 ... res = 1, 3, 5, ..., 131, 133
// i = 135 ... res = 1, 3, 5, ..., 133, 135