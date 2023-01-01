$(document).ready(function() {
    $(".footer .scrolltop").click(function() {
        $('html').animate({ scrollTop: 0 }, "1000");
    });
    //menu background
    $(".navbar-toggler").click(function() {
        $(".custom-navbar-bg").toggleClass("open");
    });
});

//image fade in effect
const faders = document.querySelectorAll(".fade-in");
const fadersL = document.querySelectorAll(".fade-in-left");
const fadersR = document.querySelectorAll(".fade-in-right");
const fadersM = document.querySelectorAll(".marquee-item");


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
fadersL.forEach(faderL => {
    appearOnScroll.observe(faderL);
});
fadersR.forEach(faderR => {
    appearOnScroll.observe(faderR);
});
fadersM.forEach(faderM => {
    appearOnScroll.observe(faderM);
});