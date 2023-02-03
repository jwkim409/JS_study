const animals = [
  { name: "monkey", size: "medium", isAggressive: false, weight: 20},
  { name: "lion", size: "big", isAggressive: true, weight: 30},
  { name: "tiger", size: "big", isAggressive: true, weight: 30},
  { name: "dog", size: "big", isAggressive: true, weight: 20},
  { name: "cat", size: "small", isAggressive: false, weight: 10},
]

// 배열 선언할 때는 복수로(animals)
console.log(animals)


// forEach
animals.forEach(function(animal, index){
  console.log(animal, index)
})

// map 배열 재정의 할 때
const mappedAnimal = animals.map(function(animal){
  return animal.name
})
console.log(mappedAnimal)

// filter 필터
const filteredAnimal = animals.filter(animal=>{
  return animal.size === 'big'
})
console.log(filteredAnimal)

// reduce 배열의 합,  acc = 쌓이는 값. 초깃값 0 지정
const reduceAnimal = animals.reduce((acc, cur)=>{
  return acc + cur.weight // 첫 번째 monkey가 돌면서 0에다가 더해지고, 두 번째 돌 때 더해진 값이 acc에 나옴. 반복
},0)
console.log(reduceAnimal)


// while
let i = 3;
while (i>0){    // i > 0이 false로 나올 때 까지 무한대로 반복함.
  console.log(`while: ${i}`);
  i--;
}

// do while
do {
  console.log(`do wjile: ${i}`);
  i--;   // 블럭이 먼저 실행되고 조건을 검사하고 이 때 멈춤.
} while (i>0);

// for loop
for (i = 3; i > 0; i--){
  console.log(`for: ${i}`);
}




//old
// for(let i=0; i < animals.length; i++){
//   console.log(animals[i])
// }

// for(let animal of animals){
//   console.log(animal.size)
// }

// let i;
// while(i < 10){

//   i++;
// }


