$(document).ready(function () {
    flexslider_init();
});
// flexslider init
function flexslider_init() {

    $('#flex-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 130,
        itemMargin: 5,
        asNavFor: '#flex-slider'
    });

    $('#flex-slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#flex-carousel"
    });
}