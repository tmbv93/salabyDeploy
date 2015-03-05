$(function(){
 
        var $barnehageButton, $kanalSButton, $skoleveienButton,$MFLButton;
 
        var $barnehageDivs, $kanalSDivs, $skoleveienMenuDivs, $MFLDivs;
 
        var $menu
 
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
 
                //menyen dekker alle de fire knappene
                $menu = $(".menu");
 
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
 
                // HUSKE Å LEGG INN ANIMASJON FOR SKOLEVEIENS FAG OGSÅ!!!
 
                // For klikk på skoleveien knapp
                $skoleveienButton.click(function(){
                        if($skoleveienMenuDivs.is(":hidden")){
                        $skoleveienMenuDivs.slideDown();
                        $backgroundImage.css("-webkit-filter", "grayscale(0.9)");
                        $skoleveienButton.css("-webkit-filter", "grayscale(0)");
                        $skoleveienButton.siblings("div").css("-webkit-filter", "grayscale(0.9)");
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
                        $skoleveienMenuDivs.slideUp();
                        $backgroundImage.css("-webkit-filter", "grayscale(0)");
                        $skoleveienButton.siblings("div").css("-webkit-filter", "grayscale(0)");
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