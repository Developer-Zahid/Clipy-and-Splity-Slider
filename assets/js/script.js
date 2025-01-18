/* Utlity Function */
function activeSlideTextRevealAnimation(selector, startDelay = 1000) {
    anime({
        targets: selector,
        opacity: [0, 1],
        translateY: ['100%', '0%'],
        delay: anime.stagger(100, { start: (startDelay + (startDelay / 3)) }), // Stagger 100ms after startDelay delay
        duration: 500,
        easing: 'easeOutCubic',
    });

    /*
        // Width GSAP Animation
        gsap.from(selector, {
            opacity: 0,
            yPercent: 100,
            delay: (startDelay + (startDelay / 3)) / 1000,
            duration: 0.5,
            stagger: 0.1,
        });
    */
}

/* Paragraph Text Split Function */
new SplitType('[data-target="SplitText"]', {
    tagName: "span",
    types: "line, words",
});

/* Swiper Slider Function */
new Swiper('[data-swiper="Clipy-Splity"]', {
    speed: 1000,
    virtualTranslate: true,
    lazy: true,
    rewind: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".tf-slider_pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '[data-navigation="next"]',
        prevEl: '[data-navigation="prev"]',
    },
    on: {
        beforeInit: function (swiper) {
            swiper.el.style.setProperty("--_animation-duration", `${swiper.el.dataset.speed * 1 || swiper.params.speed}ms`);
            swiper.params.speed = swiper.el.dataset.speed * 1 || swiper.params.speed;
            swiper.params.autoplay.delay = swiper.el.dataset.autoplayDelay * 1 || swiper.params.autoplay.delay;
        },
        init: function (swiper) {
            activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex].querySelectorAll('.word'), swiper.params.speed);
        },
        slideChangeTransitionStart: function(swiper) {
            activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex].querySelectorAll('.word'), swiper.params.speed);
        }
    }
});