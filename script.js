let tl=gsap.timeline();
tl.from("nav",{
    x:-100,
    opacity:0,
    duration:1
})
tl.from(".pg1 h1",{
    y:"100%",
    duration:0.5,
    stagger:0.3
})
Array.from(document.querySelectorAll(".inner")).forEach(element => {
    element.addEventListener("mousemove",()=>{
        gsap.to(element,{
            height:"85%",
            duration:0.25
        })
    })
});
Array.from(document.querySelectorAll(".inner")).forEach(element => {
    element.addEventListener("mouseleave",()=>{
        gsap.to(element,{
            height:"12%",
            duration:0.25
        })
    })
});
gsap.from(".pg3 section",{
    y:-50,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        scoller:"body",
        trigger:".pg3",
        start:"top 60%",
        
    }
})
gsap.to("nav ul",{
    y:-50,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"nav",
        start:"top -40%",
        end:"top -41%",
        scrub:0.7
    }
})
gsap.to("nav .logo",{
    y:-150,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"nav",
        start:"top -40%",
        end:"top -41%",
        scrub:0.7
    }
})
gsap.to("nav .ooxx",{
    y:"150%",
    
    delay:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"nav",
        start:"top -40%",
        end:"top -41%",
        scrub:0.7
    }
})
gsap.from(".pg5 .sec1 .left, .pg5 .sec1 .right",{
    y:-50,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 .sec1",
        start:"top 40%",
        end:"top 41%",
        
    }
})
gsap.from(".pg5 .sec2 .left, .pg5 .sec2 .right",{
    y:-50,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 .sec2",
        start:"top 40%",
        end:"top 41%,",
        
    }
})