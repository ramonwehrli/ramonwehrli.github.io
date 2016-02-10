function setHeaderScroll() {
    var height = $(document).outerHeight() - $(window).outerHeight(),
        perc = ($(window).scrollTop()/height*100);
    $('.picture-fixed-top').css({"backgroundPosition": "left "+perc+"%"});
}
