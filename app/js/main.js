"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
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
  }); // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};