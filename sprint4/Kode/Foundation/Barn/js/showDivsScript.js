$(function(){

	var $barnehageButton, $kanalSButton;

	var $barnehageDivs, $kanalSDivs;

	function setHTMLObjects(){
		$barnehageButton = $("#barnehageButton");
		$kanalSButton = $("#kanalSButton");
		$barnehageDivs = $(".barnehage");
		$kanalSDivs = $(".kanalS");
		
	}

	function buttonEvents(){
		$barnehageButton.click(function(){
			if($barnehageDivs.is(":hidden")){
			$barnehageDivs.slideDown();
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
				}
			}else{
			$barnehageDivs.slideUp();
			}
		});

		$kanalSButton.click(function(){
			if($kanalSDivs.is(":hidden")){
			$kanalSDivs.slideDown();
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
				}
			}else{
			$kanalSDivs.slideUp();
			}
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