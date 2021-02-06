$(".item-item").click(function () {
    $(".item-item").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".item-text").css("display","none");
    $("h3").css("display","none");
    $(".item-text").eq(index).css("display","flex");
    $("h3").eq(index).css("display","flex");
})