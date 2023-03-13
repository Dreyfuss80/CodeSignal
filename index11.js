/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.

*/

let n = 1230;
let sum1 = 0;
let sum2 = 0;
const nString = n.toString();
let long = nString.length;

// Recorriendo la mitad 1 del numero
for(let i = 0; i < long/2; i++){
    console.log(nString.slice(i,i+1));
    sum1 = sum1 + parseInt(nString.slice(i,i+1));
}

// Recorriendo la mitad 2 del numero
for(let i = long/2; i < long; i++){
    console.log(nString.slice(i,i+1));
    sum2 = sum2 + parseInt(nString.slice(i,i+1));
}

if(sum1 == sum2){
    return true;
}else return false;

console.log(sum1);
console.log(sum2);