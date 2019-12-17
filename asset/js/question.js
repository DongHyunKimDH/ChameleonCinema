$(document).ready(function ()
{
        var empJ = /\s/g; // 공백체크
        var nameJ = /^[가-힣]{2,6}$/;
        var mailJ = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        // var phoneJ1 = /^01([0|1|6-9])$/;
        var phoneJ1 = /^(010|011|016|017|018|019)$/;

        var phoneJ2 = /^\d{3,4}$/;
        var phoneJ3 = /^\d{3,4}$/;
        $("#name").blur(function ()
        {
            var nameVal = nameJ.test($("#name").val());
            if(!nameVal)
                alert("이름은 한글 2 ~ 6 글자만 입력할 수 있습니다.");
        });
        $("#phone1").blur(function()
        {
            var phoneVal1 = phoneJ1.test($("#phone1").val());
            if(!phoneVal1)
                alert("휴대폰 번호 첫번째 자리는 010 011 016 ~ 019 만 입력할 수 있습니다.");
        });
        $("#phone2").blur(function()
        {
            var phoneVal2 = phoneJ2.test($("#phone2").val());
            if(!phoneVal2)
                alert("휴대폰 번호 두번째자리는 3~4자리 숫자만 입력할 수 있습니다.");
        });
        $("#phone3").blur(function()
        {
            var phoneVal3 = phoneJ3.test($("#phone3").val());
            if(!phoneVal3)
                alert("휴대폰 번호 세번째자리는 3~4자리 숫자만 입력할 수 있습니다.");
        });
        $("#email").blur(function () 
        {
            var emailVal = mailJ.test($("#email").val());
            if(!emailVal)
                 alert("이메일 형식이 맞지 않습니다.");
        });


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