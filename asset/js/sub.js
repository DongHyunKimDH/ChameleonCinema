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
    var _quesForm = $("#quesForm .selAreaWrap");
    var _btn = _quesForm.find("button").first();
    var _ulBtn = $("#quesForm .ulBtn");
    
    _btn.on("click",function(e)
    {
        e.preventDefault();
        $(this).next().stop().slideDown();
        // $(this).toggleClass("active");

        $(this).next().on("mouseleave",function()
        {
            $(this).stop().slideUp();
        });
        _ulBtn.find("button:first, button:last").on("blur", function()
        {
            setTimeout(function()
            {
                if(!_ulBtn.find("button").is(":focus"))
                _ulBtn.stop().slideUp(); 
            },1000);
        });
        _quesForm.find("")
    })
    // Question 이벤트 종료
});