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


    //모달
    $('.modal2').featherlight();

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


            //상단 select cinema
            var $rCinema=$("#reserve_quick .r_select .r_date")
            var $sDay=$rCinema.find("a").first();
            var $go=$rCinema.find("a").last();
            var $change;

            $sDay.on("click",function (e){
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
                var change=$(this).text();
                $sDay.focus().text(change).closest("a").next().stop().slideUp();
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