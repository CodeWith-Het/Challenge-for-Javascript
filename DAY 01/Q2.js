// Write a Program to check whether a string is a palindrome string.
const palindromeString = (str) =>{
    const result = str.split("").reverse().join("");

    return str === result;
}
console.log(palindromeString("het"));