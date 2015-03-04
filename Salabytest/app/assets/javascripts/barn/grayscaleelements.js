$(function() {

    var $element = $(".align-center");

    function hoverGray() {
        $element.nextAll();
    }

    function settEvent() {
        $element.on('hover', hoverGray);
    }

    var init = function init() {

    }();

});