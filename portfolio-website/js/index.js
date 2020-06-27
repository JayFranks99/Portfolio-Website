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

//SMOOTH ANIMATION ON CLICK - DOWN
  $(".down-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

//SMOOTH ANIMATION ON CLICK - UP

$(".up-arrow").click(function() {
  $('html, body').animate({
      scrollTop: $("header").offset().top
  }, 1500);
});


//DEVELOPMENT ON
$('.development-switch').click(function () {
  $('#development').attr('class','display-block');
  $('#design').attr('class','display-none');
  $('#editing').attr('class','display-none');
  $('#animation').attr('class','display-none');
});

//DESIGN ON
$('.design-switch').click(function () {
  $('#design').attr('class','display-block');
  $('#development').attr('class','display-none');
  $('#editing').attr('class','display-none');
  $('#animation').attr('class','display-none');
});

//EDITING ON
$('.editing-switch').click(function () {
  $('#editing').attr('class','display-block');
  $('#development').attr('class','display-none');
  $('#design').attr('class','display-none');
  $('#animation').attr('class','display-none');
});

//ANIMATION ON
$('.animation-switch').click(function () {
  $('#animation').attr('class','display-block');
  $('#development').attr('class','display-none');
  $('#editing').attr('class','display-none');
  $('#design').attr('class','display-none');
});

})
