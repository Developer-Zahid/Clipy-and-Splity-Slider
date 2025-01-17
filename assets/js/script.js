const splitText = new SplitType('[data-target="SplitText"]', {
    tagName: "span",
    types: "line, words",
});

new Swiper('[data-swiper="Clip-Split"]', {
    lazy: true,
    rewind: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".tf-slider_pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '[data-navigation="next"]',
        prevEl: '[data-navigation="prev"]',
    },
    speed: 1000,
    virtualTranslate: true,

    on: {
        slideChangeTransitionStart: function(swiper) {
            gsap.from(swiper.slides[swiper.realIndex].querySelectorAll('.word'), {
                opacity: 0,
                yPercent: 100,
                delay: 1.05,
                duration: 0.5,
                stagger: 0.1,
            });
        }
    }
});