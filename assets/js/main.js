(function($) {

	skel.breakpoints({
		xxlarge: '(max-width: 1920px)',
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1000px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$all = $body.add($header);

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 0);
			});	

		// Load website
			$window.on('load', function(){

				
				/** 
				 * Get current geolocation information snippet
				 *  
				 * var lat = 43.6319,   //default: Vancouver, BC
				 * lng = -79.3716;
				 * if (navigator.geolocation) {
				 * navigator.geolocation.getCurrentPosition(function(location){
				 *		lat = location.coords.latitude;
				 *		lng = location.coords.longitude;
				 * });
				 * } else {
				 * 		x.innerHTML = "Get Geolocation infomation failed.";
				 * }
				 */
				
				// Sunrise/sunset time is powered by [SunCalc](https://github.com/mourner/suncalc)
			// Get current time and set greeting message
				var curr = new Date();

				setInterval(function(){
					var time = new Date();
					$('#time').text(('0' + time.getHours()).slice(-2)
									+ ' : ' 
									+ ('0' + time.getMinutes()).slice(-2)
									+ ' : '
									+ ('0' + time.getSeconds()).slice(-2))
						  	  .setTimeout(1000);
					}, 1000);

				// Set greeting message 
				// var times   = SunCalc.getTimes(curr, lat, lng);
				var sunrise = 6,
					sunset  = 18,
					noon    = 12;

				if(curr.getHours() < noon && curr.getHours() > sunrise){
					$('#greeting').html("Good Morning!");
				} else if(curr.getHours() > noon && curr.getHours() < sunset) {
					$('#greeting').html("Good Afternoon!");
				} else {
					$('#greeting').html("Good Evening!");
				}

			// Use CORS Anywhere to set the CORS headers
				$.ajaxPrefilter( function (options) {
					if (options.crossDomain && jQuery.support.cors) {
						var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
						options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
					}
				});

			// Get today's bing wallpaper as background image
				var base = 'https://www.bing.com',
				    json_url = '/HPImageArchive.aspx?format=js&idx=0&n=1';
				
				$.getJSON(base + json_url, function(json){
					var img_url = base + json.images[0].url;
					$('#intro').css({
						"background-image": "url(" + img_url + ")",
						"background-repeat": "no-repeat",
						"background-size": "cover"
					});
				});
			});

		// Touch mode.
			skel.on('change', function() {

				if (skel.vars.mobile || skel.breakpoint('small').active)
					$body.addClass('is-touch');
				else
					$body.removeClass('is-touch');

			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Fix: IE flexbox fix.
			if (skel.vars.IEVersion <= 11
			&&	skel.vars.IEVersion >= 10) {

				var $main = $('.main.fullscreen'),
					IEResizeTimeout;

				$window
					.on('resize.ie-flexbox-fix', function() {

						clearTimeout(IEResizeTimeout);

						IEResizeTimeout = setTimeout(function() {

							var wh = $window.height();

							$main.each(function() {

								var $this = $(this);

								$this.css('height', '');

								if ($this.height() <= wh)
									$this.css('height', (wh - 50) + 'px');

							});

						});

					})
					.triggerHandler('resize.ie-flexbox-fix');
			}

		// Dynamic text using typed.js
		
			$("#text-dynamic").typed({
				strings: ["a BCITer.", "a Coder.", "a Learner.", "a Hiker", "Alex."],
				typeSpeed: 50,
				startDelay: 15,
				showCursor: false,
			});

		// Prioritize "important" elements on small.
			skel.on('+small -small', function() {
				$.prioritize(
					'.important\\28 small\\29',
					skel.breakpoint('small').active
				);
			});

		// Gallery.
			$window.on('load', function() {

				var $gallery = $('.gallery');

				$gallery.poptrox({
					baseZIndex: 10001,
					useBodyOverflow: false,
					usePopupEasyClose: false,
					overlayColor: '#1f2328',
					overlayOpacity: 0.65,
					usePopupDefaultStyling: false,
					usePopupCaption: true,
					popupLoaderText: '',
					windowMargin: 50,
					usePopupNav: true
				});

				// Hack: Adjust margins when 'small' activates.
					skel
						.on('-small', function() {
							$gallery.each(function() {
								$(this)[0]._poptrox.windowMargin = 50;
							});
						})
						.on('+small', function() {
							$gallery.each(function() {
								$(this)[0]._poptrox.windowMargin = 5;
							});
						});

			});

		// Section transitions.
			if (skel.canUse('transition')) {

				var on = function() {

					// Galleries.
						$('.gallery')
							.scrollex({
								top:		'30vh',
								bottom:		'30vh',
								delay:		50,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

					// Generic sections.
						$('.main.style1')
							.scrollex({
								mode:		'middle',
								delay:		100,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

						$('.main.style2')
							.scrollex({
								mode:		'middle',
								delay:		100,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

					// Contact.
						$('#contact')
							.scrollex({
								top:		'50%',
								delay:		50,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

				};

				var off = function() {

					// Galleries.
						$('.gallery')
							.unscrollex();

					// Generic sections.
						$('.main.style1')
							.unscrollex();

						$('.main.style2')
							.unscrollex();

					// Contact.
						$('#contact')
							.unscrollex();

				};

				skel.on('change', function() {

					if (skel.breakpoint('small').active)
						(off)();
					else
						(on)();

				});

			}

		// Events.
			var resizeTimeout, resizeScrollTimeout;

			$window
				.resize(function() {

					// Disable animations/transitions.
						$body.addClass('is-resizing');

					window.clearTimeout(resizeTimeout);

					resizeTimeout = window.setTimeout(function() {

						// Update scrolly links.
							$('a[href^="#"]').scrolly({
								speed: 1500,
								offset: $header.outerHeight() - 1
							});

						// Re-enable animations/transitions.
							window.setTimeout(function() {
								$body.removeClass('is-resizing');
								$window.trigger('scroll');
							}, 0);

					}, 100);

				})
				.load(function() {
					$window.trigger('resize');
				});

	});

})(jQuery);