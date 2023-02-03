// // 객체 지향 형태
// function Song(title, singer, year){
//   this.title = title; // this는 오브젝트를 가르킴
//   this.singer = singer;
//   this.year = new Date(year);
// }
// //   this.getInfo = function(){
// //     return `이 곡의 제목은 ${this.title}이고, 가수는 ${this.singer}입니다.`;
// //   }
// //   this.getYear = function(){
// //     return this.year.getFullYear();
// //   }
// // }

// Song.prototype.getInfo = function(){
//   return `이 곡의 제목은 ${this.title}이고, 가수는 ${this.singer}입니다.`;
// }
// Song.prototype.getYear = function(){
//   return this.year.getFullYear();
// }

// console.log(Song)

// // constructor function, new 키워드 꼭 쓰기
// const song1 = new Song("All I want is Christmas", "Mariah Carry", "1995-12-25");

// // console.log(song1.getInfo(), song1)
// // console.log(song1.getYear())
// console.log(song1.getInfo())


class Song {
  constructor(title, singer, year){
    this.title = title;
    this.singer = singer;
    this.year = year;
  }
  getInfo(){
    return `이 곡의 제목은 ${this.title}이고, 가수는 ${this.singer}입니다.`;
  }
}

const song1 = new Song("Christmas", "M", "2023-02-03"); // 오브젝트 만들기
console.log(song1.getInfo())




// class는 틀만 정리해 놓음. 한 번만 선언 (정의만 해놓음)
// object는 클래스를 이용하여 만들 수 있음. (데이터ㅇ)
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: hello`);
  }
}

const ellie = new Person('ellie', 20); // 새로운 오브젝트 생성 (new)
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 게터, 세터
class USer{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(value){
    this._age = value < 0 ? 0 : value;  // age는 -1이 될 수 없으니까
  }
}

  const user1 = new USer('Steve', 'Job', -1);
  console.log(user1.age);


  // 상속 (공통되어지는 것들을 일일히 작성하지 않고 extends를 이용하여 동일한 것을 재사용 가능)
  class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }

    draw() {
      console.log(`drawing ${this.color} color of`);
    }

    getArea() {
      return this.width * this.height;
    }
  }

  class Rectangle extends Shape {}
  class Triangle extends Shape {
    getArea() {
      return (this.width * this.height) / 2;
    }
  }

  const rectangle = new Rectangle(20,20,'blue');
  rectangle.draw();
  console.log(rectangle.getArea());  // 사각형 넓이

  const triangle = new Triangle(20,20,'red');
  triangle.draw();
  console.log(triangle.getArea());  // 삼각형 넓이
