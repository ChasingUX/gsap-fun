$(function() {

var $body = $('body'), 
    $logo = $('.logo'), 
    $grid = $('.grid'),
    $logoArc = $('.arc'),
    $mark = $('.mark'),
    $typePath = $('.type path'),
    $type = $('.type'),
    $rect = $('rect'),
    $page = $('.page'),
    $rect1 = $('.rect1'),
    $rect2 = $('.rect2'),
    $rect3 = $('.rect3'),
    $quotes = $('blockquote'),
    $quotesReverse = $quotes.get().reverse(),
    tlMaster, tlBack;

  

  TweenLite.fromTo($grid, 1, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1});

  tlMaster = new TimelineMax({delay:.3, onComplete: function(){
    setTimeout(function(){
      repeat();
    }, 2000);
  }});

  tlBack = new TimelineMax({paused: true});

  tlMaster
    .set($mark, {x: 370})
    .set($logo, {top: '50%', autoAlpha: 1})
    .fromTo($logoArc, 3, {autoAlpha: 1, strokeDasharray: 1230, strokeDashoffset: 1230}, {autoAlpha: 1, strokeDasharray: 1230, strokeDashoffset: 0, ease: Power1.easeInOut})
    .add('arcIn')
    .fromTo($rect1, 1, {autoAlpha: 1, strokeDasharray: 217, strokeDashoffset: 217}, {autoAlpha: 1, strokeDasharray: 217, strokeDashoffset: 0, ease: Power1.easeInOut}, 'arcIn-=2.2')
    .fromTo($rect2, 1, {autoAlpha: 1, strokeDasharray: 182, strokeDashoffset: 182}, {autoAlpha: 1, strokeDasharray: 182, strokeDashoffset: 0, ease: Power1.easeInOut}, 'arcIn-=2')
    .fromTo($rect3, 1, {autoAlpha: 1, strokeDasharray: 140, strokeDashoffset: 140}, {autoAlpha: 1, strokeDasharray: 140, strokeDashoffset: 0, ease: Power1.easeInOut}, 'arcIn-=1.8')
    .to([$rect,$logoArc], .3, {fill: '#ffffff', ease: Power2.easeOut}, 'arcIn-=.8')
    .to($mark, 1.1, {x: 0, ease: Power3.easeInOut}, 'arcIn-=1.4')
    .fromTo($typePath, .8, {autoAlpha: 0, fill: "#ffffff", x: -20}, {autoAlpha: 1, x: 0, ease: Power1.easeOut}, 'arcIn-=.8')
    .to($body, .5, {backgroundColor: "#2B63FF", ease: Power0.easeNone},'-=1.1')
    .to($logo, 1.6, {scale: .6, top: '30px', ease: CubicBezier.config(0.51, -0.47, 0.21, 1)})
    .fromTo($page, 1, {autoAlpha: 0, y: 40}, {autoAlpha: 1, y: 0},'-=.7')
    .staggerFromTo($quotes, 2, {autoAlpha: 0, y: '+=15'}, {autoAlpha: 1, y: '0', onStart: function(){$body.addClass('logoLoaded')}}, 0.4, '-=.7');


  function repeat() {
    var $logo = $('.logo'),
    $quotes = $('blockquote'),
    $quotesReverse = $quotes.get().reverse();

    if($('body').hasClass('logoLoaded')) {
      $body.removeClass('logoLoaded');

      tlBack
        .to($logo, 1.4, {top: '-=160', ease: CubicBezier.config(0.7, -0.42, 0.55, 1)})
        .to($body, .5, {backgroundColor: "#ffffff", ease: Power0.easeNone},'-=.9')
        .staggerFromTo($quotesReverse, 1, {autoAlpha: 1, y: '0'}, {autoAlpha: 0, y: '+=25'}, 0.1, '-=.9')
        .fromTo($page, 1.2, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 140},'-=.9')

        .set($quotes, {y: 0})
        .set($typePath, {autoAlpha: 0})
        .set($rect1, {strokeDasharray: 217, strokeDashoffset: 217})
        .set($rect2, {strokeDasharray: 182, strokeDashoffset: 182})
        .set($rect3, {strokeDasharray: 140, strokeDashoffset: 140})
        .set($logoArc, {strokeDasharray: 1230, strokeDashoffset: 1230, onComplete: function(){
          tlBack.add(tlMaster);
        }})

      tlBack.resume();
    }
  } 
  
  $('.logo').on('click', function(){repeat()})
});

