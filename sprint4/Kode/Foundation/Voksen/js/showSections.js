$(function () {

    var $engelskSection, $engelskBtn;

    function settHTML() {

        $engelskSection = $("#engelskAco");
        $engelskBtn = $("#engelskBtn");
    };

    function settEvents() {
        $engelskBtn.click(function() {
            if($engelskSection.is(":hidden")) {
                $engelskSection.slideDown().dequeue().fadeTo(500,1);

            } else {
                $engelskSection.slideUp().dequeue().fadeTo(500,1);
            }
        });

    };
    var init = function () {
        settHTML();
        settEvents();

                
    }();

});