function showData(name, age){
  alert(`${name}님은 ${age}세입니다.`);
}

function getData(callback) {
  let userName = prompt("이름을 입력하세요.");
  let userAge = prompt("나이를 입력하세요.");
  callback(userName, userAge);
}

getData(showData)