// function teacher(name, age) {
//   this.name = name;
//   this.age = age;
// }

// teacher.prototype.sayHi = function () {
//   console.log("woshi" + this.name);
// };
// const stu = teacher("zs", 19);
// console.log(stu);

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHI() {
    console.log("woshi" + this.name);
  }
}

const stu = new Teacher("zs", 19);
console.log(stu);
