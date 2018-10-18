//Code for smooth sliding start
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });




});
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".goTop").fadeIn(500);
    } else {
        $(".goTop").fadeOut(500);
    }
})
$(document).ready(function () {
    $(".goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });
});
