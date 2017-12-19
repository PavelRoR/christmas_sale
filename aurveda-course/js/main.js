jQuery(document).ready(function($) {

	//Слайдер Why & iFrame

	var wdh = $(window).width();

	if(wdh < 1440) {
		$('.videoPlayer iframe').attr('width','560');
		$('.videoPlayer iframe').attr('height','315');
		$('#bonus iframe').attr('width','560');
		$('#bonus iframe').attr('height','315');
		$('#dz iframe').attr('width','560');
		$('#dz iframe').attr('height','315');
	}
	if(wdh < 1200) {
		$('#bonus iframe').attr('width','400');
		$('#bonus iframe').attr('height','240');
		$('#dz iframe').attr('width','400');
		$('#dz iframe').attr('height','240');
	};
	if(wdh < 960) {
		$('.videoPlayer iframe').attr('width','320');
		$('#bonus iframe').attr('width','320');
		$('#bonus iframe').attr('height','180');
		$('#dz iframe').attr('width','320');
		$('#dz iframe').attr('height','180');
		$('.videoPlayer iframe').attr('height','180');
	};
	if(wdh < 800) {
		$('.table_bonus_min').toggleClass('hide');
		$('#table table').toggleClass('hide');
	};

	// Работа форм
	$(function() {
/*
		$("#zapisi").on("submit", ".form_newsletter", function(e) {
			var message = "Укажите значения всех обязательных для заполнения полей!";
			var ret = 0;
			var nameVal = $(".name-block .field_value", this).val();
			var emVal = $(".email-block .field_value", this).val();
			var pVal = $(".phone-block .field_value", this).val();

			if(nameVal.length < 1){
				$(".name-block .field_value", this).css("border-color","red");
				ret = 1;
			} else {
				$(".name-block .field_value", this).css("border-color","green");
				ret = 0;
			}
			if(emVal.length < 1){
				$(".email-block .field_value", this).css("border-color","red");
				ret = 1;
			} else {
				$(".email-block .field_value", this).css("border-color","green");
				ret = 0;
			}
			if(pVal.length < 1){
				$(".phone-block .field_value", this).css("border-color","red");
				ret = 1;
			} else {
				$(".phone-block .field_value", this).css("border-color","green");
				ret = 0;
			}
			if(ret == 1){
				alert(message);
				return false;
			}
			$("#form_text span", this).html("Поздравляем, " + nameVal + "! <br>Запись VIP занятия <br>отправлена на " + emVal).css("color", "#fca826");
			window.open("http://mastervision.su/aurveda/vip.html");
		});
*/
		$("body").on("submit", ".form_newsletter", function(e) {
			var message = "Укажите значения всех обязательных для заполнения полей!";
			var ret = 0;
			var emVal = $(".email-block .field_value", this).val();
			var pVal = $(".phone-block .field_value", this).val();

			if($(".email-block .field_value", this).val().length < 6){
				$(".email-block .field_value", this).css("border-color","red");
				ret = 1;
			}
			if(ret == 1){
				alert(message);
				return false;
			}
			$(".email-block", this).addClass("hide");
			$(".phone-block", this).removeClass("hide");
			$('#form_text span', this).html('');
			$('#form_text #pere', this).addClass('hide');
			$('#form_text #tell', this).addClass('hide');
			$('#span_email', this).html('Зарегистрирован Ваш e-mail: ' + emVal +' <br>Бонус уже у Вас на почте').removeClass('hide');
			$('#span_phone', this).html('Введите свой номер телефона<br> и мы напомним вам о начале мастер-класса').removeClass('hide');
			if(pVal) window.open("http://mastervision.su/aurveda/detox/bonus.html")
		});
		$(".phone-block input", this).keydown(function (e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 107, 187]) !== -1 ||(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || (e.keyCode >= 35 && e.keyCode <= 40)) {
				return;
			}if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});

	});


	//Слайдеры отзывы
	$('.js-video-slider').bxSlider({
		adaptiveHeight: true,
		mode: 'fade',
		pagerCustom: '.js-video-slider__pager',
		nextSelector: '#video-slider-next',
		prevSelector: '#video-slider-prev',
		nextText: 'next',
		prevText: 'prev'
	});
	$('.js-text-slider').bxSlider({
		adaptiveHeight: true,
		mode: 'fade',
		pagerCustom: '.js-text-slider__pager',
		nextSelector: '#text-slider-next',
		prevSelector: '#text-slider-prev',
		nextText: 'next',
		prevText: 'prev'
	});

	//Tabs Course
	$("#bx-plan__slider").bxSlider({
		pagerCustom: "#bx-plan-pager",
		controls: false,
		mode: "fade",
		auto: false,
		autoHover: true
	});
	$("#bx-plan-item-slider1").bxSlider({
		pagerCustom: "#bx-plan-item-pager1",
		mode: "fade",
		auto: false,
		autoHover: true,
		nextSelector: '#bx-plan-item-slider1-next',
		prevSelector: '#bx-plan-item-slider1-prev',
		nextText: 'next',
		prevText: 'prev'
	});
	$("#bx-plan-item-slider2").bxSlider({
		pagerCustom: "#bx-plan-item-pager2",
		mode: "fade",
		auto: false,
		autoHover: true,
		nextSelector: '#bx-plan-item-slider2-next',
		prevSelector: '#bx-plan-item-slider2-prev',
		nextText: 'next',
		prevText: 'prev'
	});
	$("#bx-plan-item-slider3").bxSlider({
		pagerCustom: "#bx-plan-item-pager3",
		mode: "fade",
		auto: false,
		autoHover: true,
		nextSelector: '#bx-plan-item-slider3-next',
		prevSelector: '#bx-plan-item-slider3-prev',
		nextText: 'next',
		prevText: 'prev'
	});
	$("#bx-plan-item-slider4").bxSlider({
		pagerCustom: "#bx-plan-item-pager4",
		mode: "fade",
		auto: false,
		autoHover: true,
		nextSelector: '#bx-plan-item-slider4-next',
		prevSelector: '#bx-plan-item-slider4-prev',
		nextText: 'next',
		prevText: 'prev'
	});
	$("#bx-plan-item-slider5").bxSlider({
		pagerCustom: "#bx-plan-item-pager5",
		mode: "fade",
		auto: false,
		autoHover: true,
		nextSelector: '#bx-plan-item-slider5-next',
		prevSelector: '#bx-plan-item-slider5-prev',
		nextText: 'next',
		prevText: 'prev'
	});

	//Модалка конфиденциальность
	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	//Модалка с формой

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//ZOOM
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

	//Accordion

	$('ul.acardion-ul li .top-acardion').click(function(event) {
		$('ul.acardion-ul li .top-acardion').not($(this)).parents('li').find('.swich-acardion').slideUp(400);
		$(this).parents('li').find('.swich-acardion').slideDown(400);

		$('ul.acardion-ul li').removeClass('active')
		$(this).parents('li').addClass('active');
	});

	//Table

	$('.table__parent').click(function(event) {
		$(this).toggleClass('list');
		$('.table__podtitle', this).not(".click").toggleClass('down');
		$(this).nextUntil('.table__parent').toggleClass('hide');
	});

	    /* Таймер */
    var clock;

    var futureDate = new Date("December 22, 2017 09:00 AM UTC+3");
    var currentDate = new Date();


    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;


    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }

    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }

    if (diff < 0) {
        diff = 0;
        $('.clock-stop').addClass("alert alert-danger alert-timer");
        $('.clock-stop').html("Время вышло!");

    }

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                $('.clock-stop').addClass("alert alert-danger alert-timer");
        $('.clock-stop').html("Время вышло!");
        
            }
        },});


});
