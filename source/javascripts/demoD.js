$(function() {
  var $body = $('body'),
    $normalNav = $('nav').not('.slideNav'),
    $hamburger = $('li.home'),
    $hamburgerBuns = $hamburger.find('span'),
    $slideActive = $('.slide.active'),
    $navLink = $('.slideNav a'),
    $navLi = $('.slideNav li'),
    $navLinkActive = $('.slideNav .active a');

  $("nav").hover(function(event){}, function(){
    var name = $(event.toElement).attr('class');

    console.log(name);
    if (name == 'bg'){
      if($(this).attr('class') != 'slideNav'){
        TweenLite.to($normalNav, .5, {bottom: '-50px'});
        TweenLite.to($hamburger, .5, {top: '-50px'});
        TweenLite.to($hamburgerBuns, .5, {backgroundColor: '#ffffff'});
      }
    } else {
      if($(this).attr('class') == 'slideNav') {
        TweenLite.to($normalNav, .5, {bottom: '0'});
        TweenLite.to($hamburger, .5, {top: '0'});
        TweenLite.to($hamburgerBuns, .5, {backgroundColor: '#2B63FF'});
      } 
    }
  });


  function init() {
    TweenLite.set($slideActive, {y: '0%'});
    TweenLite.set($body, {className: '-=loading'});
  }

  init();
  
  $navLink.on('click', function(e){

    if(!$body.hasClass('is-animating')){

      var sectionFrom = $('.slide.active'),
        sectiontoID = $(e.target).attr('href'),
        sectionTo = $('div'+sectiontoID);

        if(sectionFrom.attr('id') !== sectionTo.attr('id')) {
          scrollToSection(sectionFrom,sectionTo);
        }
    }
    return false; 
  });

  function scrollToSection(sectionFrom,sectionTo){

    var heading = sectionTo.find('h2'),
      bg = sectionTo.find('.bg'),
      bgFrom = sectionFrom.find('.bg'),
      tlDown = new TimelineLite({onComplete: setActiveSection(sectionFrom, sectionTo)}),
      tlUp = new TimelineLite();


    if(sectionFrom.index() < sectionTo.index()) {

      //clearProps clears out the leftover applied inline styles on that element after the tween completes
      tlDown
        .set($body, {className: '+=is-animating'})
        .to(sectionFrom, 1.2, {y: '-=100%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
        .to(sectionTo, 1.2, {y: '0%', ease:Power4.easeInOut}, '0')
        .to(bgFrom, 1.2, {y: '30%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
        .from(bg, 1.2, {y: '-30%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
        .from(heading, 0.7, {autoAlpha: 0, y: 40, ease:Power4.easeInOut}, '-=.6')
        .set($body, {className: '-=is-animating'});

    } else {
      tlUp
        .set($body, {className: '+=is-animating'})
        .set(sectionTo, {y: '-100%'})
        .to(sectionFrom, 1.2, {y: '100%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
        .to(sectionTo, 1.2, {y: '0%', ease:Power4.easeInOut}, '0')
        .to(bgFrom, 1.2, {y: '-30%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
        .from(bg, 1.2, {y: '30%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
        .from(heading, 0.7, {autoAlpha: 0, y: 40, ease:Power4.easeInOut}, '-=1')
        .set($body, {className: '-=is-animating'});
    }
  }

  function setActiveSection(sectionFrom, sectionTo){
    // Add active class to the current slide
    sectionFrom.removeClass('active');
    sectionTo.addClass('active');

    // Add a body class highlighting the current slide
    $body.removeAttr('class').addClass($(sectionTo).attr('id')+'-active demos_slideshow');

    // Highlight current slide in the navigation
    var currentSlideIndex = parseInt($(sectionTo).attr('id').slice(5)) - 1;

    console.log(currentSlideIndex);
    $navLi.removeAttr('class');
    $navLi.eq(currentSlideIndex).addClass('active');

  }
});