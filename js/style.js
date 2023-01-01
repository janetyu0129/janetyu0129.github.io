$(document).ready(function() {
    $(".scroller").scroll(function() {
        //change header style while scrolling to dark background
        var contact = $('#contact').offset().top;
        if (contact <= 70 && $("#contact").hasClass("js-contact-en")) {
            $("nav").addClass("custom-navbar-white");
            $('.navbar-brand img').attr('src', '../img/logo_w.svg');
        } else if (contact > 70 && $("#contact").hasClass("js-contact-en")) {
            $("nav").removeClass("custom-navbar-white");
            $('.navbar-brand img').attr('src', '../img/logo.svg');
        } else if (contact <= 70) {
            $("nav").addClass("custom-navbar-white");
            $('.navbar-brand img').attr('src', 'img/logo_w.svg');
        } else {
            $("nav").removeClass("custom-navbar-white");
            $('.navbar-brand img').attr('src', 'img/logo.svg');
        }

        //Counting Numbers
        var about = $("#about").offset().top;
        if (about <= 70) {
            counter();
        };
    });

    //Align Works Slider
    var pdL = $("#js-work").offset().left;
    $(".works-content").css({ "padding-left": pdL, "padding-right": pdL });
    $(window).resize(function() {
        var pdL = $("#js-work").offset().left;
        $(".works-content").css({ "padding-left": pdL, "padding-right": pdL });
    });

    //Align ScrollTop
    var pdR = $(".js-scrolltop").offset().left + 12;
    $(".scrolltop").css("right", pdR);
    $(window).resize(function() {
        var pdR = $(".js-scrolltop").offset().left + 12;
        $(".scrolltop").css("right", pdR);
    });

    //ScrollTop
    $(".scrolltop").click(function() {
        $(".scroller").animate({ scrollTop: 0 }, "1000");
    });

    //menu background
    $(".navbar-toggler").click(function() {
        $(".custom-navbar-bg").toggleClass("open");
    });
});

function counter() {
    $(".counter").each(function() {
        var $this = $(this),
            countTo = $this.attr("data-count");
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 500,
            easing: "swing",
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}

//image fade in effect
const faders = document.querySelectorAll(".fade-in");
const fadersL = document.querySelectorAll(".fade-in-left");
const fadersR = document.querySelectorAll(".fade-in-right");

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

//works-scroll indicator
const menuGrid = document.querySelector(".scroll-view"),
    menuItems = document.querySelectorAll(".work-item"),
    sTrack = document.querySelector(".works-indicator-track"),
    sThumb = document.querySelector(".works-indicator-thumb"),
    screen = document.body.clientWidth,
    menuWidth = (menuItems.length / 2) * menuItems[0].clientWidth - screen,
    availableMove = sTrack.clientWidth - sThumb.clientWidth;
let isDraged = false,
    startX,
    scrolledLeft;
menuGrid.addEventListener("scroll", (e) => {
    const inPercent =
        (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) * 100;
    const moveThumb = Math.round((inPercent * availableMove) / 100);

    sThumb.style.transform = "translateX(" + moveThumb + "px)";
});