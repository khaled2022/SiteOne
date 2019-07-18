$(function(){
		// body...
		'use strict';
		//Adjust Slider Height
		var	 winH   = $(window).height(),
			 upperH = $('.uppar-bar').innerHeight(),
			 navH   = $('.navbar').innerHeight();
			$('.slider').height(winH - ( upperH + navH ));
	});