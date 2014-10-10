"use strict";

$(document).ready(function(){
	new juicebox({
		configUrl: "./juicebox_gallery/config.xml",
		containerId : "juicebox-container",
		galleryWidth: "100%",
		galleryHeight: "100%",
		backgroundColor: "#222222"
	});
});

