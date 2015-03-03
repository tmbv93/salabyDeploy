$(function () {

    //DECLARE VARIABLES FOR THE
    //DIFFERENT SECTIONS AND BUTTONS
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

    
    //"LINK" BUTTONS AND SECTIONS TO 
    //THERE VARIABLES
    function settHTML() {
        $engelskSection = $("#engelskAco");
        $engelskBtn = $("#engelskBtn"); //Button
        
        $norskSection = $("#norskAco");
        $norskBtn = $("#norskBtn"); //Button
        
        $naturSection = $("#naturAco");
        $naturBtn = $("#naturBtn");
        
        $kohSection = $("#kohAco");
        $kohBtn = $("#kohBtn"); //Button
        
        $mohSection = $("#mohAco");
        $mohBtn = $("#mohBtn"); //Button
        
        $rleSection = $("#rleAco");
        $rleBtn = $("#rleBtn"); //Button
        
        $musikkSection = $("#musikkAco");
        $musikkBtn = $("#musikkBtn"); //Button
        
        $matteSection = $("#matteAco");
        $matteBtn = $("#matteBtn"); //Button
        
        $samfunnSection = $("#samfunnAco");
        $samfunnBtn = $("#samfunnBtn"); //Button
    };

    
    //EVENT CONNECTOR TO APPLY
    //THE FUNCTION TO EACH BUTTON
    //AS WELL AS GIVING THE FUNCTION
    //THE CORRECT PARAMETER
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
    
    

    function sectionSlide(para1){
        //STORES CURRENT ACCORDION
        //IN THIS VARIABLE
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