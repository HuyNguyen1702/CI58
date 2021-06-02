 import Developer from './developer.js';
 import Tester from './tester.js';
 import Manager from './manager.js'


 class Employee {
  name;
  taskList;
  Developer;
  Tester; 
  Manager;

  constructor(name, taskList) {
    this.name = name;
    this.taskList = taskList;
    this.Developer = new Developer();
    this.Manager = new Manager();
    this.Tester = new Tester();
  }

  displayInfo() {
    console.log('Ten: ' + this.name);
    console.log('Danh sach cong viec: ' + this.taskList);
  }
}

// class Developer extends Employee {
//   constructor(name, taskList) {
//     super(name, taskList);
//   }
// }

// class Tester extends Employee {
//   constructor(name, taskList) {
//     super(name, taskList);
//   }
// }

// class Manager extends Employee {
//   nhanVienQuanLy = [
//     'nhanvien1',
//     'nhanvien2',
//     'nhanvien3'
//   ]

//   constructor(name, taskList) {
//     super(name, taskList);
//   }

//   addEmployee(employee) {
//     this.nhanVienQuanLy.push(employee);
//     console.log('Danh sach nhan vien quan ly: ' + this.nhanVienQuanLy);
//   }
// }

let developer1 = new Developer('Bao', 'Code');
console.log(developer1);
developer1.displayInfo();

let developer2 = new Developer('Hoang', 'Sleep');
console.log(developer2);
developer2.displayInfo();

let tester1 = new Tester('Tester1', 'Test1');
console.log(tester1);
tester1.displayInfo();

let tester2 = new Tester('Tester2', 'Test2');
console.log(tester2);
tester2.displayInfo();

let manager1 = new Manager('Manager1', 'Manage1');
console.log(manager1);
manager1.displayInfo();
manager1.addEmployee('nhanvien4');

let manager2 = new Manager('Manager2', 'Manage2');
console.log(manager2);
manager2.displayInfo();
manager2.addEmployee('nhanvien4');
