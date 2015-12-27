$(function() {
  var $body = $('body'), 
    $circles = $('.circles'),
    $header = $('.demos_circles h1'),
    $smallRing = $('.ring'),
    $ring1 = $('.ring1'),
    $ring2 = $('.ring2'),
    $ring3 = $('.ring3'),
    $ring4 = $('.ring4'),
    $ring5 = $('.ring5'),
    ring1Width = getWidth($ring1),
    ring2Width = getWidth($ring2),
    ring3Width = getWidth($ring3),
    ring4Width = getWidth($ring4),
    ring5Width = getWidth($ring5),
    middle = ($(window).height() / 2 )-25,
    docHeight = $(document).height(),
    ringRoom = $ring5.height() / 2,
    navHeight = $('nav').height(),
    headerHeight = docHeight - ringRoom - navHeight,
    tlSlides;

  $(".circleWrap header").css('height', headerHeight)


  tlSlides = new TimelineMax({paused: false});
  
  function getWidth(selector){
    var width = selector.css('width');
    return width;
  }

  function calcCircum(itemWidth) {
    var radius = parseInt(itemWidth) / 2;
    var circum = Math.PI * 2 * radius;
    return circum;
  }
  
  function fillBlue(){
    $ring1.find('circle').attr('style', "fill: #2B63FF");
  }

  tlSlides
    .add('startAni')
    .fromTo($ring1, 3, {autoAlpha: 0, strokeDasharray: calcCircum(ring1Width), strokeDashoffset: calcCircum(ring1Width)}, {autoAlpha: 1, strokeDasharray: calcCircum(ring1Width), strokeDashoffset: 0, ease: Power2.easeInOut})
    .fromTo($ring2, 2.6, {autoAlpha: 0, strokeDasharray: calcCircum(ring2Width), strokeDashoffset: calcCircum(ring2Width)}, {autoAlpha: 1, strokeDasharray: calcCircum(ring2Width), strokeDashoffset: 0, ease: Power2.easeInOut}, 'startAni+=.3')
    .fromTo($ring3, 2.2, {autoAlpha: 0, strokeDasharray: calcCircum(ring3Width), strokeDashoffset: calcCircum(ring3Width)}, {autoAlpha: 1, strokeDasharray: calcCircum(ring3Width), strokeDashoffset: 0, ease: Power2.easeInOut},'startAni+=.6')
    .fromTo($ring4, 1.8, {autoAlpha: 0, strokeDasharray: calcCircum(ring4Width), strokeDashoffset: calcCircum(ring4Width)}, {autoAlpha: 1, strokeDasharray: calcCircum(ring4Width), strokeDashoffset: 0, ease: Power2.easeInOut},'startAni+=.9')
    .fromTo($ring5, 1.5, {autoAlpha: 0, strokeDasharray: calcCircum(ring5Width), strokeDashoffset: calcCircum(ring5Width)}, {autoAlpha: 1, strokeDasharray: calcCircum(ring5Width), strokeDashoffset: 0, ease: Power2.easeInOut},'startAni+=1.2')
    .fromTo($smallRing, 1.3, {autoAlpha: 0, scale: 0 }, {autoAlpha: 1, scale: 1, ease: Back.easeInOut.config(4)},'-=1.3')
    .to($circles, 3, {y: middle, ease: Back.easeInOut.config(1.4)},'-=1')
    .fromTo($header, 2.3, {autoAlpha: 0,scale: 0.75, y: '10' }, {autoAlpha: 1, scale: 1, y: '0', ease: Power3.easeInOut},'-=1.9')

});
