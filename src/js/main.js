$(document).ready(function () {



  $('.communication__callback').click(function () {
    $('.popup-callback').addClass('active');
    if ($('.popup-callback').hasClass('active')) {
      $('body').addClass('lock');
    } else {
      $('body').removeClass('lock');
    }
  });



  $('#callback_header_button').click(function () {
    $('#popup-form').val('кнопка в хэдере');
  });

  $('#callback_mobile_button').click(function () {
    $('#popup-form').val('кнопка в мобильном хэдере');
  });

  $('#callback_footer_button').click(function () {
    $('#popup-form').val('кнопка в футере');
  });



  $('.intro__callback').click(function () {
    $('.popup-callback').addClass('active');
    $('#popup-form').val('кнопка в интро');
    $('body').addClass('lock');
  });



  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
    if ($(this).hasClass('active')) {
      $('body').addClass('lock');
    } else {
      $('body').removeClass('lock');
    }
  });



  $('.popup-close').click(function () {
    $('.message').removeClass('sended');
    $('.popup-callback').removeClass('active');
    $('.scan').removeClass('active');
    if ($('.header__nav').hasClass('active')) {
      $('body').addClass('lock');
    } else {
      $('body').removeClass('lock');
    }
  });


  
  $('.message__ok').click(function () {
    $('.message').removeClass('sended');
    $('body').removeClass('lock');
  });



  $('.slider__body').slick({
    arrows: true,
    dots: true,
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });



  $('[data-scroll]').on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    // $("#menu a.active").removeClass("active");
    // $(this).addClass("active");

    $('.header__nav').removeClass('active');
    $('.burger').removeClass('active');
    $('body').removeClass('lock');

    $("html, body").animate({
      scrollTop: elementOffset - 120
    }, 700);
  });

});