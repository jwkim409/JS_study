// for (let i = 0; i < $('.tab-button').length; i++){  // html의 tab-button 숫자만큼 복붙. var은 호이스팅 되어서ㄴ
//   $('.tab-button').eq(i).on('click', function(){
//   탭열기(i)
// });
// }


// html태그에 유저는 볼 수 없게 몰래 정보 숨기기 가능 -> data-작명="값"
// 숨겼던 자료 출력은 셀렉터.dataset.자료이름
// document.querySelector('.tab-button').dataset.id   // '0'

$('.list').click(function(e){   // Jquery에서 이벤트 on 생략ㄱㄴ,  셀렉터.click(function(){});
  탭열기(e.target.dataset.id)    // 탭열기(지금 누른 버튼에 숨어있던 data-id)
})




// 탭 기능 다르게 만들기 -> 이벤트 리스너 1개만 쓰기
$('.list').click(function(e){
  if (e.target == document.querySelectorAll('.tab-button')[0])
    탭열기(0)
});



function 탭열기(숫자){   // 축약할 코드에 변수가 있으면, 변수를 파라미터로 바꿔야 함
$('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}


