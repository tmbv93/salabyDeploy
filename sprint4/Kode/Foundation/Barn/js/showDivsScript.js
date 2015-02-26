$(function(){

	var $barnehageButton, $kanalSButton, $skoleveienButton;

	var $barnehageDivs, $kanalSDivs;

	function setHTMLObjects(){
		$barnehageButton = $("#barnehageButton");
		$skoleveienButton =$("#skoleveienButton");
		$kanalSButton = $("#kanalSButton");
		$barnehageDivs = $(".barnehage");
		$skoleveienMenuDivs = $("#skoleveienMenu");
		$kanalSDivs = $(".kanalS");
		
	}

	function buttonEvents(){
		$barnehageButton.click(function(){
			if($barnehageDivs.is(":hidden") && $skoleveienMenuDivs.is(":hidden")){
			$barnehageDivs.slideDown();
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
				}
			}else{
			$barnehageDivs.slideUp();
			}
		});

		$skoleveienButton.click(function(){
			if($skoleveienMenuDivs.is(":hidden")){
			$skoleveienMenuDivs.slideDown();
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
				}
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
				}	
			}else {
			$skoleveienMenuDivs.slideUp();
			}
		});
	

		$kanalSButton.click(function(){
			if($kanalSDivs.is(":hidden") && $skoleveienMenuDivs.is(":hidden")){
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