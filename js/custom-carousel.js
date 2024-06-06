jQuery("#carousel-1").owlCarousel({
    autoplay: true,
    navigation: true,
    items: 3,
    dots: false,
    loop: true,
    rewindNav: false,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 3000,
    smartSpeed: 800,
    center: false,
    margin: 10,
    responsiveClass: true,
    navigationText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 2
        },

        1366: {
            items: 3
        }
    }
});