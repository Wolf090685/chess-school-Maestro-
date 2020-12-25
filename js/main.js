$(function () {

    new WOW().init();

    let offerH = $("#offer").innerHeight(),
        header = $("#header");
        scrollOffset = $(window).scrollTop();

    // Fixed header

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= offerH) {
            header.addClass('header--fixed');
        } else {
            header.removeClass('header--fixed');
        }
    }

    // Smooth scroll

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOfset = $(blockId).offset().top;

        $('#menu a').removeClass('active');
        $(this).addClass('active');
        $('.menu__list').removeClass('show');

        $("html, body").animate({
            scrollTop: blockOfset
        }, 700);

    });

    // Add class "active" to menu

    $('.menu__list-link').on('click', function (event) {
        event.preventDefault();
        $('#menu a').removeClass('active');
        $(this).addClass('active');
    });

    // Burger menu nav toogle

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('.menu__list').toggleClass('show');
    });

    // Slider 

    $('.reviews__slider').slick({

        prevArrow: '<button class="slick-arrow slick-prev"><img src="image/chessIcon/prev.png" alt="prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="image/chessIcon/next.png" alt="next"></button>',

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    arrows: false
                }
            }
        ],

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    // Scroll to top   

    $(window).on('scroll', function () {
        let scrolled = window.pageYOffset;
        let btn = document.querySelector('.footer__to-top'); 
        if (scrolled > 400) {
            btn.style.opacity = 1;
        } else {
            btn.style.opacity = 0;
        }      
    });
    $('.footer__to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 20
        }, 600);
    }); 

    // Modal

    let call = document.querySelector('.offer__btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup__close');

    call.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        call.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    $(document).click(function (event) {
        if ($(event.target).is(overlay)) {
            $(overlay, '#consultation').fadeOut('slow');
            $('body').css('overflow', '');
        }
    });

    // Validate modal

    function validateForms(form) {
        $(form).validate({
            rules: {
                phone: "required"
            },
            messages: {
                phone: "Введите номер телефона",
            }
        });
    }

    validateForms('#consultation form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

});