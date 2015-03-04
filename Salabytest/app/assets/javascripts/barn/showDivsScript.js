$(function(){

	var $barnehageButton, $kanalSButton, $skoleveienButton,$MFLButton;

	var $barnehageDivs, $kanalSDivs, $skoleveienMenuDivs, $MFLDivs;

	var $menu

	function setHTMLObjects(){
		$barnehageButton = $(".barnehageButton");
		$skoleveienButton =$(".skoleveienButton");
		$kanalSButton = $(".kanalSButton");
		$MFLButton = $(".MFLButton");

		$barnehageDivs = $(".barnehage");
		$skoleveienMenuDivs = $("#skoleveienMenu");
		$kanalSDivs = $(".kanalS");
		$MFLDivs = $(".MFL");

		$menu = $(".menu");
		$backgroundImage = $("#background-image");
		


		
	}

	function buttonEvents(){
		// For klikk på barnehage knapp
		$barnehageButton.click(function(){
			if($barnehageDivs.is(":hidden")){
			$barnehageDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.8)");
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
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			}
		});

		// HUSKE Å LEGG INN ANIMASJON FOR SKOLEVEIENS FAG OGSÅ!!!

		// For klikk på skoleveien knapp
		$skoleveienButton.click(function(){
			if($skoleveienMenuDivs.is(":hidden")){
			$skoleveienMenuDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.8)");
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
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			}
		});
	
		// For klikk på kanalS knapp
		$kanalSButton.click(function(){
			if($kanalSDivs.is(":hidden")){
			$kanalSDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.8)");
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
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			}
		});

		// For klikk på MFL knapp
		$MFLButton.click(function(){
			if($MFLDivs.is(":hidden")){
			$MFLDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.8)");
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
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
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