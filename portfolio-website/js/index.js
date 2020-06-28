function openNav() {
  document.getElementById("myNav").style.height = "100%"; //expand from 0% to 100%
  document.getElementById("myNav").style.overflow = "hidden"; //prevents scorlling
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%"; //reduce from 100% to 0%
}

$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
    $('body').toggleClass('overflow');
    $('.logo-landing').toggleClass('display-none'); //hide/show logo on homepage
    $('#buttons-section').toggleClass('display-none'); //hide/show buttons on portfolio
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
      scrollTop: $(".navbar-container").offset().top
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

//BUTTON DEFUALT COLOUR SWITCH
$('.btn').click( function() {
$('.development-switch').attr('class',' btn btn-secondary');
});

})
