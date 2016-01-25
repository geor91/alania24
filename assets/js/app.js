$(document).ready(function() {
	// init slider on gallery page
	$('#sliderID').owlCarousel({
		pagination: false,
		navigation: true,
		navigationText: false,
		slideSpeed: 400,
		singleItem:true
	});

	// init slider on gallery page
	$('#hot-news-slider').owlCarousel({
		pagination: false,
		navigation: false,
		slideSpeed: 1000,
		autoPlay: true,
		mouseDrag: false,
		touchDrag: false,
		singleItem:true
	});
});