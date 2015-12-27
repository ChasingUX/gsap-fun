$(function() {
  var $normalNav = $('nav').not('.slideNav'),
    $hamburger = $('li.home'),
    $hamburgerBuns = $hamburger.find('span');

  $("nav").hover(function(event){}, function(){
    var name = $(event.toElement).attr('class');
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
});