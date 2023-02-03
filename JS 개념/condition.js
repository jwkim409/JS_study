const x = "10"

if ( x == 10){
  console.log("x is 10")
}

// 자료형까지 같으면 ===. string과 number은 다르니까 아래 코드는 실행 x
if ( x === 10){
  console.log("x is 10")
} else{
  console.log("x is string")
}

const age = 20
let group = ""
if(x > 20){
  group = "senior"
} else {
  group = "junior"
}


// 조건 ? 참일 경우 : 아닐 경우 ;
age > 20 ? group = "senior" : group = "junior";
console.log(group)


// switch  케이스 - 실행 - 브레이크 - 케이스 - 실행 ...

const animal = "dog"

switch (animal){
  case 'lion':  // lion이면
    console.log("big");  // big를 출력하고
    break;  // 멈춤
  case 'monkey':
    console.log("medium");
    break;
   case 'dog':
    console.log("small");
     break;
  case 'cat':
     console.log("small");
     break;
    default:
      console.log("not animal");
      break;
}


// 함수
 const add = function(a,b){return a + b}
 const sum = (a,b) => {return a+b}

//  const sum = function(a){return a+5}   // arrow로(한 줄이면 괄호, 중괄호 생략 가능) ->
//  const sum = a => a+5;

 // 호출
 console.log(add(5,6))
 console.log(sum(1,6))

 // arrow function
//  function(){}
//  () => {}