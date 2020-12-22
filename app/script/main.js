let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    setTimeout(() => {
        document.querySelector('html').style.overflowY = 'scroll';
        document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5;';
    }, 2000);

    /*
        increase date
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('p output');

    tomorrow.setDate(today.getDate() + i);
    day = tomorrow.getDate() > 9 ? tomorrow.getDate() : `0${tomorrow.getDate()}`
    month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : `0${tomorrow.getMonth() + 1}`;
    year = tomorrow.getFullYear();

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year}`;
    }

    /*
        advantages animation
     */

    const hoverBlock = (firstBlock, secondBlock) => {
        firstBlock.hover(
            function () {
                let activePoint = $(this).attr('class');
                $(this).addClass('active');
                $(secondBlock + '.' + activePoint).addClass('active');
            },
            function () {
                firstBlock.removeClass('active');
                $(secondBlock).removeClass('active');
            }
        )
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

    let gallerySlider = $('.gallery__mobile'),
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
        if ((currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1)) || (currentSlide === 0 && nextSlide === slick.slideCount - 1)) {
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

    const allSize = document.querySelectorAll('.catalog__shoe-model__info .size span');
    for(let i = 0; i < allSize.length; i++) {
        for(let j = 0; j < allSize.length; j++) {
            allSize[j].addEventListener('click', () => {
                allSize[i].classList.remove('active');
                allSize[j].classList.add('active');
            })
        }
    }

    /*
        the same height of the review text
     */

    $(function() {
        $('.review__content-slider__block figure p').matchHeight(
            {
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            }
        );
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
        nextArrow: $('.next-arrow'),
    });

    /*
        send feedback
     */

    const bodyFilter = document.querySelector('.body-filter'),
        openFeedback = document.querySelector('h5.send'),
        closeFeedback = document.querySelector('span.close'),
        feedback = document.querySelector('.feedback'),
        feedbackTitle = document.querySelector('.feedback p'),
        feedbackForm = document.querySelector('.feedback form'),
        inputValue = document.querySelector('.feedback form input'),
        textareaValue = document.querySelector('.feedback form textarea'),
        changeForm = () => {
            inputValue.value = '';
            textareaValue.value = '';
            feedbackTitle.style.display = 'none';
            feedbackForm.style.display = 'block';
        },
        toggleFeedback = (toggle) => {
            if(toggle === false) {
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

    inputValue.addEventListener('change', () => {
        inputValue.value;
    });

    textareaValue.addEventListener('change', () => {
        textareaValue.value;
    });

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        feedback.style.opacity = '0';
        setTimeout(() => {
            feedbackForm.style.display = 'none';
            feedbackTitle.style.display = 'block';
        }, 500);
        setTimeout(() => {
            feedback.style.opacity = '1'
        },600);
    });

    openFeedback.addEventListener('click', () => {
        toggleFeedback(false);
    });

    closeFeedback.addEventListener('click', () => {
        toggleFeedback(true);
    });

    bodyFilter.addEventListener('click', () => {
        toggleFeedback(true);
    });

    /*
        toggle bucket
     */

    const toggleBucket = () => {
        let bucket = document.querySelector('a.bucket'),
            topOfWindow = window.pageYOffset + innerHeight,
            catalogTopPosition = document.querySelector('.catalog').offsetTop,
            reviewTopPosition = document.querySelector('.review').offsetTop,
            informationImg = $('.banner__content-img ').offset().top;

        if(topOfWindow > catalogTopPosition && topOfWindow < reviewTopPosition || topOfWindow > informationImg) {
            bucket.style.cssText = 'opacity: 0; z-index: -5;'
        } else {
            bucket.style.cssText = 'opacity: 1; z-index: 999;'
        }
    };

    /*
        slow scroll
     */

    const slowScroll = (href) => {
        $('.to-order a, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
            return false;
        })
    }

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
        let href = $('#mobile-order').offset().top - innerHeight;
        slowScroll(href);

        window.addEventListener('scroll', () => {
            toggleBucket();
        });
        window.addEventListener('resize', () => {
            toggleBucket();
        });

    } else {
        let href = $('#catalog').offset().top;
        slowScroll(href);
    }



    // /*
    //     change href on mobile
    //  */
    //
    // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
    //     document.querySelector('a.grande').href = '#formgrande';
    //     document.querySelector('a.lake').href = '#formlake';
    //     document.querySelector('a.lou').href = '#formlou';
    // }
};
