// 스코프
let globalMessage = 'global'; // 글로벌 스코프
function printMessage() {
  let message = 'hello';
  console.log(message); // 지역(local) 스코프, 지역이어서 안에서만 볼 수 있음. (밖에서 출력하면 에러)
  console.log(globalMessage);
}
printMessage();

// console.log(message);  // 로컬은 밖에서 출력하면 에러


// Early return, early exit
// 1) bad
function upgradUser(user){
  if (user.point <= 10){
    // --조건--
  }
}

// 2) good
function upgradUser(user){
  if (user.point <= 10){  // 조건이 맞지 않을 때는 빨리 리턴을 해서 함수 종료하고 조건 맞을 때만 로직 실행
    return;
  }
  // --조건--
}


// 익명 함수
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();


// 콜백 (상황에 맞으면 전달된 함수를 불러)
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}

const printYes = function (){   // anonymous function, yes를 출력하는 함수 할당
  console.log('yes');
};

const printNo = function print(){   // named function, no를 출력하는 함수 할당
  console.log('no');
}
randomQuiz('wrong', printYes, printNo); // no 출력
randomQuiz('love you', printYes, printNo); // 정답이니 yes 출력


// arrow function
// const simplePrint = function () {
//   console.log('simplePrint');
// };
const simplePrint = () => console.log('simplePrint')