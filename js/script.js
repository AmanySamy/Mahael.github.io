$(function(){
	'use strict';
	$(".nav-item").on('click',function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
})