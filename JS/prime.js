const number = parseInt(prompt("자연수를 입력하세요."));
let isPrime;

if (number === 1) {
  document.write(`${number}은(는) 소수도, 합성수도 아닙니다.`);
} else if (number === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {  // for (초깃값; 조건; 증가식) 초깃값 = 2(2부터 시작)
    if (number % i === 0) {  //나누어 떨어지는 수가 있다면
      isPrime = false;  // 소수가 아니다
      break; // for문 빠져나옴
    }
    else {
      isPrime = true;
    }
  } 
}

if (isPrime) {
  document.write(`${number}은(는) 소수입니다.`);
} else {
  document.write(`${number}은(는) 소수가 아닙니다.`);
}