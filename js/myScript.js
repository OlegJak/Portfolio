$(".menu__img").click(function () { 
    $(".menu").animate({right : "0px"}, 1000);
    $("body").css("overflow", "hidden");
});

$(".menu__cross, .menu__list__link").click(function () { 
    $(".menu").animate({right : "-100%"}, 1000);
    $("body").css("overflow", "visible");
});