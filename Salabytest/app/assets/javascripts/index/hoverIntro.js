
    var $adultSection, $childSection;

    function settHTML(){

        $adultSection = $('#adultSection');
        $background = $('#background_image');
        $childSection = $('#childSection');
        
    };
    
    function settEvents(){

        
        
        $adultSection.hover(function(){
            $adultSection.css(
            {
             "-webkit-filter" : "grayscale(0)",
             "-moz-filter" : "grayscale(0)",
             "-o-filter" : "grayscale(0)",
             "filter" : "grayscale(0)"  
            });
            
            $background.css(
            {
             "-webkit-filter" : "grayscale(1)",
             "-moz-filter" : "grayscale(1)",
             "-o-filter" : "grayscale(1)",
             "filter" : "grayscale(1)"
            });
            
            $childSection.css(
            {
             "-webkit-filter" : "grayscale(1)",
             "-moz-filter" : "grayscale(1)",
             "-o-filter" : "grayscale(1)",
             "filter" : "grayscale(1)"  
            });
            
            
        });
        
        $background.hover(function(){
            $adultSection.css(
            {
             "-webkit-filter" : "grayscale(1)",
             "-moz-filter" : "grayscale(1)",
             "-o-filter" : "grayscale(1)",
             "filter" : "grayscale(1)"  
            });
            
            $background.css(
            {
             "-webkit-filter" : "grayscale(0)",
             "-moz-filter" : "grayscale(0)",
             "-o-filter" : "grayscale(0)",
             "filter" : "grayscale(0)"
            });
            
            $childSection.css(
            {
             "-webkit-filter" : "grayscale(0)",
             "-moz-filter" : "grayscale(0)",
             "-o-filter" : "grayscale(0)",
             "filter" : "grayscale(0)"  
            });
            
        });
        
    };
        
        var init = function () {
        settHTML();
        settEvents();
                
    }();