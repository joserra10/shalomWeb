$(window).scroll(function () {
    if ($(window).scrollTop() >= 350) {
        $('#navbar').removeClass("nav-transparent", 1000);
    } else {
        $('#navbar').addClass("nav-transparent", 1000);
    }
});