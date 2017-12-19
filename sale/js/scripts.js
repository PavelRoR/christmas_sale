$(document).ready(function () {

	   
  
    var clocks = [];
    
    	
    	
    		var futureDate = new Date("December 21, 2017 09:00 AM UTC+3");
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
    
    		/*  Instantiate a coutdown FlipClock */
    		clocks.push($('#clock_1').FlipClock(diff, {
    			clockFace: 'HourlyCounter',
    			countdown: true,
    			language: 'ru',
    			callbacks: {
    				stop: function () {
    					$('.clock-stop').addClass("alert alert-danger alert-timer");
    					$('.clock-stop').html("Время вышло!");
                    }
    			}
    		}));

		 
				 /*  Instantiate a coutdown FlipClock */
				 clocks.push($('#clock_2').FlipClock(diff, {
					 clockFace: 'HourlyCounter',
					 countdown: true,
					 language: 'ru',
					 callbacks: {
						 stop: function () {
							 $('.clock-stop').addClass("alert alert-danger alert-timer");
							 $('.clock-stop').html("Время вышло!");
						 }
					 }
				 }));
			 









    /* Конец документа */ 
});