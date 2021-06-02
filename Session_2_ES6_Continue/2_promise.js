// setTimeout(() => {
//     console.log("hello");
//     setTimeout(() => {
//         console.log("world");
//     },1000);
// }, 1000);

const delay = (time) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve();
        },time);
    });
};

// const delay1 = new Promise ((resolve) => {
//     setTimeout(() => {
//         resolve();
//     },1000)
// });

delay(1000)
    .then(() => console.log("hello"))
    .then(() => delay(1000))
    .then(() => console.log("world"))
    .then(() => delay(1000))
    .then(() => console.log("this"))
    .then(() => delay(1000))


// delay1s.then(() => {
//     console.log("Hello");
// })
// .then(()=> {
//     return delay1s;
// })
// .then(()=>{
//     console.log("World");
// });