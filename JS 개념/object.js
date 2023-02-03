// Object  key :value

const animal = {
  name: "monkey",
  weight: 10,
  food: ["banana", "grape", "nuts"],
  location: {
    contury: "Kongo",
    isAfrica: true,
  },
}

console.log(animal.food[1]) // grape


// Json 데이터 형식.
const animalJson = JSON.stringify(animal);
console.log(animalJson)  // {"name":"monkey","weight":10,"food":["banana","grape","nuts"],"location":{"contury":"Kongo","isAfrica":true}}

console.log(JSON.parse(animalJson).name);  // monkey