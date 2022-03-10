$(document).ready(function() {
    //漢堡下拉選單點即時自動收合
    $('.nav-link, .btn-yu-primary').on('click', function() {
        $('.navbar-collapse').collapse('hide');
        $(".custom-navbar-bg").removeClass("open");
    });

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
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    //ScrollTop
    $(".scrolltop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "1000");
    });
});