$(document).ready(function()
{

    // Calendar 시작
    var today = new Date();
    var date = new Date();
    var pday = ["일", "월", "화", "수", "목", "금", "토"];
    var chkNumber = 0;
    var pmon = today.getMonth()+1;
    var pdate = today.getDate();
    var todayDate = new Date(today.getFullYear(),today.getMonth()+1,today.getDate())
    var compareDate = new Date(date.getFullYear(),date.getMonth()+1,date.getDate());
    var cliMon = 0, cliDate = 0;
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
              cell.innerHTML = "<button type='button'>"+i+"</button>";
              cnt = cnt + 1;
          if (cnt % 7 == 1) {
            cell.innerHTML = "<button type='button'style='color:#ff0000'>" + i +"</button>"
        }    
          if (cnt%7 == 0){
              cell.innerHTML = "<button type='button'style='color:#0000ff'>" + i +"</button>"           
               row = calendar.insertRow();
          }
          if (today.getFullYear() == date.getFullYear()
             && today.getMonth() == date.getMonth()
             && i == date.getDate()) {
            cell.bgColor = "#dddddd";
           }
         }
    }

    // <,  > 사이 텍스트 오늘날짜로 변경
    $("#timeTable .printDate .pDate .mon").text(pmon);
    $("#timeTable .printDate .pDate .day").text(pdate);
    var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
    // 달력 td 클릭시 이벤트 발생
    $(document).on('click', '#calendar tr td button', function () 
    {
        var pCal = $(".timeTable .printDate button").eq(0)
        $(this).closest(".timeTable").find(".printDate button").eq(0).toggleClass("active");
        if(pCal.hasClass("active"))
            $("#calendar").show();
        else
            $("#calendar").hide();

        cliDate = parseInt($(this).text());
        cliMon = today.getMonth()+1;
        $("#timeTable .printDate .pDate .mon").text(cliMon);
        $("#timeTable .printDate .pDate .day").text(cliDate);
        // lastDate = cliDate;
        // alert(lastDate);
    });
    //다음버튼
    $("#timeTable .printDate button").eq(2).on("click", function()
    {   
        var chkday = parseInt($("#timeTable .printDate .pDate .day").text())
        if(pdate != chkday) pdate = chkday;

        chkNumber++;
        pdate++;

        if(pdate > lastDate.getDate())
        {
            pdate=1;
            pmon++;
            
            if(pmon > 12)
            pmon=1; 
        }

        // $("#timeTable .printDate .pDate").text(pmon+"월 "+pdate+"일 ");
        $("#timeTable .printDate .pDate .mon").text(pmon);
        $("#timeTable .printDate .pDate .day").text(pdate);
    });

    // 이전버튼
    // 막힌부분 이전버튼 클릭 chkNumber로 제어해서 문제생성되는거같음
    // chkNumber가 0이 되었을때 ++ 해주는 구문추가(어디에?)
    $("#timeTable .printDate button").eq(1).on("click",function()
    {
        var chkday = parseInt($("#timeTable .printDate .pDate .day").text())
        if(pdate != chkday) pdate = chkday;
        if(chkNumber==0)
        {
            $(this).attr("disabled",true);
        }
        else
        {
            pdate--;
            chkNumber--;
            $(this).attr("disabled",false);
        }
        
        if(pdate == 0)
        {
            pmon--;
            if(pmon==0)
            pmon=12;
            pdate=lastDate.getDate();
        }
        
        // $("#timeTable .printDate .pDate").text(pmon+"월 "+pdate+"일 ");
        $("#timeTable .printDate .pDate .mon").text(pmon);
        $("#timeTable .printDate .pDate .day").text(pdate);
    });
    


    var _printCal = $(".timeTable .printDate button").eq(0);
    var _prevM = $("#calendar thead tr th").eq(0).children("button");
    var _nextM = $("#calendar thead tr th").eq(2).children("button");
    var _clickTd = $("#calendar tr td button");
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

    /* 동적생성된 되어진 태그에 이벤트를 주는 방식은 조금 다릅니다
    $(document).on('이벤트명', '선택자', function() {});
    그리고 오늘 이전은 캘린더 이전버튼이 동작되지 못하게 추가해 주세요 */


    // Calendar 종료

    function minimap()
    {
        var printSeat = "";
        for(var i=1; i<=10; i++)
        {
            for(var j=1; j<=12; j++)
            {
                printSeat += "<div class='selSeat'></div>";
            }
        }
        document.getElementById("pSe").innerHTML=printSeat;
        for(var k=0; k<24; k++)
        {
            var rand = [Math.floor(Math.random()*120)+1];
            $(".minimap #pSe .selSeat").eq(rand).addClass("scol");
        }
    }
    minimap();

    var _timeList = $("#timeTable .mvListArea .mvTime ul li a");
    _timeList.on("click", function()
    {
        var showMap = $(".minimap").clone();
        $(this).after(showMap).next().show();
        $(this).parent().on("mouseleave",function()
        {
            $(this).find('.minimap').remove();
        });
        return false;
    });
 
});