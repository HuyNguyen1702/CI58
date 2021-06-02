class Manager{
    nhanVienQuanLy = [
      'nhanvien1',
      'nhanvien2',
      'nhanvien3'
    ]
  
    constructor(name, taskList) {
      super(name, taskList);
    }
  
    addEmployee(employee) {
      this.nhanVienQuanLy.push(employee);
      console.log('Danh sach nhan vien quan ly: ' + this.nhanVienQuanLy);
    }
  }

export default Manager;