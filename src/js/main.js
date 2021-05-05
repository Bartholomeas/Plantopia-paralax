let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.hand', 3, { y: 50 })
    .to('.forest', 3, { y: -250 }, '-=3')
    .to('.heading__text', 3, { y: -450 }, '-=3')
    .to('.goal__section', 3, { top: '0%' }, '-=3')
    .fromTo('.goal__item-circles-top', 3, { x: -150 }, { x: 0 }, '-=3')
    .fromTo('.goal__item-circles-bottom', 3, { x: 150 }, { x: 0 }, '-=3');



let scene = new ScrollMagic.Scene({
    triggerElement: 'header',
    duration: '200%',
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)
