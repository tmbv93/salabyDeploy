$(function(){

        var $barnehageButton, $kanalSButton, $skoleveienButton,$MFLButton;

        var $barnehageDivs, $kanalSDivs, $skoleveienMenuDivs, $MFLDivs;

        var $menu;

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
                $menu = $(".barn-meny");

                //Id til bakgrunsbildet
                $backgroundImage = $("#background-image");

        }

        function buttonEvents(){
                // For klikk på barnehage knapp
                $barnehageButton.click(function(){
                        //hvis barnehage er gjemt
                        if($barnehageDivs.is(":hidden")){

                                $barnehageDivs.stop(true, false).slideDown(500);
                                $backgroundImage.addClass("grey");
                                $barnehageButton.removeClass("grey");
                                $barnehageButton.siblings("div").addClass("grey");

                                //hvis kanals er synlig(dette gjentaes på alle knappene
                                //og burde kunne taes vekk med sibling senere)

                                if($kanalSDivs.is(":visible")){
                                        ($kanalSDivs).stop(true, false).slideUp(500);
                                        $kanalSButton.addClass("grey");
                                }
                                if($skoleveienMenuDivs.is(":visible")){
                                        ($skoleveienMenuDivs).stop(true, false).slideUp(500);
                                        $skoleveienButton.addClass("grey");
                                }
                                if($MFLDivs.is(":visible")){
                                        ($MFLDivs).stop(true, false).slideUp(500);
                                        $MFLButton.addClass("grey");
                                }
                                $menu.animate({"margin-top": "50px"}, 500);
                        }else{
                        //hvis synlig
                        $menu.animate({"margin-top": "100px"}, 500);
                        $barnehageDivs.stop(true, false).slideUp(500);
                        $backgroundImage.removeClass("grey");
                        $barnehageButton.siblings("div").removeClass("grey");
                        }
                });

                // HUSKE Å LEGG INN ANIMASJON FOR SKOLEVEIENS FAG OGSÅ!!!


                // For klikk på skoleveien knapp
                $skoleveienButton.click(function(){
                        if($skoleveienMenuDivs.is(":hidden")){

                                $skoleveienMenuDivs.stop(true, false).slideDown(500);
                                $backgroundImage.addClass("grey");
                                $skoleveienButton.removeClass("grey");
                                $skoleveienButton.siblings("div").addClass("grey");

                                if($barnehageDivs.is(":visible")){
                                        ($barnehageDivs).stop(true, false).slideUp(500);
                                        $barnehageButton.addClass("grey");
                                }
                                if($kanalSDivs.is(":visible")){
                                        ($kanalSDivs).stop(true, false).slideUp(500);
                                        $kanalSButton.addClass("grey");
                                }
                                if($MFLDivs.is(":visible")){
                                        ($MFLDivs).stop(true, false).slideUp(500);
                                        $MFLButton.addClass("grey");
                                }
                                //flytter menyen opp
                                $menu.animate({"margin-top": "50px"}, 500);
                        }else {
                        //hvis synlig
                        $menu.animate({"margin-top": "100px"}, 500);
                        $skoleveienMenuDivs.stop(true, false).slideUp(500);
                        $backgroundImage.removeClass("grey");
                        $skoleveienButton.siblings("div").removeClass("grey");
                        }
                });

                // For klikk på kanalS knapp
                $kanalSButton.click(function(){
                        if($kanalSDivs.is(":hidden")){

                                $kanalSDivs.stop(true, false).slideDown(500);
                                $backgroundImage.addClass("grey");
                                $kanalSButton.removeClass("grey");
                                $kanalSButton.siblings("div").addClass("grey");

                                if($barnehageDivs.is(":visible")){
                                        ($barnehageDivs).stop(true, false).slideUp(500);
                                        $barnehageButton.addClass("grey");
                                }
                                if($skoleveienMenuDivs.is(":visible")){
                                        ($skoleveienMenuDivs).stop(true, false).slideUp(500);
                                        $skoleveienButton.addClass("grey");
                                }
                                if($MFLDivs.is(":visible")){
                                        ($MFLDivs).stop(true, false).slideUp(500);
                                        $MFLButton.addClass("grey");
                                }
                                 //flytter menyen opp
                                $menu.animate({"margin-top": "50px"}, 500);
                        }else{
                        //hvis synlig
                        $menu.animate({"margin-top": "100px"}, 500);
                        $kanalSDivs.stop(true, false).slideUp(500);
                        $backgroundImage.removeClass("grey");
                        $kanalSButton.siblings("div").removeClass("grey");
                        }
                });

                // For klikk på MFL knapp
                $MFLButton.click(function(){
                        if($MFLDivs.is(":hidden")){

                                $MFLDivs.stop(true, false).slideDown(500);
                                $backgroundImage.addClass("grey");
                                $MFLButton.removeClass("grey");
                                $MFLButton.siblings("div").addClass("grey");
                                if($barnehageDivs.is(":visible")){
                                        ($barnehageDivs).stop(true, false).slideUp();
                                        $barnehageButton.addClass("grey");
                                }
                                if($skoleveienMenuDivs.is(":visible")){
                                        ($skoleveienMenuDivs).stop(true, false).slideUp();
                                        $skoleveienButton.addClass("grey");
                                }
                                if($kanalSDivs.is(":visible")){
                                        ($kanalSDivs).stop(true, false).slideUp();
                                        $kanalSButton.addClass("grey");
                                }
                                //flytter menyen opp
                                $menu.stop(true, false).animate({"margin-top": "50px"}, 500);
                        }else{
                        //hvis synlig
                        $menu.animate({"margin-top": "100px"}, 500);
                        $MFLDivs.stop(true, false).slideUp();
                        $backgroundImage.removeClass("grey");
                        $MFLButton.siblings("div").removeClass("grey");
                        }
                });
        }

        function setEvents(){
                buttonEvents();
        }

        var init = function(){
                setHTMLObjects();
                setEvents();
        }();
});