// *Write a Program to find a sum of an array?
const sumArray = (array) =>{
    let sum = 0;
    for(let i=0;i<array.length;i++)
    {
        sum +=array[i];
    }
    return sum;
}
console.log(sumArray([45,2,6,88,41]));