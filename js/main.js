"use strict";

// Retina display fix
var scale = 1 / (window.devicePixelRatio || 1);
var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale;

document.querySelector('meta[name="viewport"]').setAttribute('content', content);

var navOffset = 0;

function adjustNavPos() {

  var logoHeight = $("#bilLogo").height();
  logoHeight += parseInt($("#header > a").css("padding-top"));
  $("#header").height(logoHeight);

  var navHeight = $(".nav").height();

  // If nav bar is hidden then we dont need to include it in the calculation
  if(navHeight == 200) {
    navHeight = 0;
  }
  navOffset = logoHeight + navHeight + 10;
  navOffset += 11; // horizontal rule

  $("body").css("padding-top", navOffset);

  if(navHeight === 0) {
    navOffset += 50;
  }
}

function actionScroll(element) {
  $("#navButtons").removeClass("in");
  $('html, body').animate({
    scrollTop: ($(element).offset().top - navOffset)
  }, 500);
}

$( document ).ready(function() {
  adjustNavPos();
});

$( window ).resize(function() {
  adjustNavPos();
});

$( "#newsNav" ).on( "click", function(e) {
  e.preventDefault();
  actionScroll("#news");
});

$( "#bioNav" ).on( "click", function(e) {
  e.preventDefault();
  actionScroll("#bio");
});

$( "#musicNav" ).on( "click", function(e) {
  e.preventDefault();
  actionScroll("#music");
});

$( "#videoNav" ).on( "click", function(e) {
  e.preventDefault();
  actionScroll("#video");
});

$( "#showsNav" ).on( "click", function(e) {
  e.preventDefault();
  actionScroll("#shows");
});
