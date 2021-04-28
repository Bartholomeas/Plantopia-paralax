let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.hand', 3, { y: -150 })
    .to('.forest', 3, { y: 50 }, '-=3')
    .to('.heading__text', 3, { x: 50 }, '-=3');

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '100%',
    triggerHook: 0.5,
})
    .setTween(timeline)
    .addTo(controller)