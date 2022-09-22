$(document).ready(function() {
	var clickElement = $('.nav-area .nav-toggle');
	clickElement.click(function(event) {
		var targetElement = $(this).closest('.nav-area').find('.nav-wrap');

		if (targetElement.css('display') == 'none') {
			targetElement.slideDown('fast');
		}else{
			targetElement.slideUp('fast');
		}
	});
	$('.owl-carousel').owlCarousel({
	    loop: true,
	    nav: true,
	    margin: 20,
	    dots: false,
	    smartSpeed: 1000,
	    mouseDrag:true,
	    autoplay:false,
	    navText: [
	        "<i class='fa fa-angle-left'></i>",
	        "<i class='fa fa-angle-right'></i>"
	    ],
	    responsive: {
	        0: {
	            items: 1,
	        },
	        768: {
	            items: 2,
	        },
	        1200: {
	            items: 3,
	        }
	    }
	});
});
