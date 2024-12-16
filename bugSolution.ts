function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // Correct usage
console.log(result); // Output: 3

try {
  let result2 = add("hello", 5);
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

//Alternative Solution using Type Guards
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function add(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)){
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
} 

console.log(add(1,2)); //3
console.log(add("hello",2)); //Error