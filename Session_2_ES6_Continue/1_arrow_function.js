//console.log(sum(1,2)); // chay duoc vi function scope toan bo
//console.log(sub(2,1)); // loi vi khai bao 1 bien co gia tri la function, viet sau khi khai bao thi duoc

function sum(a,b){
    return a+b;
} 

let value = sum(1,2);
console.log(value);
alert(value);

const sub = function(a,b){
    return a-b;
};

// Arrow function

const multi = (a, b) => {
    return a * b;
};

// 2 cach viet nhu nhau

const divide = (a, b) => a/b; // short hand return 

console.log(multi(2,2));
console.log(divide(1,2));

const myMath = {};
myMath.sum = sum;
myMath.sub = function () {};
myMath.multi = () => {};


// write a function solve quadratic equation: ax^2 + bx + c = 0;
// write a function to solve linear equation: ax + b = 0;
// write a function to calculate the area of a triangle;

function quadraticEquation(a,b,c){
    let x1 = 0;
    let x2 = 0;
    let delta = (b*b)-(4*a*c);
    if (delta > 0){
        return x1=((-b)+Math.floor(delta)/(2*a)),x2=((-b)-Math.floor(delta)/(2*a));
    }
    else
    {
    if(delta = 0){
        return x1 = ((-b)/(2*a));
    }else {
        return " vo nghiem ";
    }
}
}
console.log(quadraticEquation(1,-3,2));

const linearEquation = (a,b) => {
    if (a === 0){
        if(b===0){
            return "Vo so nghiem";
        }else {
            return " vo nghiem";
        }
    }else {
        return -b/a;
    }
}

const triangleArea = (a,h) => {
    return divide(multi(a,h),2);
}

const btnClickMe = document.getElementById("btnClickMe");
btnClickMe.addEventListener("click", () => {
    console.log(this);
});