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
    var $isThisPressed;

    
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
        
        $isThisPressed = false;
    };

    
    //EVENT CONNECTOR TO APPLY
    //THE FUNCTION TO EACH BUTTON
    //AS WELL AS GIVING THE FUNCTION
    //THE CORRECT PARAMETER
    function settEvents() {
        $engelskBtn.click(function() {  
            sectionSlide($engelskSection, $engelskBtn);
        });
        $norskBtn.click(function() {  
            sectionSlide($norskSection, $norskBtn);
        });
        $kohBtn.click(function() {  
            sectionSlide($kohSection, $kohBtn);
        });
        $mohBtn.click(function() {
            sectionSlide($mohSection, $mohBtn);
        });
        $naturBtn.click(function() {
            sectionSlide($naturSection, $naturBtn);
        });
        $rleBtn.click(function() {
            sectionSlide($rleSection, $rleBtn);
        });
        $musikkBtn.click(function() {
            sectionSlide($musikkSection, $musikkBtn);
        });
        $samfunnBtn.click(function() {
            sectionSlide($samfunnSection, $samfunnBtn);
        });
        $matteBtn.click(function() {
            sectionSlide($matteSection, $matteBtn);
        });

    };
    
    

    function sectionSlide(para1, para2){
        //STORES CURRENT ACCORDION
        //IN THIS VARIABLE
        
            if(para1.is(":hidden")) {
                slideDown();
                -
                para1.slideDown().dequeue().fadeTo(500,1);
                $rolledDown = para1;
                para2.css("color", "red");
                
                console.log("Rolleddown" + para1);
                
                $pressedBtn = para2.selector;
                
                
                
                //Sibling av pressedBtn skal bli black.
                console.log("BEFORE " + $isThisPressed);
                console.log($pressedBtn);
                $isThisPressed = true;
                
                console.log("AFTER " + $isThisPressed);
                
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