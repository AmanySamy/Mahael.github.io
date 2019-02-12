$(function(){
	'use strict';
	$(".nav-item").on('click',function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	// Call Owl Carousel Plugin
	$(".owl-carousel").owlCarousel({
		items:1,
		nav:true,
	});

	// Set Height of Owl Carousel 
	$(".owl-carousel ,.owl-carousel .item").innerHeight($(window).innerHeight() - $(".navbar").innerHeight() );
	$(window).resize(function(){
		$(".owl-carousel ,.owl-carousel .item").innerHeight($(window).innerHeight()  - $(".navbar").innerHeight() );

	});

})