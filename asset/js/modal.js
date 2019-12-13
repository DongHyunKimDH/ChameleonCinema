$(document).ready(function () {
    $('.modal').featherlight();
    $('.modal2').featherlight();

    //상단 select date
    var $rDate = $("#reserve_quick .r_select .r_date")
    var $sDay = $rDate.find("a").first();

    $sDay.on("click", function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).next().on("mouseleave", function () {
            $(this).stop().slideUp();
        });
    });

    $rDate.find("a:first,a:last").on("blur", function () {
        setTimeout(function () {
            if (!$rDate.find("a").is(":focus")) $rDate.find("ul").stop().slideUp();
        }, 1000);
    });

    $rDate.find("ul>li>a").on("click", function (e) {
        e.preventDefault();
        var change = $(this).text();
        $sDay.focus().text(change).closest("a").next().stop().slideUp();
    });

    //상단 select number
    var $rNum = $("#reserve_quick .r_select .r_number")
    var $number = $rNum.find("a").first();

    $number.on("click", function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).next().on("mouseleave", function () {
            $(this).stop().slideUp();
        });
    });

    $rNum.find("a:first,a:last").on("blur", function () {
        setTimeout(function () {
            if (!$rNum.find("a").is(":focus")) $rNum.find("ul").stop().slideUp();
        }, 1000);
    });

    $rNum.find("ul>li>a").on("click", function (e) {
        e.preventDefault();
        var change2 = $(this).text();

        $number.focus().text(change2 + "명").closest("a").next().stop().slideUp();
    });

    //상단 select cinema
    var $rCinema = $("#reserve_quick .r_select .r_cinema")
    var $rCin = $rCinema.find("a").first();

    $rCin.on("click", function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).next().on("mouseleave", function () {
            $(this).stop().slideUp();
        });
    });

    $rCinema.find("a:first,a:last").on("blur", function () {
        setTimeout(function () {
            if (!$rCinema.find("a").is(":focus")) $rCinema.find("ul").stop().slideUp();
        }, 1000);
    });

    $rCinema.find("ul>li>a").on("click", function (e) {
        e.preventDefault();
        var rChange = $(this).text();
        $rCin.focus().text(rChange).closest("a").next().stop().slideUp();

    });
    //모달 클릭이벤트
    var $rModalTk = $('.button');

    $rModalTk.on('click', function () {
        $(this).closest('ul').siblings('.r_select_btn').find('.r_seat').css({
            background: '#eb651e',
            color: '#ffffff',
            border: 'none'
        });
    });
});