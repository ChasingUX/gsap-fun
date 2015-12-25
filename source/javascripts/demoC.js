$(function() {
  var $body = $('body'), 
    $circleWrap = $('.circleWrap'),
    $circles = $('.circles'),
    $header = $('.demos_circles h1'),
    $ring1 = $('.ring1'),
    $ring2 = $('.ring2'),
    $ring3 = $('.ring3'),
    $ring4 = $('.ring4'),
    $ring5 = $('.ring5'),
    middle = ($(window).height() / 2 )-25,
    tlSlides;

  tlSlides = new TimelineMax({paused: false});

  tlSlides
    .fromTo($ring1, 4, {autoAlpha: 0, strokeDasharray: 410, strokeDashoffset: 410}, {autoAlpha: 1, strokeDasharray: 410, strokeDashoffset: 0, ease: Power2.easeOut})
    .fromTo($ring2, 3.75, {autoAlpha: 0, strokeDasharray: 655, strokeDashoffset: 655}, {autoAlpha: 1, strokeDasharray: 655, strokeDashoffset: 0, ease: Power2.easeOut}, '-=4')
    .fromTo($ring3, 3.9, {autoAlpha: 0, strokeDasharray: 895, strokeDashoffset: 895}, {autoAlpha: 1, strokeDasharray: 895, strokeDashoffset: 0, ease: Power2.easeInOut},'-=4.9')
    .fromTo($ring4, 3, {autoAlpha: 0, strokeDasharray: 1140, strokeDashoffset: 1140}, {autoAlpha: 1, strokeDasharray: 1140, strokeDashoffset: 0, ease: Power2.easeOut},'-=3.7')
    .fromTo($ring5, 3.8, {autoAlpha: 0, strokeDasharray: 1400, strokeDashoffset: 1400}, {autoAlpha: 1, strokeDasharray: 1400, strokeDashoffset: 0, ease: Power3.easeInOut},'-=4.2')
    .to($circles, 3, {y: middle, ease: Back.easeInOut.config(1.4)},'-=1')
    .fromTo($header, 2.3, {autoAlpha: 0,scale: 0.75, y: '10' }, {autoAlpha: 1, scale: 1, y: '0', ease: Power3.easeInOut},'-=1.9')

});
