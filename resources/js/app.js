import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'shards-ui/dist/js/shards.min';

$(window).on("load", function () {
    $(".loader").fadeOut(), $("#preloader").fadeOut("slow"), $("body").css({
        overflow: "visible"
    })
});




