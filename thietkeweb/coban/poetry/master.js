jQuery(document).ready(function() {
    jQuery("#title").addClass("title");
    jQuery("#first").addClass("first text-right");
    jQuery("#next").addClass("next");
    jQuery("#last").addClass("last text-center");
    jQuery("#author").addClass("author text-right container");
    $("ul").addClass("list-unstyled");
    $("#header").addClass("jumbotron text-center header");
    $("#body").addClass("container body");
    $("#footer").addClass("container-fluid footer");
    var hanmactu_profile = "https://vi.wikipedia.org/wiki/H%C3%A0n_M%E1%BA%B7c_T%E1%BB%AD";
    $("a").attr('href', hanmactu_profile);
});
