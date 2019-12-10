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

});