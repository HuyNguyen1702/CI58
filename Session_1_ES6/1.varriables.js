 // hoisting
console.log(y);
var y =1;
y = 2;

// error
// console.log("z: ",z);
// let z =1 ;
// z=2;

// scope
let bar = "bar";

if(bar = "bar"){
    var foo = "foo";
}

console.log(foo);


// Const : Hằng số 
// Let khác var : phạm vi