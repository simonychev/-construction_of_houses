'use strict'

new WOW({
    animateClass: 'animate__animated',
}).init();

$('#burger').on('click', function () {
    $('#menu').addClass('open');
});

$('#menu-close').on('click', function () {
    $('#menu').removeClass('open');
});

$(document).on('keyup', function(e) {
    if ( e.key === "Escape" ) {
        $('#menu').removeClass('open');
    }
});

$(function($){
    $(document).mouseup( function(e){
        let div = $( '#menu' );
        if ( !div.is(e.target)
            && div.has(e.target).length === 0 ) {
            div.removeClass('open');
        }
    });
});

$('.menu-item').on('click', function () {
    $('#menu').removeClass('open');
});

$('.project-item-images-mh3').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});

$('.project-item-images-mh4').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});

$('.project-item-images-mh5').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});

$('.project-item-images-mh6').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});

$('.project-item-images-mh7').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});

$('.consultation').on('click', function () {
    $('#consultation')[0].scrollIntoView({block: "center"});
});

$('#popup-open').on('click', function () {
    $('#popup').addClass('open');
});

$('#popup-close').on('click', function () {
    $('#popup').removeClass('open');    
});

$(document).on('keyup', function(e) {
    if ( e.key === "Escape" ) {
        $('#popup').removeClass('open');
    }
});

let openProject = $('#projects-next');
let arrowProject = $('#project-arrow');
let textProject = $('#project-next-text');

$('#project-next-btn').on('click', function () {
    if (openProject.hasClass('open')) {
        openProject.removeClass('open');
        arrowProject.css('transform', 'rotate(0deg)');
        textProject.text('Показать еще 3 проекта');
    } else {
        openProject.addClass('open');
        arrowProject.css('transform', 'rotate(180deg)');
        textProject.text('Скрыть проекты');
    }
});

$('.download').on('click', function () {
    let link = document.createElement('a');
    link.setAttribute('href', '../file/Construction_Documents.pdf');
    link.setAttribute('download', 'Construction_Documents.pdf');
    link.click();
    return false;
});

$('#ajax-form').hide();

$('#ajax-form-popup').hide();

let loader = $('.loader');

$('.form-phone').inputmask({"mask": "+7 (999) 999-9999"});

$('#btn-form').on('click', function () {
    let name = $('#name-input');
    let phone = $('#phone-input');
    let rights = $('#rights');
    let hasError = false;

    name.css('border-color', '#ffffff');
    phone.css('border-color', '#ffffff');
    rights.css('outline', 'transparent');

    $('.error-input').hide();

    if (!name.val()) {
        name.next().show();
        hasError = true;
        name.css('border-color', 'red');
    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        phone.css('border-color', 'red');        
    }
    if (!rights.is(':checked')) {
        // alert('Дайте свое согласие на обработку данных!')
        rights.css('outline', '1px solid red');
        hasError = true;
    }

    if (name.val() && phone.val() && rights.is(':checked')) {
        loader.css('display', 'flex');
        $.ajax({
            type: 'post',
            url: 'https://github.com/simonychev/construction_of_houses/blob/main/telegram.php',
            data: 'name=' + name.val() + '&phone=' + phone.val(),
            success: () => {
                loader.hide();
                let formInput = $('#form-input');
                    formInput.hide();
                    $('#ajax-form').show();
                },
                error: () => {
                    alert('Возникла непредвиденная ошибка, позвоните нам и получите консультацию!');
                }
            });
        } else {
          //alert('Возникла непредвиденная ошибка!');   
    }
});

$('#popup-btn-form').click(function () {
    let name = $('#popup-name-input');
    let phone = $('#popup-phone-input');
    let rights = $('#popup-rights');
    let errorHas = false;

    name.css('border-color', '#ffffff');
    phone.css('border-color', '#ffffff');
    rights.css('outline', 'transparent');

    $('.error-input').hide();

    if (!name.val()) {
        name.next().show();
        errorHas = true;
        name.css('border-color', 'red');
    }
    if (!phone.val()) {
        phone.next().show();
        errorHas = true;
        phone.css('border-color', 'red');
    }
    if (!rights.is(':checked')) {
        // alert('Дайте свое согласие на обработку данных!')
        rights.css('outline', '1px solid red');
        errorHas = true;
    }

    if (!errorHas) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {rights: rights.is(':checked'), name: name.val(), phone: phone.val()},
            success: function (data) {
                loader.hide();
                let formInput = $('#popup-form-input');
                if (name.val() === 'itlogia') {
                    formInput.hide();
                    $('#ajax-form-popup').show();
                } else {
                    alert('Возникла непредвиденная ошибка, позвоните нам и получите консультацию!');
                }
                formInput.trigger("reset");
            }
        })
    }
});

$('.slider').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 886,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
    ]
});

if ($(window).width() < 1130) {

    $('#house-circle-window').on('click', function () {
        $('.house-block-text').css('display', 'none');
        $('#house-text-window').css('display', 'block');
    });
   
    $('#house-circle-roof').on('click', function () {
        $('.house-block-text').css('display', 'none');
        $('#house-text-frame').css('display', 'block');
    });
   
    $('#house-circle-veranda').on('click', function () {
        $('.house-block-text').css('display', 'none');
        $('#house-text-diagonal').css('display', 'block');
    });
   
    $('#house-circle-wall').on('click', function () {
        $('.house-block-text').css('display', 'none');
        $('#house-text-wind').css('display', 'block');
    });
   
    $('#house-circle-foundation').on('click', function () {
        $('.house-block-text').css('display', 'none');
        $('#house-text-knot').css('display', 'block');
    });
}

if ($(window).width() < 1200) {
    $('.house-circle').addClass('animation');
}
