$(document).ready(function () {
  //navbar brand hover
  $('.navbar-brand span').hover(function() {
    $(this).toggleClass('brand-hover');
  });
  //navbar a hover
  $('.nav-item a').hover(function() {
    $(this).toggleClass('brand-hover');
  });
  //kitten love hover
  $('.fa-ul li').hover(function() {
    $(this).toggleClass('li-hover');
  });
  //kitten image references
  $('#star-ref').click(function(){
    window.location.replace('star.html');
  });
  $('#casper-ref').click(function(){
    window.location.replace('casper.html');
  });
  $('#lion-ref').click(function(){
    window.location.replace('lion.html');
  });
  $('#noel-ref').click(function(){
    window.location.replace('noel.html');
  });
  $('#eve-ref').click(function(){
    window.location.replace('eve.html');
  });
  $('#bean-ref').click(function(){
    window.location.replace('bean.html');
  });
});
