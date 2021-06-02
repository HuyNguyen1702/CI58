// const alice = {
//     name: "Alice",
//     age: 25,
// };

// const bob = {
//     name: "Bob",
//     age: 26,
// };

class Person {
    name = "Demo";
    age = 18;
    address = "";

    constructor(name , age , address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    sayHello(){
        console.log("Hello this is " + this.name);
    }

    setName(name){
        this.name = name;
    }
}

const alice = new Person("ALICE",25,"Ha Noi");
const bob = new Person("BOB",30, "HCM");

console.log(alice , bob);

alice.setName("An");
alice.sayHello();

class Student extends Person {
    className = "";
    grade = 0;
    constructor(name ,age ,className, grade){
    super(name ,age);
    this.className = className;
    this.grade = grade;
    }

    display = () => {
        console.log("this is display method");
    }
    sayHello(){
        super.sayHello();
        console.log("Im a student");
    }
}
const nguyenVanA = new Student("nguyenVanA", 20, "CI58", 8);
nguyenVanA.sayHello();

// let btn = document.getElementById("btn_click");
// let input = document.getElementById("input");

// btn.addEventListener('click', ()=>{
//     console.log(input.value);
// })

// class App {
//     input;
//     btn;
//     constructor(input,btn){
//         this.input = input;
//         this.btn=btn;
//     }
//     getInput = () => {
//         btn.addEventListener('click', ()=>{
//             console.log(input.value);
//         })
//     }
// }

// const app1 = new App (input,btn);
// app1.getInput();


const app = document.getElementById("app");
const btnAddForm = document.getElementById("btnAddForm");

btnAddForm.addEventListener("click", () => {
    const myForm = new MyForm();
    myForm.render(app);
});


class MyForm {
    input = null;
    button = null;

    constructor(input, button){
        this.input = document.createElement("input");
        this.button = document.createElement("button");
        this.button.innerHTML = "Get value";
        this.button.addEventListener("click", ()=> {
            console.log(this.input.value);
        });
    }
    render = (container) => {
        const div = document.createElement('div');
        div.appendChild(this.input);
        div.appendChild(this.button);
        container.appendChild(div);
    }
}