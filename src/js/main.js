let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.hand', 3, { y: -250 })
    .to('.forest', 3, { y: 150 }, '-=3')
    .to('.heading__text', 3, { y: 250 }, '-=3')


let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin('header')
    .addTo(controller)