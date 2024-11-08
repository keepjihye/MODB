
// .all_menu클릭하면 #nav_all에 active 추가하기
$('.all_menu').click(function () {
    $('#nav-all').addClass("active");
    $('.nav-all__wrap').addClass("active");
});

$('#nav-all').click(function () {
    $('#nav-all').removeClass('active')
    $('.nav-all__wrap').removeClass("active");;
});



// To - top / nav가리기
window.addEventListener(
    "scroll",
    // thirottle 과부하 줄이기
    _.throttle(function () {
        const scrolled = window.scrollY;
        if (scrolled > 60) {
            gsap.to("#header", { yPercent: -100 });

        } else {
            gsap.to("#header", { yPercent: 0 });

        }
    })
);
