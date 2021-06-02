let A = [1,2,"a"];
let B = [1,3,"b"];

for(let i =0 ; i < A.length ; i++){
    for(let j =0 ; j < B.length; j++){
        if(A[i] === B[j]){
            A.splice(i,1);
            B.splice(i,1);
        }
    }
}

let C = A.concat(B);
console.log(C);
