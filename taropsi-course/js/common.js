jQuery(document).ready(function($) {

	var wdh = $(window).width();

// Работа форм
$(function() {
	$("body").on("submit", ".form_newsletter", function(e) {
		var message = "Укажите значения всех обязательных для заполнения полей!";
		var ret = 0;
		var emVal = $(".email-block .field_value", this).val();
		var pVal = $(".phone-block .field_value", this).val();
		if($(".email-block .field_value", this).val().length < 1){
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
		$('#span_email', this).html('Зарегистрирован Ваш e-mail:<br> ' + emVal +' <br>Бонус уже у Вас на почте').removeClass('hide');
		$('#span_phone', this).html('Введите свой номер телефона<br> и мы напомним вам о начале интенсива').removeClass('hide');
		//$(this).attr("onsubmit", "return true;");
		if(pVal) {
			window.open("https://mastervision.su/taropsi/bonus.html");
			$('#span_phone', this).html('Ваш номер ' + pVal + ' <br> зарегистрирован!');
		}
	});
	$(".phone-block input", this).keydown(function (e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 107, 187]) !== -1 ||(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || (e.keyCode >= 35 && e.keyCode <= 40)) {
			return;
		}if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
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
/*
	//Слайдеры plan-days
	$('.plan__slider-days').bxSlider({
		//adaptiveHeight: true,
		responsive: true,
		mode: 'fade',
		pagerCustom: '.plan__slider-pager',
		nextSelector: '#plan-slider-next',
		prevSelector: '#plan-slider-prev',
	});
*/
	//Слайдеры отзывы
	$('.js-video-slider').bxSlider({
		//adaptiveHeight: true,
		responsive: true,
		mode: 'fade',
		pagerCustom: '.js-video-slider__pager',
		nextSelector: '#video-slider-next',
		prevSelector: '#video-slider-prev',
	});

	$('.js-text-slider').bxSlider({
		adaptiveHeight: true,
		responsive: true,
		mode: 'fade',
		auto: false,
		pagerCustom: '.js-text-slider__pager',
		nextText: 'next',
		prevText: 'prev',
		nextSelector: '#text-slider-next',
		prevSelector: '#text-slider-prev'
	});

	//Tabs Course
	$("#bx-plan__slider").bxSlider({
		controls: false,
		responsive: true,
		adaptiveHeight: true,
		pagerCustom: "#bx-plan-pager",
		controls: false,
		mode: "fade",
		auto: false,
		autoHover: true
	});
/*
	$("#bx-plan__silver-slider").bxSlider({
		controls: false,
		responsive: true,
		//adaptiveHeight: true,
		pagerCustom: "#bx-plan__silver-pager",
		//prevSelector: "#bx-plan__silver-prev",
		//nextSelector: "#bx-plan__silver-next",
		mode: "fade",
		auto: false,
		autoHover: true
	});

	$("#bx-plan__gold-slider").bxSlider({
		controls: false,
		responsive: true,
		//adaptiveHeight: true,
		pagerCustom: "#bx-plan__gold-pager",
		//prevSelector: "#bx-plan__gold-prev",
		//nextSelector: "#bx-plan__gold-next",
		mode: "fade",
		auto: false,
		autoHover: true
	});

	$("#bx-plan__platinum-slider").bxSlider({
		controls: false,
		responsive: true,
		//adaptiveHeight: true,
		pagerCustom: "#bx-plan__platinum-pager",
		//prevSelector: "#bx-plan__platinum-prev",
		//nextSelector: "#bx-plan__platinum-next",
		mode: "fade",
		auto: false,
		autoHover: true
	});

*/
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
// Sound for chat
		document.addEventListener('chatLoaded', function(event) {
	    event.chat.audioControl.loadSoundFile('https://www.soundjay.com/door/sounds/door-knock-3.mp3');
	    document.addEventListener('newMessage', function(event) {
	        var chat = event.chat;
	        if (!chat.isActiveTab()) {
	            event.chat.audioControl.play();
	        }
	    });
	});

});
