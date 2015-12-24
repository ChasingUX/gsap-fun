//= require_tree .

$(function() {
  var $body = $('body'), 
    $header = $('.header'),
    $box = $('.box'),
    $boxBorder = CSSRulePlugin.getRule('.box:after'),
    $projects = $('.projects'),
    $project = $projects.find('div'),
    $grid = $('.grid'),
    tlA, tlB, masterTimeLine;


  // .set sets css porperties without animating it
  // we use 'add' as a marker to fine tune exact timing of events. We can later use these flags to time animations like 'headerLoaded-=1.2' (1.2s before headerLoaded is complete) or we can just use 'headerLoaded' to fire when headerLoaded is complete 
  // add also allows us to nest another timeline in a timeline eg: .add(tlB, "+=2") which delas 2s from spot in tl

  // use To when we are happy with previous position / state
  // use fromTo when we want complete contorl over before and after states

  // if we manipulate multiple values, we must place them in an array []

  // if we want to move by a percentage of the screen, we can use xPercent and yPercent

  // .call allows u sto trigger a function within the timeline

  tlA = new TimelineMax();
  tlB = new TimelineMax();
  masterTimeLine = new TimelineMax({repeat: -1, repeatDelay: .8});

  tlA
    .fromTo($grid, 1, {autoAlpha: 0, scale: 0.5}, {autoAlpha: 1, scale: 1});

  tlB
    // .set([$header, $project], {autoAlpha: 0})
    .fromTo($header, 1.5, {autoAlpha: 0, y: '-=20'}, {autoAlpha: 1, y: '0'}, '-=.2')
    .add('headerLoaded')
    .staggerFromTo($project, 0.4, {autoAlpha: 0, y: '+=10'}, {autoAlpha: 1, y: '0'}, 0.05, 'headerLoaded-=1.2')
    .fromTo($boxBorder, 1.5, {cssRule:{y: '-=20', autoAlpha: 0}}, {cssRule:{y: '0', autoAlpha: 1}}, 'headerLoaded-=.7')
    .to($box, 3.4, {rotation: "+=360", padding: "+=20", ease: Elastic.easeInOut}, 'headerLoaded-=.7')
    .to($header, 3.4, {fontSize: "+=10", ease: Elastic.easeInOut}, 'headerLoaded-=.7')
    .to($box, 1.3, {yPercent: "-200", ease: Power1.easeOut}, '-=.5');

  masterTimeLine
    .add(tlB);
});