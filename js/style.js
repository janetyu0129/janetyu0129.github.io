$(document).ready(function() {
    //Counting Numbers
    $(".counter").each(function() {
        var $this = $(this),
            countTo = $this.attr("data-count");
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 1000,
            easing: "linear",
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });

    //hover調整公司邊框顏色
    var initial = $(".cp-work").css("border-color");
    $(".cp-work").hover(
        function() {
            var color = $(this).attr("value");
            $(this).css("border-color", color);
            // $(this).css("box-shadow", "0 4px 0 " + color);
        },
        function() {
            $(this).css("border-color", initial);
            // $(this).css("box-shadow", "0 4px 0 " + initial);
        }
    );

    //Slick CSS
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        responsive: [{
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            }
        ]
    });

    //ScrollTop
    $(".scrolltop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "1000");
    });

    //hotjar
    (function(h, o, t, j, a, r) {
        h.hj = h.hj || function() {
            (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = { hjid: 2356804, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
});