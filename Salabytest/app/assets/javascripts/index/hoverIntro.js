$(function () {

    var $engelskSection, $engelskBtn;

    function settHTML(){

        $adultSection = $('#childSection');
        $childSection = $('#childSection');
        
    };
    
    function settEvents(){
        $adultSection.hover(function(){
            $adultSection.css('-webkit-filter', 'grayscale(0)');
            $childSection.css('-webkit-filter', 'grayscale(1)');
        });
        $childSection.hover(function(){
            $adultSection.css('-webkit-filter', 'grayscale(1)');
            $childSection.css('-webkit-filter', 'grayscale(0)');
        });
        
    };
    
        var init = function () {
        settHTML();
        settEvents();
                
    }();
    
    
});