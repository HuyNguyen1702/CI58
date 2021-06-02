var btn = document.getElementById("btn");
var x = document.getElementById("myText");


btn.addEventListener('click', () => {
    
    reverseString(x.value);
});


function reverseString(x){
    let y = x.split('').reverse().join('');
    if(x === y){
        console.log('True');
    }
    else{
        console.log("False");
    }
}
