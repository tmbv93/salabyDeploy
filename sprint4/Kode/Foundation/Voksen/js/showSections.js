$(function () {

    var $engelskSection, $engelskBtn;
    var $norskSection, $norskBtn;
    var $mohSection, $mohBtn;
    var $kohSection, $kohBtn;
    var $naturSection, $naturBtn;
    var $rleSection, $rleBtn;
    var $musikkSection, $musikkBtn;
    var $matteSection, $matteBtn;
    var $samfunnSection, $samfunnBtn;
    var $rolledDown;

    function settHTML() {

        $engelskSection = $("#engelskAco");
        $engelskBtn = $("#engelskBtn");
        
        $norskSection = $("#norskAco");
        $norskBtn = $("#norskBtn");
        
        $naturSection = $("#naturAco");
        $naturBtn = $("#naturBtn");
        
        $kohSection = $("#kohAco");
        $kohBtn = $("#kohBtn");
        
        $mohSection = $("#mohAco");
        $mohBtn = $("#mohBtn");
        
        $rleSection = $("#rleAco");
        $rleBtn = $("#rleBtn");
        
        $musikkSection = $("#musikkAco");
        $musikkBtn = $("#musikkBtn");
        
        $matteSection = $("#matteAco");
        $matteBtn = $("#matteBtn");
        
        $samfunnSection = $("#samfunnAco");
        $samfunnBtn = $("#samfunnBtn");
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
        $naturBtn.click(function() {
            sectionSlide($naturSection);
        });
        $rleBtn.click(function() {
            sectionSlide($rleSection);
        });
        $musikkBtn.click(function() {
            sectionSlide($musikkSection);
        });
        $samfunnBtn.click(function() {
            sectionSlide($samfunnSection);
        });
        $matteBtn.click(function() {
            sectionSlide($matteSection);
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