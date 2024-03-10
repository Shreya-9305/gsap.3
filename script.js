var tl = gsap.timeline()

tl.from(".nav", {
    opacity:0,
    delay:0.3,
})

tl.from(".nav h1 , .nav h3 , .nav h4", {
    y: -80,
    opacity:0,
    duration: 0.4,
    stagger: 0.2
})


var tl2 = gsap.timeline()

tl2.from(".left h1",{
 
    x:-500,
    opacity:0,
    duration:1
    

})

tl2.from(".right img",{

    opacity:0,
    scale:2,
    duration:0.8
})



// *************************************************************************************************//

gsap.from("#page2 .box", {

    scale:0,
    opacity:0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {

        trigger: "#page2 .box",
        scroller:"body"
    }
})