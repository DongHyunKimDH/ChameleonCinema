$(document).ready(function()
{
    // FAQ 질문글 이벤트 시작
    var _boardList = $("#boardArea .boardList");
    
    _boardList.find("a").on("click",function()
    {
        $(this).find(".boardHead3").toggleClass("hoverColor");
        $(this).next().toggleClass("detailVisible");
        if($(this).next().hasClass("detailVisible"))
            $(this).attr("title","질문 상세접기");
        else
            $(this).attr("title","질문 상세보기");

        

        return false;
    });
    // FAQ 질문글 이벤트 종료

    // Question 이벤트 시작
    var _quesForm = $("#quesForm .selFirst");
    var _quesForm2 = $("#quesForm .selSecond");
    var _quesForm3 = $("#quesForm .quesType");
    var _ulBtn = $("#quesForm .ulBtn");
    var _ulBtn2 = $("#quesForm2 .ulBtn");
    var _ulBtn3 = $("#_quesForm3 .selType");
    var _btn = _quesForm.find("button").first();
    var _btn2 = _quesForm2.find("button").first();
    var btn3 = _quesForm3.find("button").first();

    //문의유형 클릭 이벤트
    // if ( $(this).is(':animated') ) return false;
    btn3.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).toggleClass("active");
        

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
            $(this).prev().removeClass("active");
        });
        _ulBtn3.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                
                if(!_ulBtn.find("button").is(":focus"))
                _ulBtn.stop().slideUp(); 
            },1000);
        });
    });

    // 지점, 영화관 선택 이벤트
    _btn.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).toggleClass("active");

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
            $(this).prev().removeClass("active");
        });
        _ulBtn.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                if(!_ulBtn.find("button").is(":focus"))
                _ulBtn.stop().slideUp(); 
            },1000);
        });
    })
    _btn2.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).toggleClass("active");

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
            $(this).prev().removeClass("active");
        });
        _ulBtn2.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                if(!_ulBtn2.find("button").is(":focus"))
                _ulBtn2.stop().slideUp(); 
            },1000);
        });
    })

    // textarea 글자수 카운트
    $("#quesTarea").keyup(function()
    {
        var print = $(this).val().length;
        $("#quesTarea + p span").text(print);
    });
    
    // Question 이벤트 종료

    // Calendar 시작
    var today = new Date();
    var date = new Date();
    var pday = ["일", "월", "화", "수", "목", "금", "토"];
    function prevCalendar() 
    {
    // 이전 달을 today에 값을 저장하고 달력에 today를 넣어줌
    //today.getFullYear() 현재 년도//today.getMonth() 월  //today.getDate() 일 
    //getMonth()는 현재 달을 받아 오므로 이전달을 출력하려면 -1을 해줘야함
     today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
     buildCalendar(); //달력 cell 만들어 출력 
    }

    function nextCalendar() 
    {
        // 다음 달을 today에 값을 저장하고 달력에 today 넣어줌
        //today.getFullYear() 현재 년도//today.getMonth() 월  //today.getDate() 일 
        //getMonth()는 현재 달을 받아 오므로 다음달을 출력하려면 +1을 해줘야함
         today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
         buildCalendar();
    }
    function buildCalendar(){
        var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
        //이번 달의 첫째 날
        var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
        //이번 달의 마지막 날
        var tbCalendar = document.getElementById("calendar");
        //날짜를 찍을 테이블 변수
        var tbCalendarYM = document.getElementById("tbCalendarYM");
        //테이블에 정확한 날짜 찍는 변수
         tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월"; 

        while (tbCalendar.rows.length > 2) {
        //열을 지워줌
              tbCalendar.deleteRow(tbCalendar.rows.length-1);
              //테이블의 tr 갯수 만큼의 열 묶음은 -1칸 해줘야지 
            //30일 이후로 담을달에 순서대로 열이 계속 이어진다.
         }
         var row = null;
         row = tbCalendar.insertRow();
         //테이블에 새로운 열 삽입//즉, 초기화
         var cnt = 0;// count, 셀의 갯수를 세어주는 역할
        // 1일이 시작되는 칸을 맞추어 줌
         for (i=0; i<doMonth.getDay(); i++) {
              cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
              cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
         }
        /*달력 출력*/
         for (i=1; i<=lastDate.getDate(); i++) { 
              cell = row.insertCell();
              cell.innerHTML = i;
              cnt = cnt + 1;
          if (cnt % 7 == 1) {
            cell.innerHTML = "<font color=#ff0000>" + i
        }    
          if (cnt%7 == 0){
              cell.innerHTML = "<font color=#0000ff>" + i           
               row = calendar.insertRow();
          }
          if (today.getFullYear() == date.getFullYear()
             && today.getMonth() == date.getMonth()
             && i == date.getDate()) {
            cell.bgColor = "#dddddd";
           }
         }
    }

    var pmon = date.getMonth()+1;
    var pdate = date.getDate();
    var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
    $("#timeTable .printDate button").eq(2).on("click", function()
    {   
        if(pdate > lastDate.getDate())
        {
            pdate=1;
            pmon++;
            if(pmon > 12)
            pmon=1;

        }
        $("#timeTable .printDate .pDate").text(pmon+"월 "+pdate+"일 "+pday[date.getDay()]);
        pdate++;
        
        
    });
 
    

    

    var _printCal = $(".timeTable .printDate button").eq(0);
    var _prevM = $("#calendar thead tr th").eq(0).children("button");
    var _nextM = $("#calendar thead tr th").eq(2).children("button");
    _printCal.on("click",function()
    {
        buildCalendar();
        $(this).toggleClass("active");
        if(_printCal.hasClass("active"))
            $("#calendar").show();
        else
            $("#calendar").hide();
        return false;
    });
    _prevM.on("click",function()
    {
        prevCalendar();
        return false;
    });
    _nextM.on("click",function()
    {
        nextCalendar();
        return false;
    });

    // Calendar 종료

    //모달
    $('.modal2').featherlight();

   //상단 select date
            var $rDate=$("#reserve_quick .r_select .r_date");
            var $sDay=$rDate.find("a").first();
            var $go=$rDate.find("a").last();
            var $change;

            $sDay.on("click",function (e){
                e.preventDefault();
                $(this).next().stop().slideDown();
                $(this).next().on("mouseleave",function (){
                    $(this).stop().slideUp();
                });
            });

            $rDate.find("a:first,a:last").on("blur",function(){
                setTimeout(function  () {
				if (!$rDate.find("a").is(":focus")) $rDate.find("ul").stop().slideUp();
			}, 1000);
            });

            $rDate.find("ul>li>a").on("click",function(e){
                e.preventDefault();
                var change=$(this).text();
                $sDay.focus().text(change).closest("a").next().stop().slideUp();
            });


            //상단 select cinema
            var $rCinema=$("#reserve_quick .r_select .r_cinema")
            var $rCin=$rCinema.find("a").first();
            var $rGo=$rCinema.find("a").last();
            var $ticketC=$(".featherlight-content .r_md .r_ticket .r_t_bottom .r_t_cinema");
            var $rChange;

            $rCin.on("click",function (e){
                e.preventDefault();
                $(this).next().stop().slideDown();
                $(this).next().on("mouseleave",function (){
                    $(this).stop().slideUp();
                });
            });

            $rCinema.find("a:first,a:last").on("blur",function(){
                setTimeout(function  () {
				if (!$rCinema.find("a").is(":focus")) $rCinema.find("ul").stop().slideUp();
			}, 1000);
            });

            $rCinema.find("ul>li>a").on("click",function(e){
                e.preventDefault();
                var rChange=$(this).text();
                $rCin.focus().text(rChange).closest("a").next().stop().slideUp();
                $ticketC.text(rChange);
            });

            //상단 select date
            var $rDate=$("#reserve_quick .r_select .r_date")
            var $sDay=$rDate.find("a").first();
            var $go=$rDate.find("a").last();
            var $change;

            $sDay.on("click",function (e){
                e.preventDefault();
                $(this).next().stop().slideDown();
                $(this).next().on("mouseleave",function (){
                    $(this).stop().slideUp();
                });
            });

            $rDate.find("a:first,a:last").on("blur",function(){
                setTimeout(function  () {
				if (!$rDate.find("a").is(":focus")) $rDate.find("ul").stop().slideUp();
			}, 1000);
            });

            $rDate.find("ul>li>a").on("click",function(e){
                e.preventDefault();
                var change=$(this).text();
                $sDay.focus().text(change).closest("a").next().stop().slideUp();
            });

            //상단 select number
            var $rNum=$("#reserve_quick .r_select .r_number")
            var $number=$rNum.find("a").first();
            var $go=$rNum.find("a").last();
            var $change2;

            $number.on("click",function (e){
                e.preventDefault();
                $(this).next().stop().slideDown();
                $(this).next().on("mouseleave",function (){
                    $(this).stop().slideUp();
                });
            });

            $rNum.find("a:first,a:last").on("blur",function(){
                setTimeout(function  () {
				if (!$rNum.find("a").is(":focus")) $rNum.find("ul").stop().slideUp();
			}, 1000);
            });

            $rNum.find("ul>li>a").on("click",function(e){
                e.preventDefault();
                var change2=$(this).text();

                $number.focus().text(change2+"명").closest("a").next().stop().slideUp();             
            }); 

        
        
});