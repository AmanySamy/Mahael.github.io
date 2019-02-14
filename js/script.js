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
		$(".owl-carousel ,.owl-carousel .item").innerHeight($(window).innerHeight()  - ($(".navbar").innerHeight() + 100 ));

	});

	// Append Caption To Owl-nav
	$($(".owl-item.active > .item").html()).insertAfter($(".owl-nav button.owl-prev"));
	$(".owl-nav button.owl-prev").click(function(){
		if($(this).next().tagName == 'h3');{
			$(this).parent().find("h3").remove();
			$($(".owl-item.active > .item").html()).insertAfter($(this));
		}
		
	});
	// Append Caption To Owl-nav
	$(".owl-nav button.owl-next").click(function(){
		if($(this).prev().tagName == 'h3');{
			$(this).parent().find("h3").remove();
			$($(".owl-item.active > .item").html()).insertBefore($(this));
		}
		
	});


})