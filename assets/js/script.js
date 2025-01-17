function activeSlideTextRevealAnimation(selector) {
    gsap.from(selector, {
        opacity: 0,
        yPercent: 100,
        delay: 1.05,
        duration: 0.5,
        stagger: 0.1,
    });
}

new SplitType('[data-target="SplitText"]', {
    tagName: "span",
    types: "line, words",
});

new Swiper('[data-swiper="Clip-Split"]', {
    speed: 1000,
    virtualTranslate: true,
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
    on: {
        init: function (swiper) {
            activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex].querySelectorAll('.word'));
        },
        slideChangeTransitionStart: function(swiper) {
            activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex].querySelectorAll('.word'));
        }
    }
});