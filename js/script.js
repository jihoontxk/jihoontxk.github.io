$(window).on("load", function(){

	$(".loading .inner").fadeOut(500,function(){
		$(".loading").fadeOut(750);
	});

	$(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });

});







$(document).ready(function() {
	
	$('#slides').superslides({
		animation: 'fade', 
		play: 3500,

	});

	var typed = new Typed(".typed", {
		strings: ["QA Automation Engineer", "Web Developer", "App Developer"], 
		typeSpeed: 105,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav: true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});






    var skiilsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {

    	if(window.pageYOffset > skiilsTopOffset - $(window).height() + 300){

    		$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
    	}


    	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){

    		 $(".counter").each(function() {
	    	var element = $(this);
	    	var endVal = parseInt(element.text());

	    	var countOption = {
	    		"endVal": endVal,
	    		"duration": 3.5
	    	}

	    	element.countup(countOption);
	    })

    		countUpFinished = true;
    	}


    });


    $("[data-fancybox]").fancybox();


    $("#filters a").click(function() {
    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");


    	var selector = $(this).attr("data-filter")

    	$(".items").isotope({
    		filter: selector,
    		animationOptions: {
    			duration: 1500,
    			easing: 'linear',
    			queue: false
    		}
    	});

    	return false;

 	});
 	
 	$(window).on('resize', function(){
      skillsTopOffset = $(".skillsSection").offset().top;
      statsTopOffset = $(".statsSection").offset().top;
	});



    $("#navigation li a").click(function(e){
    	e.preventDefault();

    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;
    	$("html, body").animate({ scrollTop: targetPosition - 40 }, "slow");
    });

 	 $(document).on('click','.navbar-collapse.show',function(e) {
        $(this).collapse('hide');
    });




    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

    	var body = $("body");

    	if($(window).scrollTop() >= navTop) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	}
    	else {
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav");
    	}

    }

});
