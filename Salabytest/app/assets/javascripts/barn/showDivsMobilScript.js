$(function(){

	var $barnehageButtonMobil, $skoleveienButtonMobil, $kanalSButtonMobil, $MFLButtonMobil;

	var $barnehageDivs, $kanalSDivs, $skoleveienMenuDivs, $MFLDivs;

	function setHTMLObjects(){
		$barnehageButtonMobil = $("#barnehageButtonMobil");
		$skoleveienButtonMobil =$("#skoleveienButtonMobil");
		$kanalSButtonMobil = $("#kanalSButtonMobil");
		$MFLButtonMobil = $("#MFLButtonMobil");

		$barnehageDivs = $(".barnehage");
		$skoleveienMenuDivs = $("#skoleveienMenu");
		$kanalSDivs = $(".kanalS");
		$MFLDivs = $(".MFL");
		
	}

	function buttonEvents(){
		// For klikk på barnehage knapp
		$barnehageButtonMobil.click(function(){
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

		// For klikk på skoleveien knapp
		$skoleveienButtonMobil.click(function(){
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
		$kanalSButtonMobil.click(function(){
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
		$MFLButtonMobil.click(function(){
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