$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
    $('body').toggleClass('overflow');
    $('.logo-landing').toggleClass('myClass3');
  });

  $('ul li').click(function () {
    $(this).toggleClass('active');
  });

  $('.portfolio').click(function () {
    $('.dropdown-icon').toggleClass('myClass');
    $('header nav ul').toggleClass('myClass2');
    $('.sub-menu-items .active').toggleClass('.sub-menu-items .active');
  });

//SMOOTH ANIMATION ON CLICK
  $(".down-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$(".up-arrow").click(function() {
  $('html, body').animate({
      scrollTop: $("header").offset().top
  }, 1500);
});
})
