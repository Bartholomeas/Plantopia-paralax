let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.hand', 3, { y: 100 })
    .to('.forest', 3, { y: -50 }, '-=3')
    .to('.heading__text', 3, { y: 50 }, '-=3')
    .to('.goal__section', 3, { top: '0%' }, '-=3');
// .fromTo('.goal__item-circles', 3, { opacity: 0 }, { opacity: 1, duration: 3 }, '-=3');
// .to('.goal__section', 3, { top: "0%" }, '-=3')


let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)
