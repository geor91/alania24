// INITS
$(document).ready(function() {
	// init slider on gallery page
	$('#sliderID').owlCarousel({
		dots: false,
		items: 1,
		loop: $('#sliderID').children().length > 1,
		nav: $('#sliderID').children().length > 1,
		navSpeed: 300,
		navText: false
	});

	// init slider on index page (header)
	$('#hot-news-slider').owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 4000,
		autoplayTimeout: 6000,
		dots: false,
		items: 1,
		loop: $('#hot-news-slider').children().length > 1,
		mouseDrag: false,
		touchDrag: false
	});
});

// EVENTS
	// switching between auth, reg forms
		$('.auth-area a.trigger').on('click', function(e) {
			var divID = $(this).attr('href');
			$(this).parents('.auth-area').find('.auth-form').removeClass('active');
			$(divID).addClass('active');
			e.preventDefault();
		});

	// navbar expander on mobile devices
		$('.navbar-expander').on('click', function(e) {
			var $navbar = $('#main-container'),
				$overlay = $('.navbar-overlay');

			if (!$navbar.hasClass('expanded')) {
				$('body').addClass('no-scroll');

				// раскрываем целевой блок в зависимости от режима
				$navbar.addClass('expanded');
				$overlay.show();
			}
			else {
				$navbar.removeClass('expanded');
				$overlay.hide();
				$('body').removeClass('no-scroll');
			}
			e.preventDefault();
		});

		$('.navbar-overlay').click( function(e) {
			$('#main-container').removeClass('expanded');
			$('.navbar-overlay').hide();
			$('body').removeClass('no-scroll');
		});