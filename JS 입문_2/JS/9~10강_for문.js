// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든div에 붙은 show 클래스명 제거
// - div0애 show 클래스명 추가

// tab-content가 여러개니까 eq(0) -> 0번째  querySelectorAll 인덱싱[0]이랑 같음
      // $('.tab-button').eq(0).on('click', function(){
      //   $('.tab-button').removeClass('orange');
      //   $('.tab-button').eq(0).addClass('orange');

      //   $('.tab-content').removeClass('show');
      //   $('.tab-content').eq(0).addClass('show');
      // })

      // $('.tab-button').eq(1).on('click', function(){
      //   $('.tab-button').removeClass('orange');
      //   $('.tab-button').eq(1).addClass('orange');

      //   $('.tab-content').removeClass('show');
      //   $('.tab-content').eq(1).addClass('show');
      // })

      // $('.tab-button').eq(2).on('click', function(){
      //   $('.tab-button').removeClass('orange');
      //   $('.tab-button').eq(2).addClass('orange');

      //   $('.tab-content').removeClass('show');
      //   $('.tab-content').eq(2).addClass('show');
      // })

// 자주 쓰는 셀렉터 변수에 넣어쓰기  var 버튼 = $('.tab-button')



// for 반복문: 코드 복붙해줌(반복실행)
// for (복붙횟수){
//   console.log('안녕'); }

  for (let i = 0; i < $('.tab-button').length; i++){  // html의 tab-button 숫자만큼 복붙. var은 호이스팅 되어서ㄴ
    $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  });
}
