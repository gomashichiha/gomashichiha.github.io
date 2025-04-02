$(function(){
  var pagetop = $("#pagetop");
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () {
    if($(this).scrollTop() >= 200) {
      pagetop.css( "bottom", "20px" );
    } else {
      pagetop.css( "bottom", "-100px" );
    }
  });
});
$(function() {
  $('a[href^=#]').click(function() {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html,body').animate({
      scrollTop: position
    }, 500, 'swing');
    return false;
  });
});