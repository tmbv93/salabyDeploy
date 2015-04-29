
    var $adultSection, $childSection;

    function settHTML(){

        $adultSection = $('#adultSection');
        $background = $('#background_image');
        $childSection = $('#childSection');
        
    };
    
    function settEvents(){

        $adultSection.hover(function(){
            
            $adultSection.removeClass("grey");
            
            $background.addClass("grey");
            
            $childSection.addClass("grey");
        
        });
        
        $background.hover(function(){

            $adultSection.addClass("grey");
            
            $background.removeClass("grey");
            
            $childSection.removeClass("grey");
            
        });
        
    };
        
        var init = function () {
        settHTML();
        settEvents();
                
    }();