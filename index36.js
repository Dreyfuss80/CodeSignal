/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].


const sequence = [1, 3, 2, 1];
let arrayNew = [];

function equal(){
    
    arrayNew = sequence;
}

function erase(){
    arrayNew = [];
}

function solution(sequence) {
    
    // console.log(arrayNew);
    for(let i = 0; i < sequence.length; i++){
        
        // LLamando a la funcion que iguala
        equal();
        console.log(arrayNew)
        arrayNew.splice(i,1);
        console.log(arrayNew);
        console.log(sequence);

        erase();
        
        console.log(arrayNew);

        
        
    }
}

solution(sequence);
*/

let sequence = [1, 3, 2, 1];

function almostIncreasingSequence(sequence) {
    var found = 0;
    for (var i=0;i<sequence.length;i++) {
        
      console.log(`El valor i = ${i} y el valor i-1 es ${i-1}`);
      
      if(sequence[i] <= sequence[i-1]) {
        found++;
        console.log(`el valor de found es ${found}`);
        // check if more than one nonincreasing found
        if(found > 1) return false; 
        
        // check if second previous number is equal to / bigger than current number
        // and previous number is equalto / bigger than next number
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false; 
      }
      
    } 
    return true;
}

almostIncreasingSequence();