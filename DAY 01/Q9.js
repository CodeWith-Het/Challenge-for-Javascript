// What will be the output of the given code?
console.log([1, 2, 3].reduce((a, b) => a + b));
//Output is 6

// ?Given Solution
// *🔎 Step by Step Execution of reduce
// *reduce(callback, initialValue)
// *callback har element ke liye run hota hai
// *a = accumulator (jo result store karta hai)
// *b = current value

// !Array = [1, 2, 3]
// !Initial value di nahi hai → to by default pehla element (1) hi accumulator ban jata hai.

// !First iteration

// !a = 1 (accumulator = first element)

// !b = 2 (current element)

// !a + b = 1 + 2 = 3
// !→ ab accumulator ban gaya 3

// !Second iteration

// !a = 3 (pichle result se aaya)

// !b = 3 (current element)

// !a + b = 3 + 3 = 6
// !→ accumulator ban gaya 6

// !⚡ Array khatam → final result = 6