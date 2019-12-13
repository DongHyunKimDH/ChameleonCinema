$(document).ready(function ()
{
        // 지역선택
        var $area=$("#quesForm .selFirst")
        var $text=$area.find("button").first();
       
               $text.on("click",function (e){
                   e.preventDefault();
                   $(this).next().stop().slideDown();
                   $(this).next().on("mouseleave",function (){
                       $(this).stop().slideUp();
                   });
               });
    
               $area.find("li:first,li:last").on("blur",function(){
                   setTimeout(function  () {
                   if (!$area.find("li").is(":focus")) $area.find("ul>li").stop().slideUp();
               }, 1000);
               });
    
               $area.find("ul>li").on("click",function(e){
                   e.preventDefault();
                   var areaChange=$(this).text();
                   $text.focus().text(areaChange).closest("li").next().stop().slideUp();
               });
    
        // 지역선택
        var $cinemaOf=$("#quesForm .selSecond")
        var $text2=$cinemaOf.find("button").first();
       
               $text2.on("click",function (e){
                   e.preventDefault();
                   $(this).next().stop().slideDown();
                   $(this).next().on("mouseleave",function (){
                       $(this).stop().slideUp();
                   });
               });
    
               $cinemaOf.find("li:first,li:last").on("blur",function(){
                   setTimeout(function  () {
                   if (!$cinemaOf.find("li").is(":focus")) $cinemaOf.find("ul>li").stop().slideUp();
               }, 1000);
               });
    
               $cinemaOf.find("ul>li").on("click",function(e){
                   e.preventDefault();
                   var ofChange=$(this).text();
                   $text2.focus().text(ofChange).closest("li").next().stop().slideUp();
               });
    
       // 문의유형
        var $probOf=$("#quesForm .quesType")
        var $text3=$probOf.find("button").first();
       
               $text3.on("click",function (e){
                   e.preventDefault();
                   $(this).next().stop().slideDown();
                   $(this).next().on("mouseleave",function (){
                       $(this).stop().slideUp();
                   });
               });
    
               $probOf.find("li:first,li:last").on("blur",function(){
                   setTimeout(function  () {
                   if (!$probOf.find("li").is(":focus")) $probOf.find("ul>li").stop().slideUp();
               }, 1000);
               });
    
               $probOf.find("ul>li").on("click",function(e){
                   e.preventDefault();
                   var probChange=$(this).text();
                   $text3.focus().text(probChange).closest("li").next().stop().slideUp();
               });
     
        // textarea 글자수 카운트
        $("#quesTarea").keyup(function()
        {
            var print = $(this).val().length;
            $("#quesTarea + p span").text(print);
        });
        // Question 이벤트 종료
    
});