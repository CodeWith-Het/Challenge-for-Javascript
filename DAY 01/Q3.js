// Find the largest number in an array in JavaScript.
// ?Mthod 1
const findLargestNumber = (a) =>{
    let largest = a[0];
    for(let i=1; i < a.length; i++){
        if(a[i] > largest){
            largest = a[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([50,30,55,20,58]));

// ?Method 2
// const findLargestNumber = (a) => {
//     return Math.max(...a);
// }
// console.log(findLargestNumber([50,53,22,70,41]));