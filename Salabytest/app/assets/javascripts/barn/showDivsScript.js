$(function(){

	var $barnehageButton, $kanalSButton, $skoleveienButton,$MFLButton;

	var $barnehageDivs, $kanalSDivs, $skoleveienMenuDivs, $MFLDivs;

	function setHTMLObjects(){
		$barnehageButton = $(".barnehageButton");
		$skoleveienButton =$(".skoleveienButton");
		$kanalSButton = $(".kanalSButton");
		$MFLButton = $(".MFLButton");

		$barnehageDivs = $(".barnehage");
		$skoleveienMenuDivs = $("#skoleveienMenu");
		$kanalSDivs = $(".kanalS");
		$MFLDivs = $(".MFL");
		
	}

	function buttonEvents(){
		// For klikk på barnehage knapp
		$barnehageButton.click(function(){
			if($barnehageDivs.is(":hidden")){
			$barnehageDivs.slideDown();
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
				}
				if($skoleveienMenuDivs.is(":visible")){
					($skoleveienMenuDivs).slideUp();
				}
				if($MFLDivs.is(":visible")){
					($MFLDivs).slideUp();
				}

			}else{
			$barnehageDivs.slideUp();
			}
		});

		// HUSKE Å LEGG INN ANIMASJON FOR SKOLEVEIENS FAG OGSÅ!!!

		// For klikk på skoleveien knapp
		$skoleveienButton.click(function(){
			if($skoleveienMenuDivs.is(":hidden")){
			$skoleveienMenuDivs.slideDown();
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
				}
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
				}
				if($MFLDivs.is(":visible")){
					($MFLDivs).slideUp();
				}
			}else {
			$skoleveienMenuDivs.slideUp();
			}
		});
	
		// For klikk på kanalS knapp
		$kanalSButton.click(function(){
			if($kanalSDivs.is(":hidden")){
			$kanalSDivs.slideDown();
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
				}
				if($skoleveienMenuDivs.is(":visible")){
					($skoleveienMenuDivs).slideUp();
				}
				if($MFLDivs.is(":visible")){
					($MFLDivs).slideUp();
				}
			}else{
			$kanalSDivs.slideUp();
			}
		});

		// For klikk på MFL knapp
		$MFLButton.click(function(){
			if($MFLDivs.is(":hidden")){
			$MFLDivs.slideDown();
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
				}
				if($skoleveienMenuDivs.is(":visible")){
					($skoleveienMenuDivs).slideUp();
				}
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
				}
			}else{
			$MFLDivs.slideUp();
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