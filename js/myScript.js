$(".menu__img").click(function () { 
    $(".menu").animate({right : "0px"}, 500);
    $("body").css("overflow", "hidden");
});

$(".menu__cross, .menu__list__link").click(function () { 
    $(".menu").animate({right : "-100%"}, 500);
    $("body").css("overflow", "visible");
});


$('a[href*="#"]').on('click', function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 400);
    return false;
});


let language = "eng";

$(".ru").click(function () { 

    language = "ru";

    $(".ru").addClass("active");
    $(".ru").removeClass("unActive");
    $(".eng").removeClass("active");
    $(".eng").addClass("unActive");


    $(".menu__list__link").eq(0).text("Домой");
    $(".menu__list__link").eq(1).text("Обо мне");
    $(".menu__list__link").eq(2).text("Навыки");
    $(".menu__list__link").eq(3).text("Портфолио");
    $(".menu__list__link").eq(4).text("Контакты");

    $(".nav__link").eq(0).text("Домой");
    $(".nav__link").eq(1).text("Обо мне");
    $(".nav__link").eq(2).text("Навыки");
    $(".nav__link").eq(3).text("Портфолио");
    $(".nav__link").eq(4).text("Контакты");

    $(".section__1__contant__2").text("Front-end разработчик");

    $(".section__2__h2").text("Обо мне");

    $(".section__2__p").eq(0).html("Привет, я Олег — фронтенд разработчик. <br> Я постоянно учусь новым вещам.");
    $(".section__2__p").eq(1).html("Я хорошо работаю с такими языками, как HTML, CSS, JavaScript. Также знаком с jQuery и Bootstrap.");
    $(".section__2__p").eq(2).html("Готов реализовать отличные проекты с хорошими людьми.");

    $(".section__3__h2").text("Навыки");

    $(".section__3__p").text("Я работаю в таких программах как");

    $(".section__4__h2").text("Портфолио");

    $(".footer__h2").text("Контакты");

    $(".footer__p").html("Хочешь узнать больше или просто пообщаться?<br>Всегда пожалуйста");

    $(".footer__link").text("Отправить сообщение");

    $(".footer__link").css("width", "250px");

    $(".footer__p__light").html("Следи за мной на<br>LinkedIn, Instagram, Upwork, Github");
});

$(".eng").click(function () { 

    language = "eng";

    $(".eng").addClass("active");
    $(".eng").removeClass("unActive");
    $(".ru").removeClass("active");
    $(".ru").addClass("unActive");

    $(".menu__list__link").eq(0).text("home");
    $(".menu__list__link").eq(1).text("About me");
    $(".menu__list__link").eq(2).text("Skills");
    $(".menu__list__link").eq(3).text("Portfolio");
    $(".menu__list__link").eq(4).text("Contacts");

    $(".nav__link").eq(0).text("home");
    $(".nav__link").eq(1).text("About me");
    $(".nav__link").eq(2).text("Skills");
    $(".nav__link").eq(3).text("Portfolio");
    $(".nav__link").eq(4).text("Contacts");

    $(".section__1__contant__2").text("Front-end web developer");

    $(".section__2__h2").text("About me");

    $(".section__2__p").eq(0).html("Hi, I'm Oleg – front end developer.<br> I am constantly learning new things.");
    $(".section__2__p").eq(1).html("I work well with languages such as HTML, CSS, JavaScript. Also familiar with jQuery and Bootstrap.");
    $(".section__2__p").eq(2).html("Ready to implement excellent projects with wonderful people.");

    $(".section__3__h2").text("Skills");

    $(".section__3__p").text("I work in such programs as");

    $(".section__4__h2").text("Portfolio");

    $(".footer__h2").text("Contacts");

    $(".footer__p").html("Want to know more or just chat?<br>You are welcome!");

    $(".footer__link").text("Send message");

    $(".footer__link").css("width", "200px");

    $(".footer__p__light").html("Like me on<br>LinkedIn, Instagram, Upwork, Github");
});


var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};