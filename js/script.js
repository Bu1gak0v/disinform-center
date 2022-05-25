(function ($) {
  'use strict';

  var browserWindow = $(window);

  // Прелоадер
  browserWindow.on('load', function () {
    $('.preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  // Коли навбар активний
  if ($.fn.classyNav) {
    $('#nikkiNav').classyNav();
  }

  // Слайд фото
  if ($.fn.owlCarousel) {
    var welcomeSlide = $('.hero-post-slides');

    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    });

    welcomeSlide.on('changed.owl.carousel', function (event) {
      if (!event.namespace || event.property.name != 'position') return
      $('.page-count').html(event.relatedTarget.relative(event.item.index) + 1 + '<span>' + '/' + event.item.count + '</span>');
    })

    welcomeSlide.on('translate.owl.carousel', function () {
      var slideLayer = $("[data-animation]");
      slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
      });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
      var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
      slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).addClass('animated ' + anim_name).css('opacity', '1');
      });
    });

    $("[data-delay]").each(function () {
      var anim_del = $(this).data('delay');
      $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
      var anim_dur = $(this).data('duration');
      $(this).css('animation-duration', anim_dur);
    });
  }

  // Кнопка нагору
  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 600,
      scrollText: '<i class="fa fa-angle-up"></i>'
    });
  }

  // :: 5.0 CounterUp Active Code
  if ($.fn.counterUp) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  // Фіксований хедер
  if ($.fn.sticky) {
    $(".nikki-main-menu").sticky({
      topSpacing: 0
    });
  }

  // Посилання на соцмережі
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // Прокрутка вниз
  $("#scrollDown").on('click', function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 85
    }, 1500);
  });

  // Прибрання кліку за замовчуванням
  $('a[href="#"]').on('click', function ($) {
    $.preventDefault();
  });

  // Анімація
  if (browserWindow.width() > 767) {
    new WOW().init();
  }

})(jQuery);