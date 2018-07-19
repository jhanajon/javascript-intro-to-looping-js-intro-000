//The for loop worked in the console to log the results, however, the task was here
//to push it (add) to the array that requires the array.push
//there's no need to redefine the array since it can refer to any array (abstracted)

function forLoop(array) {
for (var i = 0; i < 25; i++) {
if (i === 1) {
array.push( "I am 1 strange loop." );
     }
else {
array.push(`"I am ${i} strange loops."`);
     }
     }
     return array
   }

function whileLoop(n) {
  var i = 10; i++)
  while (i > 0) {
  console.log('done')
}
}
