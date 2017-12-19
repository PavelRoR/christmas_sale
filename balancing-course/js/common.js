var c1 = document.getElementById( 'c1' ),
	ctx1 = c1.getContext( '2d' ),
	c2 = document.getElementById( 'c2' ),
	ctx2 = c2.getContext( '2d' ),
	twopi = Math.PI * 2,
	parts = [],
	sizeBase,
	cw,
	opt,
	hue,
	count;

function rand( min, max ) {
	return Math.random() * ( max - min ) + min;
}

function hsla( h, s, l, a ) {
	return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
}

function create() {
	sizeBase = cw + ch;
	count = Math.floor( sizeBase * 0.3 ),
	hue = rand( 0, 100), //было 360
	opt = {
		radiusMin: 1,
		radiusMax: sizeBase * 0.04,
		blurMin: 10,
		blurMax: sizeBase * 0.04,
		hueMin: hue,
		hueMax: hue + 100,
		saturationMin: 10,
		saturationMax: 70,
		lightnessMin: 20,
		lightnessMax: 50,
		alphaMin: 0.1,
		alphaMax: 0.5
	}
	ctx1.clearRect( 0, 0, cw, ch );
	ctx1.globalCompositeOperation = 'lighter';
	while( count-- ) {
		var radius = rand( opt.radiusMin, opt.radiusMax ),
			blur = rand( opt.blurMin, opt.blurMax ),
			x = rand( 0, cw ),
			y = rand( 0, ch ),
			hue = rand(opt.hueMin, opt.hueMax ),
			saturation = rand( opt.saturationMin, opt.saturationMax ),
			lightness = rand(  opt.lightnessMin, opt.lightnessMax ),
			alpha = rand( opt.alphaMin, opt.alphaMax );

		ctx1.shadowColor = hsla( hue, saturation, lightness, alpha );
		ctx1.shadowBlur = blur;
		ctx1.beginPath();
		ctx1.arc( x, y, radius, 0, twopi );
		ctx1.closePath();
		ctx1.fill();
	}

	parts.length = 0;
	for( var i = 0; i < Math.floor( ( cw + ch ) * 0.03 ); i++ ) {
		parts.push({
			radius: rand( 1, sizeBase * 0.03 ),
			x: rand( 0, cw ),
			y: rand( 0, ch ),
			angle: rand( 0, twopi ),
			vel: rand( 0.1, 0.5 ),
			tick: rand( 0, 10000 )
		});
	}
}

function init() {
	resize();
	create();
	loop();
}

function loop() {
	requestAnimationFrame( loop );

	ctx2.clearRect( 0, 0, cw, ch );
	ctx2.globalCompositeOperation = 'source-over';
	ctx2.shadowBlur = 0;
	ctx2.drawImage( c1, 0, 0 );
	ctx2.globalCompositeOperation = 'lighter';

	var i = parts.length;
	ctx2.shadowBlur = 15;
	ctx2.shadowColor = '#fff';
	while( i-- ) {
		var part = parts[ i ];

		part.x += Math.cos( part.angle ) * part.vel;
		part.y += Math.sin( part.angle ) * part.vel;
		part.angle += rand( -0.05, 0.05 );

		ctx2.beginPath();
		ctx2.arc( part.x, part.y, part.radius, 0, twopi );
		ctx2.fillStyle = hsla( 0, 0, 100, 0.075 + Math.cos( part.tick * 0.02 ) * 0.05 );
		ctx2.fill();

		if( part.x - part.radius > cw ) { part.x = -part.radius }
		if( part.x + part.radius < 0 )  { part.x = cw + part.radius }
		if( part.y - part.radius > ch ) { part.y = -part.radius }
		if( part.y + part.radius < 0 )  { part.y = ch + part.radius }

		part.tick++;
	}
}

function resize() {
	cw = c1.width = c2.width = document.getElementById('header').offsetWidth,
	ch = c1.height = c2.height = document.getElementById('header').offsetHeight;
	create();
}

//function click() {
//	create()
//}

window.addEventListener( 'resize', resize );
//window.addEventListener( 'click', click );

init();

jQuery(document).ready(function($) {

	var wdh = $(window).width();
	if(wdh < 960) {

	};

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
		$('#span_email', this).html('Зарегистрирован Ваш e-mail:<br>' + emVal +' <br>Бонус уже у Вас на почте').removeClass('hide');
		$('#span_phone', this).html('Введите свой номер телефона<br> и мы напомним вам о начале вебинара').removeClass('hide');
		//$(this).attr("onsubmit", "return true;");
		if(pVal) {
			window.open("https://mastervision.su/balancing/bonus.html");
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

	//why-slider
	$('#da-slider').cslider({
		bgincrement: 450,
		autoplay: true,
		interval: 6000
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
/*
	//Слайдер сертификаты
	$('.author__sert-next').click(function() {
		$('.author__sert-item').slice(0, 15).not('.hide').first().addClass('hide');
	});

	$('.author__sert-prev').click(function() {
		$('.author__sert-item.hide').last().removeClass('hide');
	});
*/
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
	//Слайдеры отзывы
	$('.js-video-slider').bxSlider({
		//adaptiveHeight: true,
		responsive: true,
		mode: 'fade',
		pagerCustom: '.js-video-slider__pager',
		nextSelector: '#video-slider-next',
		prevSelector: '#video-slider-prev',
	});
*/
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
		adaptiveHeight: true,
		pagerCustom: "#bx-plan-pager",
		controls: false,
		mode: "fade",
		auto: false,
		autoHover: true
	});

	$("#bx-plan__silver-slider").bxSlider({
		adaptiveHeight: true,
		pagerCustom: "#bx-plan__silver-pager",
		prevSelector: "#bx-plan__silver-prev",
		nextSelector: "#bx-plan__silver-next",
		mode: "fade",
		auto: false,
		autoHover: true
	});

	$("#bx-plan__gold-slider").bxSlider({
		adaptiveHeight: true,
		pagerCustom: "#bx-plan__gold-pager",
		prevSelector: "#bx-plan__gold-prev",
		nextSelector: "#bx-plan__gold-next",
		mode: "fade",
		auto: false,
		autoHover: true
	});

	$("#bx-plan__platinum-slider").bxSlider({
		adaptiveHeight: true,
		pagerCustom: "#bx-plan__platinum-pager",
		prevSelector: "#bx-plan__platinum-prev",
		nextSelector: "#bx-plan__platinum-next",
		mode: "fade",
		auto: false,
		autoHover: true
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
