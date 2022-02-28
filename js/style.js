$(document).ready(function() {
    //hover調整公司邊框顏色
    var initial = $(".cp-work").css("border-color");
    $(".cp-work").hover(
        function() {
            var color = $(this).attr("value");
            $(this).css("box-shadow", "0 4px 0 " + color).css("border-color", color);
        },
        function() {
            $(this).css("box-shadow", "0 4px 0 " + initial).css("border-color", initial);
        }
    );
    $(".navbar-toggler").click(function() {
        $(".bg-light").toggleClass("custom-navbar-bg");
    })
});