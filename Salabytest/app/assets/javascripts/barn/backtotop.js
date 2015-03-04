jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 100,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

$(function() {

    var $element = $(".align-center");

    function hoverOverGray() {
    	$($element).not(this).css({
    		"filter":"gray",
    		"filter":"grayscale(1)",
    		"-webkit-filter":"grayscale(1)"
    	});
    }

    function hoverLeaveNormal() {
    	$($element).not(this).css({
    		"filter":"none",
    		"filter":"grayscale(0)",
    		"-webkit-filter":"grayscale(0)"
    	});
    }

    function settEvent() {
        $element.on('mouseenter', hoverOverGray);
        $element.on('mouseleave', hoverLeaveNormal)
    }

    var init = function(){
        settEvent();
    }();

});