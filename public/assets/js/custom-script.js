(function ($) {
	'use strict';

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.loader-wrap').length) {
			$('.loader-wrap').delay(300).fadeOut(300);
		}
	}

	if ($('.preloader-close').length) {
		$('.preloader-close').on('click', function () {
			$('.loader-wrap').delay(300).fadeOut(300);
		})
	}

	// Copy logo to hidden menu
	$('.logo-box .logo').clone().appendTo('.nav-logo-box');
	// Copy main menu to side menu
	$('.main-menu .navigation').clone().appendTo('.side-menu');

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Search Toggle
	if ($('.search-box').length) {
		$('.search-toggle').on('click', function () {
			$('body').toggleClass('visible-search');
		});
		$('.s-close-btn,.search-backdrop').on('click', function () {
			$('body').removeClass('visible-search');
		});
		$(document).keydown(function (e) {
			if (e.keyCode == 27) {
				$('body').removeClass('visible-search');
			}
		});
	}

	//Cart Sidebar Toggle
	if ($('.cart-sidebar').length) {
		$('.main-header .header-upper .links-box .cart-btn > a').on('click', function (e) {
			e.preventDefault();
			$('body').toggleClass('visible-cart-bar');
		});
		$('.cart-sidebar .closer-btn,.cart-backdrop').on('click', function () {
			$('body').removeClass('visible-cart-bar');
		});
		$(document).keydown(function (e) {
			if (e.keyCode == 27) {
				$('body').removeClass('visible-cart-bar');
			}
		});
	}

	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('li.dropdown > a').append(function () {
			return '<button type="button" class="btn-expander"><i class="icon icon-arrow-down"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();

		$('.hidden-bar .side-menu ul li.dropdown .btn-expander').on('click', function (e) {
			e.preventDefault();
			if ($(this).parents('li').children('ul').is(':visible')) {
				$(this).parents('li').children('ul').slideUp();
				$(this).find('i').toggleClass('icon-arrow-up');
				return false;
			} else {
				$(this).parents('.navigation').children('li').children('ul').hide();
				$(this).parents('.navigation').children('li').children('a').find('i').removeClass('icon-arrow-up');
				$(this).parents('.navigation').children('li').children('a').find('i').addClass('icon-arrow-down');
				$(this).parents('li').children('ul').slideToggle();
				// toggling arrow of expander
				$(this).find('i').toggleClass('icon-arrow-up');
				return false;
			}

		});
	}

	hiddenBarMenuConfig();


	//Custom Scroll for Hidden Sidebar
	if ($('.hidden-bar-wrapper').length) {

		$('.hidden-bar-closer,.menu-backdrop').on('click', function () {
			$('.hidden-bar,body').removeClass('visible-sidebar');
			$('.side-menu ul li.dropdown ul').slideUp();
			$('.side-menu ul li.dropdown > a i').removeClass('icon-arrow-up').addClass('icon-arrow-down');
		});
		$(document).keydown(function (e) {
			if (e.keyCode == 27) {
				$('.hidden-bar,body').removeClass('visible-sidebar');
				$('.side-menu ul li.dropdown ul').slideUp();
				$('.side-menu ul li.dropdown > a i').removeClass('icon-arrow-up').addClass('icon-arrow-down');
			}
		});
		$('.hidden-bar-opener').on('click', function () {
			$('.hidden-bar,body').addClass('visible-sidebar');
		});
	}

	//Packages Carousel
	if ($('.packages-carousel').length) {
		$('.packages-carousel').slick({
			slidesToShow: 3,
			centerMode: false,
			slidesToScroll: 3,
			autoplay: true,
			infinite: true,
			dots: false,
			touchMove: true,
			touchThreshold: 3,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	//Tour Types Carousel
	if ($('.tour-types-carousel').length) {
		$('.tour-types-carousel').slick({
			slidesToShow: 4,
			centerMode: false,
			slidesToScroll: 4,
			autoplay: true,
			infinite: true,
			dots: true,
			arrows: false,
			touchMove: true,
			touchThreshold: 4,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	//Testimonials Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').slick({
			slidesToShow: 3,
			centerMode: false,
			centerPadding: '24px',
			slidesToScroll: 3,
			autoplay: true,
			infinite: true,
			dots: true,
			arrows: false,
			touchMove: true,
			touchThreshold: 4,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	//Partners Carousel
	if ($('.partners-carousel').length) {
		$('.partners-carousel').slick({
			slidesToShow: 5,
			centerMode: false,
			centerPadding: '24px',
			slidesToScroll: 2,
			autoplay: true,
			infinite: true,
			dots: false,
			arrows: false,
			touchMove: true,
			touchThreshold: 5,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	//Insta Feed Carousel
	if ($('.insta-carousel').length) {
		$('.insta-carousel').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 2,
			centerMode: false,
			variableWidth: true,
			dots: false,
			arrows: false,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 500,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear'
		});
	}

	//Banner Carousel
	if ($('.banner-slider').length) {
		var swiper = new Swiper('.banner-slider', {
			autoplay: true,
			autoplaySpeed: 7000,
			effect: 'fade',
			speed: 1000,
			margin: 0,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				delay: 7000
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}

	//popular Carousel
	if ($('.popular-carousel').length) {
		$('.popular-carousel').slick({
			slidesToShow: 4,
			centerMode: false,
			centerPadding: '24px',
			slidesToScroll: 2,
			autoplay: true,
			infinite: true,
			dots: false,
			touchMove: true,
			touchThreshold: 3,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	//Testimonials Carousel
	if ($('.testi-slider-two').length) {
		$('.testi-slider-two').slick({
			slidesToShow: 1,
			centerMode: false,
			centerPadding: '24px',
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			dots: true,
			arrows: false,
			touchMove: true,
			touchThreshold: 4,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear'
		});
	}

	//Activity Slider Carousel
	if ($('.activity-banner-slider').length) {
		$('.activity-banner-slider').slick({
			slidesToShow: 1,
			centerMode: false,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			dots: false,
			arrows: true,
			touchMove: true,
			touchThreshold: 4,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			prevArrow: '<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
			nextArrow: '<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
			//cssEase:'linear'
		});
	}

	//Insta Carousel
	if ($('.insta-carousel-two').length) {
		$('.insta-carousel-two').slick({
			slidesToShow: 6,
			centerMode: false,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			dots: false,
			arrows: false,
			touchMove: true,
			touchThreshold: 3,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			speed: 1000,
			//cssEase:'linear',
			responsive: [
				{
					breakpoint: 1366,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {

			var $t = $(this),
				n = $t.find('.count-text').attr('data-stop'),
				r = parseInt($t.find('.count-text').attr('data-speed'), 10);

			if (!$t.hasClass('counted')) {
				$t.addClass('counted');
				$({
					countNum: $t.find('.count-text').text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: 'linear',
					step: function () {
						$t.find('.count-text').text(Math.floor(this.countNum));
					},
					complete: function () {
						$t.find('.count-text').text(this.countNum);
					}
				});
			}

		}, { accY: 0 });
	}

	//MixitUp Gallery Filters
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}

	//Datepicker
	if ($('.datepicker').length) {
		$('.datepicker').datepicker();
	}

	//Jquery Spinner / Quantity Spinner
	if ($('.qty-spinner').length) {
		$('input.qty-spinner').TouchSpin({
			verticalbuttons: true
		});
	}

	//Default Masonry
	function enableDefaultMasonry() {
		if ($('.masonry-container').length) {

			var winDow = $(window);
			// Needed variables
			var $container = $('.masonry-container');

			$container.isotope({
				itemSelector: '.masonry-item',
				masonry: {
					columnWidth: 1,
					gutter: 5
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});
		}
	}
	enableDefaultMasonry();

	//Jquery Spinner / Quantity Spinner
	if ($('.quantity-spinner').length) {
		$('.quantity-spinner .plus').on('click', function () {
			var val = $(this).prev('.prod_qty').val();
			$(this).prev('.prod_qty').val((val * 1) + 1);
		});
		$('.quantity-spinner .minus').on('click', function () {
			var val = $(this).next('.prod_qty').val();
			if (val != 1) {
				$(this).next('.prod_qty').val((val * 1) - 1);
			}
		});
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$('.accordion-box').on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).next('.acc-content').is(':visible')) {
				//return false;
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(outerBox).children('.accordion').removeClass('active-block');
			} else {
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				$(this).next('.acc-content').slideDown(300);
				$(this).parent('.accordion').addClass('active-block');
			}
		});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}

	//Custom Seclect Box
	if ($('.custom-select').length) {
		$('.custom-select').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//Price Range Slider
	if ($('.range-slider').length) {

		$('.range-slider').each(function () {

			var RangeSlider = $(this).find('.price-range-slider');
			var InPutOne = $(this).find('input.property-amount-1');
			var InPutTwo = $(this).find('input.property-amount-2');
			$(RangeSlider).slider({
				range: true,
				min: 0,
				max: 1600,
				values: [0, 800],
				slide: function (event, ui) {
					$(InPutOne).val(ui.values[0]);
					$(InPutTwo).val(ui.values[1]);
				}
			});

			$(InPutOne).val($(RangeSlider).slider('values', 0));
			$(InPutTwo).val($(RangeSlider).slider('values', 1));
		});
	}

	// Skill Bar
	if ($('.p-fill-bar').length) {
		$('.p-fill-bar').appear(function () {
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width', percent).addClass('counted');
		}, { accY: -50 });

	}

	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}


	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$('.scroll-to-target').on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}


	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
		if ($('body.page-loaded').length) {
			$('body').addClass('page-done');
		}
		enableDefaultMasonry();
	});

	/* ==========================================================================
	   When document is Resized
	   ========================================================================== */

	$(window).on('resize', function () {
		enableDefaultMasonry();
	});
})(window.jQuery);