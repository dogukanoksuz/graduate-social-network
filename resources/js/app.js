require('bootstrap')
require('shards-ui')

$(window).on("load", function () {
    $(".loader").fadeOut(), $("#preloader").fadeOut("slow"), $("body").css({
        overflow: "visible"
    })
});


