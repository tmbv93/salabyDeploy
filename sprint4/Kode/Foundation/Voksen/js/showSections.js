$(function () {

    var $engelskSection, $engelskBtn;

    function settHTML() {

        $engelskSection = $("#engelskAco");
        $engelskBtn = $("#engelskBtn");
    };

    function settEvents() {
        $engelskBtn.click(function() {
            if($engelskSection.is(":hidden")) {
                $engelskSection.slideDown();

            } else {
                $engelskSection.slideUp();
            }
        });

    };
    var init = function () {
        settHTML();
        settEvents();

                
    }();

});