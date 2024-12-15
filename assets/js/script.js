
$(document).ready(function () {
    $('.menu-slider').owlCarousel({
        loop: true,             // Loop through the slides
        margin: 10,             // Space between slides
        // nav: true,              // Show navigation buttons
        autoplay: true,         // Enable autoplay
        autoplayTimeout: 3000,
        // autoplayHoverPause:true,
        center:true,  // Time between each slide (3 seconds)
        responsive: {           // Adjust the number of items based on screen size
            0: {
                items: 1        // 1 item on small screens
            },
            600: {
                items: 2        // 2 items on medium screens
            },
            1000: {
                items: 3     // 3 items on large screens
            }
        }
    });
});