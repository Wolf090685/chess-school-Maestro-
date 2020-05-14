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

        $('#nav a').removeClass('active');
        $(this).addClass('active');        

        $("html, body").animate({
            scrollTop: blockOfset
        }, 700);

        if ($(window).width()<920) {
            $('.menu__list').slideToggle();
        }

    });

    // Add class "active" to menu

    $('.menu__list-link').on('click', function (event) {
        event.preventDefault();
        $('#menu a').removeClass('active');
        $(this).addClass('active');
    });

    // Burger menu nav toogle

    $('.nav-toggle').on('click', function () {
        $('.menu__list').slideToggle();
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

    let scrolled,
        timer,
        btn = document.getElementById('to-top');

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 250;
            timer = setTimeout(scrollToTop, 50);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }

    $(window).on('scroll', function () {
        scrolled = window.pageYOffset;
        if (scrolled > 400) {
            btn.style.display = 'block';
        } else {
            btn.style.display = '';
        }
    });

    $(btn).on('click', function () {
        scrollToTop();
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

});