let varA = "A"; // b
let varB = "B"; // c
let varC = "C"; // a

/*
const varAtemp = "A";
varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);
*/

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
