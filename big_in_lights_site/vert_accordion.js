"use strict";

/* Loads vertical text/blog accordion */
$(document).ready(function(){
	$( "#accordion" ).accordion({
		heightStyle: "content"
	});			
});

/* Loads horizontal image slider */
$(document).ready(function(){
	$("#accordion-slider").kwicks({
		max : 395,
		spacing : 2
	});
});


/* Toggles between Swirly images */
$(document).ready(function(){	
	$(function(){
		var imgs = [
			new Image(),
			new Image()
		];

		/* Set image size & source */
		imgs[0].height = "800";
		imgs[1].height = "800";
		
		imgs[0].src = "./red_swirly.png";
		imgs[1].src = "./swirlyrip.png";
 	
		/* Toggle images when mouse is over swirly image div */	
		$("#swirly").hover(function(){
			$(this).html(imgs[0]);
		}, function(){
			$(this).html(imgs[1]);
		});
	});
});

