$(function() {
  var $body = $('body'), 
    $grid = $('.grid'),
    $boxes = $('.box'),
    tlSlides, tlMaster;


  // .set sets css porperties without animating it

  // we use 'add' as a marker to fine tune exact timing of events. We can later use these flags to time animations like 'headerLoaded-=1.2' (1.2s before headerLoaded is complete) or we can just use 'headerLoaded' to fire when headerLoaded is complete 
  // add also allows us to nest another timeline in a timeline eg: .add(tlB, "+=2") which delas 2s from spot in tl

  // use To when we are happy with previous position / state
  // use fromTo when we want complete contorl over before and after states

  // if we manipulate multiple values, we must place them in an array []

  // if we want to move by a percentage of the screen, we can use xPercent and yPercent

  // .call allows u sto trigger a function within the timeline


  tlMaster = new TimelineMax();

  tlMaster
    .fromTo($grid, 1, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1});

  tlSlides = new TimelineMax({repeat: -1, repeatDelay: .3, paused: false});

  $boxes.each(function(index, element){

    var $box = $(this),
      $header = $box.find('.header'),
      $projects = $box.find('.projects'),
      $project = $projects.find('div'),
      projectClass = index;

    tlSlides
      .fromTo($box, .5, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1, onStart: updateClass, onStartParams: [projectClass]})
      .fromTo($header, 1.5, {autoAlpha: 0, y: '-=20'}, {autoAlpha: 1, y: '0'}, '-=.2')
      .add('headerLoaded')
      .staggerFromTo($project, 0.4, {autoAlpha: 0, y: '+=10'}, {autoAlpha: 1, y: '0'}, 0.05, 'headerLoaded-=1.2')
      .to($box, 3.4, {rotation: "+=359", paddingTop: "+=15", paddingBottom: "+=15", ease: Elastic.easeInOut}, 'headerLoaded-=.7')
      .to($header, 3.4, {fontSize: "+=20", ease: Elastic.easeInOut}, 'headerLoaded-=.7')
      .to($projects, 3.4, {marginTop: "20", ease: Power3.easeInOut}, 'headerLoaded-=.7')
      .to($project, 3.4, {width: "12", height: "12", marginLeft: "5", marginRight: "5", ease: Elastic.easeInOut}, 'headerLoaded-=.7')
      .to($box, 1, {yPercent: "-150", ease: Power3.easeIn}, '-=.5');

    tlMaster.add(tlSlides);
  });
  
  function updateClass(projectClass){
    $('body').attr('class', 'background-' + projectClass);
  }
});