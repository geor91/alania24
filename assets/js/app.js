$(document).ready(function() {
	// init slider on gallery page
	$('#sliderID').owlCarousel({
		dots: false,
		items: 1,
		loop: true,
		nav: true,
		navSpeed: 300,
		navText: false
	});

	// init slider on gallery page
	$('#hot-news-slider').owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 4000,
		autoplayTimeout: 6000,
		dots: false,
		items: 1,
		loop: true,
		mouseDrag: false,
		touchDrag: false
	});
});