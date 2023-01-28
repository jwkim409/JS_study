let n = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;

if(n !== null && n > 1){
 for(let i = 1; i <= n; i++) {
  if(i % 2 == 1) { // 값만 1이면. === 아님
    continue; // 홀수이면 건너뛰고 반복문 맨 앞으로 돌아가 다음 과정 반복
  }
  sum += i; // 짝수면 현재 값과 더하기
  document.write(`${i} ----- ${sum} <br>`); // 화면에 나타냄
  }
}