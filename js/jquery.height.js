// インラインフレームの高さを決定

$(window).on('load resize', function () {
    var b = $("#wrapper").height(),
        h = $("header").outerHeight(true),
        f = $("footer").outerHeight(true);
    $("#contents").css("height", b - h - f + "px");
});