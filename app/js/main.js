"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  setTimeout(function () {
    document.querySelector('html').style.overflowY = 'scroll';
    document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5;';
  }, 2000);
  /*
      increase date
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('p output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year);
  }
  /*
      advantages animation
   */


  var hoverBlock = function hoverBlock(firstBlock, secondBlock) {
    firstBlock.hover(function () {
      var activePoint = $(this).attr('class');
      $(this).addClass('active');
      $(secondBlock + '.' + activePoint).addClass('active');
    }, function () {
      firstBlock.removeClass('active');
      $(secondBlock).removeClass('active');
    });
  };

  hoverBlock($('.advantages__content-info ul li'), '.advantages__content-img figure');
  hoverBlock($('.advantages__content-img figure'), '.advantages__content-info ul li');
  /*
      fancybox settings
   */

  $.fancybox.defaults.loop = true;
  $.fancybox.defaults.animationEffect = 'fade';
  /*
      gallery on mobile
   */

  var gallerySlider = $('.gallery__mobile'),
      galleryCenter;
  gallerySlider.on('init', function (slick, event) {
    galleryCenter = $('.slick-center');
    galleryCenter.prev().find('a').css({
      width: '70%',
      position: 'relative',
      filter: 'none',
      left: '42%',
      transform: 'none',
      zIndex: 9
    });
    galleryCenter.find('a').css({
      width: '82.5%',
      position: 'relative',
      filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 11
    });
    galleryCenter.next().find('a').css({
      width: '70%',
      position: 'relative',
      filter: 'none',
      left: '-11%',
      transform: 'none',
      zIndex: 9
    });
  });
  gallerySlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    speed: 300,
    arrows: false,
    rows: 0,
    dots: true
  });
  gallerySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1) || currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      galleryCenter = $('.slick-center').prev();
    } else if (currentSlide === nextSlide) {
      galleryCenter = $('.slick-center');
    } else {
      galleryCenter = $('.slick-center').next();
    }

    galleryCenter.prev().find('a').css({
      width: '70%',
      position: 'relative',
      filter: 'none',
      left: '42%',
      transform: 'none',
      zIndex: 9
    });
    galleryCenter.find('a').css({
      width: '82.5%',
      position: 'relative',
      filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 11
    });
    galleryCenter.next().find('a').css({
      width: '70%',
      position: 'relative',
      filter: 'none',
      left: '-11%',
      transform: 'none',
      zIndex: 9
    });
  });
  /*
      change active size
   */

  var allSize = document.querySelectorAll('.catalog__shoe-model__info .size span');

  var _loop = function _loop(_i2) {
    var _loop2 = function _loop2(j) {
      allSize[j].addEventListener('click', function () {
        allSize[_i2].classList.remove('active');

        allSize[j].classList.add('active');
      });
    };

    for (var j = 0; j < allSize.length; j++) {
      _loop2(j);
    }
  };

  for (var _i2 = 0; _i2 < allSize.length; _i2++) {
    _loop(_i2);
  }
  /*
      the same height of the review text
   */


  $(function () {
    $('.review__content-slider__block figure p').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
  });
  /*
      review slider
   */

  $('.review__content-slider__block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 300,
    dots: true,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow')
  });
  /*
      send feedback
   */

  var bodyFilter = document.querySelector('.body-filter'),
      openFeedback = document.querySelector('h5.send'),
      closeFeedback = document.querySelector('span.close'),
      feedback = document.querySelector('.feedback'),
      feedbackTitle = document.querySelector('.feedback p'),
      feedbackForm = document.querySelector('.feedback form'),
      inputValue = document.querySelector('.feedback form input'),
      textareaValue = document.querySelector('.feedback form textarea'),
      changeForm = function changeForm() {
    inputValue.value = '';
    textareaValue.value = '';
    feedbackTitle.style.display = 'none';
    feedbackForm.style.display = 'block';
  },
      toggleFeedback = function toggleFeedback(toggle) {
    if (toggle === false) {
      document.querySelector('html').style.overflowY = 'hidden';
      bodyFilter.style.cssText = 'z-index: 9999; background: rgba(0, 0, 0, 0.8)';
      feedback.style.cssText = 'opacity: 1; z-index: 99999;   transform: translate(-50%, -50%) rotateX(0deg);';
    } else {
      document.querySelector('html').style.overflowY = 'scroll';
      bodyFilter.style.cssText = 'z-index: -5; background: rgba(0, 0, 0, 0)';
      feedback.style.cssText = 'opacity: 0; z-index: -5;   transform: translate(-50%, -50%) rotateX(-90deg);';
      setTimeout(changeForm, 500);
    }
  };

  inputValue.addEventListener('change', function () {
    inputValue.value;
  });
  textareaValue.addEventListener('change', function () {
    textareaValue.value;
  });
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    feedback.style.opacity = '0';
    setTimeout(function () {
      feedbackForm.style.display = 'none';
      feedbackTitle.style.display = 'block';
    }, 500);
    setTimeout(function () {
      feedback.style.opacity = '1';
    }, 600);
  });
  openFeedback.addEventListener('click', function () {
    toggleFeedback(false);
  });
  closeFeedback.addEventListener('click', function () {
    toggleFeedback(true);
  });
  bodyFilter.addEventListener('click', function () {
    toggleFeedback(true);
  });
  /*
      toggle bucket
   */

  var toggleBucket = function toggleBucket() {
    var bucket = document.querySelector('a.bucket'),
        topOfWindow = window.pageYOffset + innerHeight,
        catalogTopPosition = document.querySelector('.catalog').offsetTop,
        reviewTopPosition = document.querySelector('.review').offsetTop,
        informationImg = $('.banner__content-img ').offset().top;

    if (topOfWindow > catalogTopPosition && topOfWindow < reviewTopPosition || topOfWindow > informationImg) {
      bucket.style.cssText = 'opacity: 0; z-index: -5;';
    } else {
      bucket.style.cssText = 'opacity: 1; z-index: 999;';
    }
  };
  /*
      slow scroll
   */


  var slowScroll = function slowScroll(href) {
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
      return false;
    });
  };

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    var href = $('#mobile-order').offset().top - innerHeight;
    slowScroll(href);
    window.addEventListener('scroll', function () {
      toggleBucket();
    });
    window.addEventListener('resize', function () {
      toggleBucket();
    });
  } else {
    var _href = $('#catalog').offset().top;
    slowScroll(_href);
  }
};