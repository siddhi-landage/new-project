function cursor_effect_page1() {
    var cursor = document.querySelector("#cursor");
    var page1Content = document.querySelector(".page1-content");
    var page5 = document.querySelector(".page5");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY
        });
    });

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            backgroundColor:"#ff8138",
            color:"#000000"
        });
    });

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 0,
          
        });
    });

    page5.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY
        });
    });

    page5.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            backgroundColor : "black",
            color:"white"
        });
    });

    page5.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 0
        });
    });
}
cursor_effect_page1();

function applyAnimation(triggerElement, targetElement , direction = 100) {
    gsap.from(targetElement, {
        y: direction,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: triggerElement,
            scroller: "body",
            start: "top 45%",
            end: "top 30%", // Adjust end value as needed
            scrub: 2
        }
    });
}
applyAnimation(".page2", ".page2 .page2_upper .nav h3", 100);
applyAnimation(".page2", ".page2 .page2_upper .text h1", 100);
applyAnimation(".page4", ".page4 .page4_upper .nav h3",100);
applyAnimation(".page4", ".page4 .page4_upper .text h1",100);


// applyAnimation(".page9 h1 span ",100);
function swiper_last() {
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 9500,  // Adjust the speed for a smoother transition
    autoplay: {
        delay: 0,  // No delay between transitions
        disableOnInteraction: false,
    },
});
}

swiper_last();

var tl = gsap.timeline( );
tl.from(".loader h2" , {
    x : 40,
    delay:1,
    duration:1.5,
    opacity:0,
    stagger:0.3
})
tl.to(".loader h2", {
    opacity:0,
    x : -40,
    stagger:0.2
})
tl.to(".loader " ,  {
    opacity:0
})
tl.from(".page1-content h1 span" , {
    y:350,
    opacity : 1,
    stagger:0.1,
    duration:0.38,
})
tl.to(".loader" , {
    display:"none"
})

gsap.from(".page9 h1 span", {
    y: -250,
    opacity: 1,
    stagger: 0.1,
    duration: 0.5,
    zIndex:9,
    scrollTrigger: {
        trigger: ".page9 h1",
        start: "top 80%",
        end: "top 50%",
        scrub: 1
    }
});

gsap.to(".bottom h4", {
    visibility: "hidden",
    duration: 0,
    // markers:"true",
    scrollTrigger: {
        trigger: ".page9 h1",
        start: "top 70%", // Adjust as necessary
        end: "top 50%",
        scrub: 1,
        // onEnter: () => gsap.set(".details h4", { visibility: "hidden" }),
        // onLeaveBack: () => gsap.set(".details h4", { visibility: "visible" })
    }
});