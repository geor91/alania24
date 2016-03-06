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
	// --------------------------------

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
	// ----------------------------------

	// Social Share Buttons
		$('[data-social]').click(function(e) {
			var url		= document.URL,
				title	= $('.post-title').text(),
				text	= $('.post-excerpt').text(),
				image	= 'http://alania24.ru' + $('[data-social_img]:first').data('social_img'),
				query	= '';

			if ($(this).data('social') == 'vk') {
				query =  'http://vkontakte.ru/share.php?';
				query += 'url='          + encodeURIComponent(url);
				query += '&title='       + encodeURIComponent(title);
				query += '&description=' + encodeURIComponent(text);
				query += '&image='       + encodeURIComponent(image);
				query += '&noparse=true';
			} 
			else if ($(this).data('social') == 'fb') {
				query = 'http://www.facebook.com/sharer.php?s=100';
				query+= '&p[title]='     + encodeURIComponent(title);
				query+= '&p[summary]='   + encodeURIComponent(text);
				query+= '&p[url]='       + encodeURIComponent(url);
				query+= '&p[images][0]=' + encodeURIComponent(image);
			}
			else if ($(this).data('social') == 'tw') {
				query = 'http://twitter.com/share?';
				query+= 'text='      + encodeURIComponent(title);
				query+= '&url='      + encodeURIComponent(url);
				query+= '&counturl=' + encodeURIComponent(url);
			}
			else if ($(this).data('social') == 'ok') {
				query = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
				query+= '&st.comments=' + encodeURIComponent(text);
				query+= '&st._surl='    + encodeURIComponent(url);
			}
			else if ($(this).data('social') == 'mlru') {
				query = 'http://connect.mail.ru/share?';
				query+= 'url='          + encodeURIComponent(url);
				query+= '&title='       + encodeURIComponent(title);
				query+= '&description=' + encodeURIComponent(text);
				query+= '&imageurl='    + encodeURIComponent(image);
			}

			if (true) {}
			window.open(query,'','toolbar=0,status=0,width=640,height=480');

			e.preventDefault();
		});
	// ------