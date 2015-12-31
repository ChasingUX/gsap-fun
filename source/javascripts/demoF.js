$(function() {

var $body = $('body'), 
    $grid = $('.grid'),
    $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $d = $('.d'),
    $stack = $('.Stack'),
    $holder = $('.Stack-holder'),
    $stackWrap = $('.Stack-wrap'),
    $slideNotFirst = $stackWrap.find('.Stack-sheet').slice(1),
    $slide = $stackWrap.find('.Stack-sheet'),
    $before = CSSRulePlugin.getRule(".Stack-sheet:before"),
    $after = CSSRulePlugin.getRule(".Stack-sheet:after"),
    $stackHeight = 375,
    $halfHeight = $stackHeight / -4,
    tlOpen;

  TweenLite.fromTo($grid, 1, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1});

  $('.grow').on('click', function(){
    

    if($body.hasClass('gridOpen')) {
      $(this).text('Grow');
      tlOpen.reverse(0);
    } else {
      $(this).text('Shrink');
      tlOpen = new TimelineMax();

      tlOpen
        .to($d, 0.9, {y: '+=140', ease: Power3.easeOut}, 0.1)
        .to($c, 0.9, {y: '+=95', ease: Power3.easeOut}, 0.2)
        .to($b, 0.9, {y: '+=50', ease: Power3.easeOut}, 0.3)
        .to($holder, 1.4, {height: $stackHeight, ease: CubicBezier.config(0.9, 0, 0.46, 1)}, '-=1.9')
        .to($stack, 1.4, {y: $halfHeight, ease: CubicBezier.config(0.9, 0, 0.46, 1)}, '-=1.9')
        //.set($slide, {background: 'none'}, 'expanded')
        //.to([$before, $after], 1, {cssRule:{transform:"rotateX(68deg) rotateY(0deg) rotateZ(135deg) translate(0) scale3d(1, 1, 1)"}, ease: Power3.easeInOut}, '-=1')
        //.set($slide, {background: 'linear-gradient(45deg, #278DF4 0%, #278DF4 100%)'}, '-=1')
    }
    $body.toggleClass('gridOpen');
  });

  $slide.hover(function(){
    if($body.hasClass('gridOpen')) {
      TweenLite.to($(this), .5, {left: '40px', top: '15px', ease: Power3.easeInOut});
    } 
  }, function(){
    if($body.hasClass('gridOpen')) {
      TweenLite.to($(this), .5, {left: '0', top: '0', ease: Power3.easeInOut});
    }   
  });

});

