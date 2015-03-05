$(function(){

	var $barnehageButton, $kanalSButton, $skoleveienButton,$MFLButton;

	var $barnehageDivs, $kanalSDivs, $skoleveienMenuDivs, $MFLDivs;

	var $forste, $andre, $morsmål, $skolestart;


	function setHTMLObjects(){
		// Alle de fire første knappene
		$barnehageButton = $(".barnehageButton");
		$skoleveienButton =$(".skoleveienButton");
		$kanalSButton = $(".kanalSButton");
		$MFLButton = $(".MFLButton");

		//Klasser for fagene som ligger inne i de fire første knappene
		$barnehageDivs = $(".barnehage");
		$skoleveienMenuDivs = $("#skoleveienMenu");
		$kanalSDivs = $(".kanalS");
		$MFLDivs = $(".MFL");

		//klasser for fagene som ligger inne i de fire skoleveien klassene
		$skolestartButton = $("#skolestartButton");
		$forsteButton = $("#forsteButton");
		$andreButton = $("#andreButton");
		$morsmaalButton = $("#morsmaalButton");
		

		//Klasser for fagene som ligger inne i skoleveiens meny.
		$skolestartDivs = $(".skolestart");
		$forsteDivs = $(".forste");
		$andreDivs = $(".andre");
		$morsmaalDivs = $(".morsmaal");

		//Id til bakgrunsbildet
		$backgroundImage = $("#background-image");
				
	}

	function buttonEvents(){
		// For klikk på barnehage knapp
		$barnehageButton.click(function(){
			//hvis barnehage er gjemt
			if($barnehageDivs.is(":hidden")){
			$barnehageDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.9)");
			$barnehageButton.css("-webkit-filter", "grayscale(0)");
			$barnehageButton.siblings("div").css("-webkit-filter", "grayscale(0.9)");

				//hvis kanals er synlig(dette gjentaes på alle knappene 
				//og burde kunne taes vekkmed sibling senere)


				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
					$kanalSButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($skoleveienMenuDivs.is(":visible")){
					($skoleveienMenuDivs).slideUp();
					$skoleveienButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($MFLDivs.is(":visible")){
					($MFLDivs).slideUp();
					$MFLButton.css("-webkit-filter", "grayscale(0.9)");
				}

			}else{
			//hvis synlig
			$barnehageDivs.slideUp();
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			$barnehageButton.siblings("div").css("-webkit-filter", "grayscale(0)");
			
		}
		});
		// lkdsfø sfl sldjfjsdflkjsdlkjflsdkøsdj lkf 
		// asjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfsadfsdsadlkfjsadf
		// For klikk på skoleveien knapp
		$skoleveienButton.click(function(){
			if($skoleveienMenuDivs.is(":hidden")){
			$skoleveienMenuDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.9)");
			$skoleveienButton.css("-webkit-filter", "grayscale(0)");
			$skoleveienButton.siblings("div").css("-webkit-filter", "grayscale(0.9)");
				if($forsteDivs.is(":visible")){
					($forsteDivs).slideUp();
					$barnehageButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($andreDivs.is(":visible")){
					($andreDivs).slideUp();
					$kanalSButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($morsmaalDivs.is(":visible")){
					($morsmaalDivs).slideUp();
					$morsmaalButton.css("-webkit-filter", "grayscale(0.9)");
				}
			}else {
			$skoleveienMenuDivs.slideUp();
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			$skoleveienButton.siblings("div").css("-webkit-filter", "grayscale(0)");
			}
		});
		// sdøkfj sdafsøidføsdkføsdj-fjlsdkj fklsdjk jksdld
		// dslkfjsldk følsk dløfk sdøl kosdk føoskodf opsd posdkfp

		//Skoleveiens fag!!!!!!
		$skolestartButton.click(function(){
			if($skolestartDivs.is(":hidden")){
			$skolestartDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.9)");
			$skolestartButton.css("-webkit-filter", "grayscale(0)");
			$skolestartButton.siblings("div").css("-webkit-filter", "grayscale(0.9)");
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
					$barnehageButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
					$kanalSButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($MFLDivs.is(":visible")){
					($MFLDivs).slideUp();
					$MFLButton.css("-webkit-filter", "grayscale(0.9)");
				}
			}else {
			$skolestartDivs.slideUp();
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			$skolestartButton.siblings("div").css("-webkit-filter", "grayscale(0)");
			}
		});
	
		// For klikk på kanalS knapp
		$kanalSButton.click(function(){
			if($kanalSDivs.is(":hidden")){
			$kanalSDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.9)");
			$kanalSButton.css("-webkit-filter", "grayscale(0)");
			$kanalSButton.siblings("div").css("-webkit-filter", "grayscale(0.9)");
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
					$barnehageButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($skoleveienMenuDivs.is(":visible")){
					($skoleveienMenuDivs).slideUp();
					$skoleveienButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($MFLDivs.is(":visible")){
					($MFLDivs).slideUp();
					$MFLButton.css("-webkit-filter", "grayscale(0.9)");
				}
			}else{
			$kanalSDivs.slideUp();
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			$kanalSButton.siblings("div").css("-webkit-filter", "grayscale(0)");
			}
		});

		// For klikk på MFL knapp
		$MFLButton.click(function(){
			if($MFLDivs.is(":hidden")){
			$MFLDivs.slideDown();
			$backgroundImage.css("-webkit-filter", "grayscale(0.9)");
			$MFLButton.css("-webkit-filter", "grayscale(0)");
			$MFLButton.siblings("div").css("-webkit-filter", "grayscale(0.9)");
				if($barnehageDivs.is(":visible")){
					($barnehageDivs).slideUp();
					$barnehageButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($skoleveienMenuDivs.is(":visible")){
					($skoleveienMenuDivs).slideUp();
					$skoleveienButton.css("-webkit-filter", "grayscale(0.9)");
				}
				if($kanalSDivs.is(":visible")){
					($kanalSDivs).slideUp();
					$kanalSButton.css("-webkit-filter", "grayscale(0.9)");
				}
			}else{
			$MFLDivs.slideUp();
			$backgroundImage.css("-webkit-filter", "grayscale(0)");
			$MFLButton.siblings("div").css("-webkit-filter", "grayscale(0)");
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