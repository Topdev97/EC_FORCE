$(".c-hamburg__menu").click(function () {
    $(this).toggleClass("js-active")
    $(".c-header__wrap__menu").toggleClass("js-active")
    $(".c-header__wrap__text").toggleClass("js-active")
})

$(window).scroll(function () {
    var fixed = $(".c-header");

    var fixed_position = $(".c-header").offset().top;
    var fixed_height = $(".c-header").height();

    var toCross_position = $(".p-intro__wrap").offset().top;
    var toCross_height = $(".p-intro__wrap").height();

    var toCross_position02 = $(".p-history__wrap").offset().top;
    var toCross_height02 = $(".p-history__wrap").height();

    var toCross_position02 = $(".p-history").offset().top;
    var toCross_height02 = $(".p-history").height();

    var toCross_position03 = $(".p-juice__item").offset().top;
    var toCross_height03 = $(".p-juice__item").height();

    var toCross_position04 = $(".p-juice__inquiry").offset().top;
    var toCross_height04 = $(".p-juice__inquiry").height();

    if ((fixed_position + fixed_height < toCross_position) && (fixed_position + fixed_height < toCross_position02) && (fixed_position + fixed_height < toCross_position03) && (fixed_position + fixed_height < toCross_position04)) {
        fixed.removeClass('is-active');
    } else if ((fixed_position > toCross_position + toCross_height) && (fixed_position > toCross_position02 + toCross_height02) && (fixed_position > toCross_position03 + toCross_height03) && (fixed_position > toCross_position04 + toCross_height04)) {
        fixed.removeClass('is-active');
    } else {
        fixed.addClass('is-active');
    }

   

    // if (fixed_position + fixed_height < toCross_position02) {
    //     fixed.removeClass('is-active');
    // } else if (fixed_position > toCross_position02 + toCross_height02) {
    //     fixed.removeClass('is-active');
    // } else {
    //     fixed.addClass('is-active');
    // }
});


$(window).on("load", function(){
    wow.init();
})

$(".p-juice__inquiry__tab").click(function(){
    $(".p-juice__inquiry__tab").each(function(){
        $(this).removeClass("is-active")
    })
    $(".p-juice__inquiry__item").each(function(){
        $(this).removeClass("is-active")
    })
    $(this).addClass("is-active")
    if($(this).hasClass("p-juice__inquiry__tab--contact")){
        $(".p-juice__inquiry__item--contact").addClass("is-active")
    }
    if($(this).hasClass("p-juice__inquiry__tab--info")){
        $(".p-juice__inquiry__item--info").addClass("is-active")
    }
     if($(this).hasClass("p-juice__inquiry__tab--privacy")){
        $(".p-juice__inquiry__item--privacy").addClass("is-active")
    }
     if($(this).hasClass("p-juice__inquiry__tab--law")){
        $(".p-juice__inquiry__item--law").addClass("is-active")
    }
})

$(".__link").click(function(){
    $(".modal").fadeIn()
})

$(".modal__overlay").click(function(){
    $(".modal").fadeOut()
})