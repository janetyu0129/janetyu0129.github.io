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

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {
    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');
        for (var i = 0; i < videoEl.length; i++) {
            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;
            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }
        }
    }
}