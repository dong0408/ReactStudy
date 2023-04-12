class Person {
  constructor(name, age) {
    this.name = name;
    this.gender = age;
  }
  eat() {
    console.log("吃");
  }
}

class Chinese extends Person {
  constructor(name, age) {
    super(name, age);
    this.skin = "yellow";
  }
  pingpang() {
    console.log("daqi");
  }
}
const c1 = new Chinese("zs", 67);
console.log(c1);

class Afr extends Person {
  constructor(name, age) {
    super(name, age);
    this.skin = "hei";
  }
  run() {
    console.log("fast");
  }
}

const c2 = new Afr("xh", 78);
console.log(c2);
