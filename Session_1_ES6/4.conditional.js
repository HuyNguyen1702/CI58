const foo = true;
if (Boolean(foo)) {
    console.log("The foo is true");
} else {
    console.log("False")
}

const bar = "bar";
switch(bar){
    case "bar" :
        console.log("First case");
        break;
    case "bar2" :
        console.log("Second case");
        break;
        default:
        console.log("default");
}


let isEven = "even";
const x = 3;
if ( x % 2 === 0 ){
    isEven = "even";
}else 
{
    isEven = "odd";
}

isEven = x % 2  === 0  ? "even" : "odd";
console.log(isEven);