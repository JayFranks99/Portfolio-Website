var main = document.querySelector("main");
// FADE IN ANIMATION
$( document ).ready(function() {
     main.style.opacity = 1;
     main.style.bottom = 0;
});


//DOCUMENT FADES OUT BEFORE IT ENTERS ANOTHER PAGE
$(window).on('beforeunload', function() {
  $('body').css({"opacity":"0","transition":"0.5s"});
});


function openNav() {
  document.getElementById("myNav").style.height = "100%"; //expand from 0% to 100%
  document.getElementById("myNav").style.overflow = "hidden"; //prevents scorlling
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%"; //reduce from 100% to 0%
}

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  setTimeout(function() {
    loader.className += " hidden"; //loader hidden
  }, 2000);
});


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
img.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/altitude-lg-img.png"
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-x")[0];

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

img.onclick = function(){
  modal.style.display = "flex";
  modalImg.src = "images/SLGC-lg-img.png";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-x")[0];

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

img.onclick = function(){
  modal.style.display = "flex";
  $('.modal-content').addClass('heightImage');
  modalImg.src = "images/jazz-lg-img.png";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-x")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $('.modal-content').removeClass('heightImage');
}


////////////////////VIDEO MODAL - LEICESTER///////////////////

var vidLightbox = document.getElementById("videoLightbox");
var video = document.querySelector(".lightbox-video");

var vidImg = document.querySelector(".leicester");
var vidImg2 = document.querySelector(".spotify");
var vidImg3 = document.querySelector(".hunter");
var vidImg4 = document.querySelector(".sonar");
var vidImg5 = document.querySelector(".chase");
var vidImg6 = document.querySelector(".clucky");
var vidImg7 = document.querySelector(".doctor");
var vidImg8 = document.querySelector(".boost");
var vidImg9 = document.querySelector(".rocky");
var vidImg10 = document.querySelector(".friends");
var vidImg11 = document.querySelector(".horror");

var vidBtn1 = document.querySelector(".app-button");

vidImg.onclick = function(){
  video.src = "videos/theFairytale.mp4";
  vidLightbox.style.display = "flex";
}

vidImg2.onclick = function(){
  video.src = "videos/spotify.mp4";
  vidLightbox.style.display = "flex";
}

vidImg3.onclick = function(){
  video.src = "videos/thehunter.mp4";
  vidLightbox.style.display = "flex";
}

vidImg4.onclick = function(){
  video.src = "videos/sonar.mp4";
  vidLightbox.style.display = "flex";
}

vidImg5.onclick = function(){
  video.src = "videos/chase.mp4";
  vidLightbox.style.display = "flex";
}

vidImg6.onclick = function(){
  video.src = "videos/clucky.mp4";
  vidLightbox.style.display = "flex";
}

vidImg7.onclick = function(){
  video.src = "videos/doctorwho.mp4";
  vidLightbox.style.display = "flex";
}

vidImg8.onclick = function(){
  video.src = "videos/boost.mp4";
  vidLightbox.style.display = "flex";
}

vidImg9.onclick = function(){
  video.src = "videos/rocky.mp4";
  vidLightbox.style.display = "flex";
}

vidImg10.onclick = function(){
  video.src = "videos/friends.mp4";
  vidLightbox.style.display = "flex";
}

vidImg11.onclick = function(){
  video.src = "videos/horror.mp4";
  vidLightbox.style.display = "flex";

}

vidBtn1.onclick = function(){
  video.src = "videos/motive_1.mp4";
  vidLightbox.style.display = "flex";
  document.querySelector(".bg-popup").style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-x3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  vidLightbox.style.display = "none";
  video.load();
}

/////////////////LIGHTBOX - BANGERZ///////////////////

// Get the modal
var mylightbox = document.getElementById("mylightbox");
var img = document.querySelector(".bangerz");
var zoom = document.querySelector(".lightbox-image");
var controls = document.getElementById("carouselExampleControls");

img.onclick = function(){
  mylightbox.style.display = "flex";
  zoom.style.animationName = "zoom"; //when the image is clicked add the zoom animation
}

  controls.onclick = function(){
  zoom.style.animationName = "none"; //when a control button is clicked make sure the zoom aniamtion doesnt occur
 }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-x2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mylightbox.style.display = "none";
}
