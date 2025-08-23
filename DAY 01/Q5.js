// Write a Program to use a callback function?
// ?Method 1
// const callbackFunctionUse = (name,callback) =>{
//     callback(`Hello ${name}`);
// }
// callbackFunctionUse("Het Patel",massage => console.log(massage));

// ?Method 2
// const callbackFunctionUse = (name, callback) =>{
//     callback(`Hello ${name}`);
// }

// const passMassage = (msg) =>{
//     console.log(msg)
// }

// callbackFunctionUse("Het Patel",passMassage)

// ?Mathos 3
// const callbackFunctionUse = (name,callback) =>{
//     callback(`hello kem chho ${name}`)
// }

// callbackFunctionUse("Het Patel",passassage = (msg) =>{
//     console.log(msg)
// })

// ?Method 4
const callbackFunctionUse = (name,callback) =>{
    setTimeout(()=>{
        callback(`hello kem chho ${name}`)
    },3000);
}

callbackFunctionUse("Het Patel",passassage = (msg) =>{
    console.log(msg);
})