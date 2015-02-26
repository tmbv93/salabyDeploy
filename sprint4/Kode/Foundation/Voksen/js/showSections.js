$(function () {

    var $engelskSection, $engelskBtn;
    var $norskSection, $norskBtn;
    var $kohSection, $kohBtn;
    var $mohSection, $mohBtn;
    var $rolledDown;

    function settHTML() {

        $engelskSection = $("#engelskAco");
        $engelskBtn = $("#engelskBtn");
        
        $norskSection = $("#norskAco");
        $norskBtn = $("#norskBtn");
        
        $kohSection = $("#kohAco");
        $kohBtn = $("#kohBtn");
        
        $mohSection = $("#mohAco");
        $mohBtn = $("#mohBtn");
    };

    function settEvents() {
        $engelskBtn.click(function() {  
            sectionSlide($engelskSection);
        });
        $norskBtn.click(function() {  
            sectionSlide($norskSection);
        });
        $kohBtn.click(function() {  
            sectionSlide($kohSection);
        });
        $mohBtn.click(function() {
            sectionSlide($mohSection);
        });

    };
    
    
    function removeSection(){
      $( ".accordion" ).remove();

    };
    
    
    function sectionSlide(para1){
        $exSection =  $( ".accordion" );
        
            if(para1.is(":hidden")) {
                slideDown();
                para1.slideDown().dequeue().fadeTo(500,1);
                $rolledDown = para1;
            }
             else {
                para1.slideUp().dequeue().fadeTo(500,1);
                 para1 = null;
             }
                 
    }
    
    function slideDown(){
        
        if($rolledDown != null)
            $rolledDown.slideUp().dequeue().fadeTo(500,1);
    }
    

    var init = function () {
        settHTML();
        settEvents();

                
    }();

});