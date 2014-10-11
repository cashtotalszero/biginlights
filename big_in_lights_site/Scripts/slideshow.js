"use strict";

/* Script does not start until page is loaded */
$(document).ready(function(){
	
	/* All images except the first are initially hidden */
	$('.fadein img:gt(0)').hide();
	
	/* Cycles through all images, fading in and out to each (then loop) */
	setInterval(function(){
		$('.fadein :first-child').fadeOut(1000).next('img').fadeIn(1000).end().appendTo('.fadein');
	}, 3000);
});
