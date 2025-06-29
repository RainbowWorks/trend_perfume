$(function () {
    $('.mbtn').on('click', function () {
        $('#header .gnb').toggleClass('on')
    });

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('#header .gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('#header .gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('#header .gnb').removeClass('on');
            $('#header .gnb>ul>li ul').removeAttr('style');
        }
    });
});

$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1500,
        // autoplay: {
        //     delay: 3000,
        // }
    });
});
