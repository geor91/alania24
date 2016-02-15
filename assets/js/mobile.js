$(function() {
	$('.navbar-expander').on('click', function(e) {
		e.preventDefault();
		var $navbar = $('.page-container'),
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
	});

	$('.navbar-overlay').click( function(e) {
		$('.page-container').removeClass('expanded');
		$('.navbar-overlay').hide();
		$('body').removeClass('no-scroll');
	});

	$('.main-navbar').swipeleft(function(e) {
		$('.page-container').removeClass('expanded');
		$('.navbar-overlay').hide();
		$('body').removeClass('no-scroll');
	});
});