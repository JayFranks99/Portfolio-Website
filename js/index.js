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

//BUTTON COLOUR SWITCH
$('.btn-secondary').click(function () {
    $('.development-switch').attr('class',' btn btn-secondary'); //Removing default button colour
    $('.btn-secondary').removeClass('selected'); //Removing the selected button bg colour
    $(this).addClass('selected'); //Adding a bg colour to the selected button
});

}); //end of functions


//motive image pop up
$('.motive').click(function () {
  $('.bg-popup').css( "display", "flex" );
  $('.bg-popup').css( "z-index", "5" );
});

//closing pop up
$('.close-button').click(function () {
  $('.bg-popup').css("display", "none" );
});

//in development image click
$('.inDevelopment').click(function () {
  document.querySelector(".inDevelopment").setAttribute("src", "images/underDevelopment-img.png");
});

////////////////////ALTITUDE///////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/altitude-lg-img.png"
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/////////////////SLGC///////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/SLGC-lg-img.png";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/////////////////ABSOLUT JAZZ///////////////////

// Get the modal
var modal = document.getElementById("myModal");
var modalClass = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  $('.modal').addClass('paddingTop');
  $('.modal-content').addClass('heightImage');
  modalImg.src = "images/jazz-lg-img.png";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $('.modal').removeClass('paddingTop');
  $('.modal-content').removeClass('heightImage');
}
