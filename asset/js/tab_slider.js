$(document).ready(function() {
    /* 
    bx슬라이더는 처음 로딩시 display:none으로 되어있으면 슬라이더가 보여지지 않으니, 높이값을 0으로 잡는 오류 : 
    각각을 변수로 받아서  => 변수명.reloadSlider(); 
    그러면 클릭할때 마다 제대로 인식
    단) 가장 처음은 보여지지 않으므로 첫번째 탭을 강제 클릭시킨다 => $('.tab').first().trigger('click');
    */
    var tabSlider0 = $('.media_slider .mediSlide0').bxSlider({
        mode: 'horizontal', //'horizontal'(기본값), 'vertical', 'fade'
        //auto: false,     //false(기본값), 자동실행을 원하면 추가
        //pause: 2000,    //4000(4초 기본값), 1초 = 1000
        //autoControls: false, //시작과 정지버튼 생성, 기본값 false
        ariaLive: true, //스크린리더 사용자에게 변경된 정보를 알릴지 여부
        ariaHidden: true, //보여지는 슬라이더 내요인지 여부
        prevText: '이전 슬라이더 보기',
        nextText: '다음 슬라이더 보기',
        startText: '애니메이션 시작',
        stopText: '애니메이션 정지',
        slideWidth: 226, //한줄에 여러개 보여질때 li의 너비 축소값
        minSlides: 3, //한줄에 보여질 최소 슬라이더 개수
        maxSlides: 3, //한줄에 보여질 최대 슬라이더 개수
        moveSlides: 1, //이전, 다음 클릭하면 움직일 개수
        slideMargin: 8 //슬라이드 간의 여백
    });
    var tabSlider1 = $('.media_slider .mediSlide1').bxSlider({
      mode: 'horizontal', 
      ariaLive: true, 
      ariaHidden: true, 
      prevText: '이전 슬라이더 보기',
      nextText: '다음 슬라이더 보기',
      startText: '애니메이션 시작',
      stopText: '애니메이션 정지',
      slideWidth: 226, 
      minSlides: 3, 
      maxSlides: 3, 
      moveSlides: 1, 
      slideMargin: 8 
    });
    var tabSlider2 = $('.media_slider .mediSlide2').bxSlider({
      mode: 'horizontal', 
      ariaLive: true, 
      ariaHidden: true, 
      prevText: '이전 슬라이더 보기',
      nextText: '다음 슬라이더 보기',
      startText: '애니메이션 시작',
      stopText: '애니메이션 정지',
      slideWidth: 226, 
      minSlides: 3, 
      maxSlides: 3, 
      moveSlides: 1, 
      slideMargin: 8 
    });
    var tabSlider3 = $('.media_slider .mediSlide3').bxSlider({
      mode: 'horizontal', 
      ariaLive: true, 
      ariaHidden: true, 
      prevText: '이전 슬라이더 보기',
      nextText: '다음 슬라이더 보기',
      startText: '애니메이션 시작',
      stopText: '애니메이션 정지',
      slideWidth: 226, 
      minSlides: 3, 
      maxSlides: 3, 
      moveSlides: 1, 
      slideMargin: 8 
    });
    //$('.bx-controls-direction a').wrap('<div class="white"></div>');
    $('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr('tabIndex', 0);
    //의미적 표현(접근성-state) : 탭버튼 : aria-selected, 탭패널 : aria-hidden
    $('.tab:first-of-type').attr('aria-selected', true);
    $('.tabpanel:first-of-type').attr('aria-hidden', false);

    /* 2) 탭버튼에서 키보드를 누르는 이벤트(keydown) - 키보드 제어*/
    $('.tab').on('keydown', function (e) {
      var key = e.keyCode;
      console.log(key); //왼쪽방향키 37 , 오른쪽 방향키 39, 스페이스바 32 , 엔터 13
      switch (key) {
        /* a) 왼쪽 방향키 */
        case 37:    //왼쪽 방향키
          $(this).attr('tabIndex', -1);
          if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
          else $(this).prev().attr('tabIndex', 0).focus();
          break;
        /* b) 오른쪽 방향키 */
        case 39:  //오른쪽 방향키
          $(this) .attr('tabIndex', -1);
          if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
          else $(this).next().attr('tabIndex', 0).focus();
          break;
        case 36:  //HOME 키는 가장 처음으로
          e.preventDefault();
          $(this).siblings('.first').attr('tabIndex', 0).focus();
          break;
        case 35:  //END 키는 가장 마지막으로
          e.preventDefault();
          $(this).siblings('.last').attr('tabIndex', 0).focus();
          break;
        /* c) enter, spacebar 탭실행(탭 선택, 탭 클릭) */
        case 32:  //스페이스바
        case 13:  //엔터
          var $tg = $(this);
          activeOn($tg);
          break;
      }
    });

    //3) 탭 클릭 이벤트
    $('.tab').on('click', function () {
      var $tg = $(this);
      activeOn($tg);

      var tgNum = $tg.index();
      switch (tgNum) {
        case 0: 
          tabSlider0.reloadSlider();
          break;
        case 1: 
          tabSlider1.reloadSlider();
          break;
        case 2: 
          tabSlider2.reloadSlider();
          break;
        default: 
          tabSlider3.reloadSlider();
          break;
      }
      $('.bx-controls-direction a').wrap('<div class="white"></div>');
    });
    //첫번째 탭을 강제 클릭
    $('.tab').first().trigger('click');

    function activeOn($target) {
      $target.addClass('active').attr({'aria-selected': true, tabIndex: 0}).siblings().removeClass('active').attr({'aria-selected': false, tabIndex: -1});
      $('#' + $target.attr('aria-controls')).addClass('active').attr({'aria-hidden': false, tabIndex: 0}).siblings('.tabpanel').removeClass('active').attr({'aria-hidden': true, tabIndex: -1});
    }
});