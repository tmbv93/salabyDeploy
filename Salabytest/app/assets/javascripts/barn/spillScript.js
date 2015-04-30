$(function() {


        function settEvents() {
            $(".circle").on("click", function() {

                var parentsId = $(this).parent().attr("id");
                $("." + parentsId).toggle();

                if ($("." + parentsId).is(":visible")) {
                    var audio = $("#" + parentsId + "Lyd")[0];
                    audio.play();
                }

            });

            $("#nextBtn").on("click", function() {
                $(".offer,.blomster,.rokelse,.vibhuti,.ganesha").css({
                    "top": 0,
                    "left": 0,
                    "right": 0,
                    "bottom": 0,
                    "display": "inline"
                });

                $(".navn").css("position", "relative");

                $("#draggable").css({
                    "position": "relative",
                    "top": 460 + "px",
                    "left": 20 + "px"
                });

                $(".circle").off();

            });

            $("#draggable p").draggable({
                revert: true,
                snap: "#drop",
                snapMode: "inner",
                start: function(e, ui) {
                    //ui.helper
                    ui.helper.fadeTo(500, 1);

                },
                stop: function(e, ui) {
                    ui.helper.fadeTo(500, 1);
                }
            });

            $("#bokser .circle").droppable({

                drop: function(e, ui) {

                    var sirkelDiv = $(this).parent().attr("id");
                    var svarDiv = ui.draggable.attr("data-navn");

                    if (sirkelDiv === svarDiv) {
                        $(this).animate({
                            "background-color": "green"
                        }, 500);
                        ui.draggable.draggable("disable");
                        ui.draggable.draggable("option", "revert", "false");



                    } else {
                        $(this).animate({
                            "background-color": "red"
                        }, 500);
                    }
                }
            });
        }

        var init = function() {
            settEvents();
        }();
    });