$(function(){

	var $barnehageButton, $kanalSButton;

	function setHTMLObjects(){
		$barnehageButton = $("#barnehageButton");
		$kanalSButton = $("#kanalSButton");
		
	}

	function buttonEvents(){
		$barnehageButton.click(function(){
			$(".barnehage").toggle();
		});

		$kanalSButton.click(function(){
			$(".kanalS").toggle();
		});
	}
	
	function setEvents(){
		buttonEvents();
	}
			
	var init = function(){
		setHTMLObjects();
		setEvents()
	}();
});