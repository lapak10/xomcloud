$(document).ready(function(){
	
	/** OVERLAY LOGIN TOGGLE **/
	$("#show-login").click(function(){
		"use strict";
		$(".overlay-login").addClass("visible");
	});
	$("#hide-login").click(function(){
		"use strict";
		$(".overlay-login").removeClass("visible");
	});
	
	
	/** NAV MENU BUTTON TOGGLE **/
	$("#nav-menu-button").click(function(){
		"use strict";
		$("#nav-menu").toggleClass("show-menu");
		$("#nav-menu-button").toggleClass("show-menu");
	});
	
	
	/** BEGIN BACK TO TOP **/
	$(function () {
		$("#back-top").hide();
	});
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 200);
			return false;
		});
	});
	/** END BACK TO TOP **/
	
	
	/** SQUENCE SLIDESHOW **/
    var options = {
        nextButton: false,
        prevButton: false,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 5000,
        preloader: true,
		swipePreventsDefault: true,
        preloadTheseFrames: [1]
    };
    var mySequence = $("#sequence").sequence(options).data("sequence");
	
	
	/** TOOLTIP **/
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	
	/** OWL REVIEW SLIDE **/
	$("#review-slide").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		stopOnHover : false,
		autoPlay : 5000,
		pagination: true,
		autoHeight : true,
	  });
	  
	  
	/** IMAGE SLIDE ABOUT PAGE **/  
	$("#about-slide").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		stopOnHover : false,
		autoPlay : 5000,
		pagination: true,
		autoHeight : true,
	  });
	  
	
	/** PAGE HEADING BACKSTRETCH BACKGROUND **/
	$("#domain-page").backstretch("assets/img/keyboard.jpg");
	$("#hosting-features-page").backstretch("assets/img/servers.jpg");
	$("#data-center-page").backstretch("assets/img/data-center.jpg");
	$("#about-page").backstretch("assets/img/about.jpg");
	$("#blog-page").backstretch("assets/img/blog.jpg");
	$("#blog-2-page").backstretch("assets/img/blog-2.jpg");
	$("#contact-page").backstretch("assets/img/contact.jpg");
  
});