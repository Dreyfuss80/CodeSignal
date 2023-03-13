/*
Codewriting

300

Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

let inputArray =
["aba", 
 "aa", 
 "ad", 
 "vcd", 
 "aba"];

 
 function solution(inputArray) {
    let longitud = 0;
    let nuevoArr = []
    for(let i = 0; i < inputArray.length; i++){
        if (longitud < inputArray[i].length) longitud = inputArray[i].length;
    }

    for(let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length == longitud) nuevoArr.push(inputArray[i]);
        // console.log(newArray)
    }
    
    return nuevoArr;
 }

 solution(inputArray);
 