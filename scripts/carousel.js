document.addEventListener('DOMContentLoaded', function() {
    // Event Carousel
    const eventImages = document.querySelectorAll('.event_carousel .carousel_image');
    const eventPrevButton = document.querySelector('.event_carousel .carousel_prev');
    const eventNextButton = document.querySelector('.event_carousel .carousel_next');
    let eventCurrentIndex = 0;
    let eventInterval;

    function showEventImage(index) {
        eventImages.forEach(img => img.classList.remove('active'));
        eventImages[index].classList.add('active');
    }

    function nextEventImage() {
        eventCurrentIndex = (eventCurrentIndex + 1) % eventImages.length;
        showEventImage(eventCurrentIndex);
    }

    function prevEventImage() {
        eventCurrentIndex = (eventCurrentIndex - 1 + eventImages.length) % eventImages.length;
        showEventImage(eventCurrentIndex);
    }

    function startEventCarousel() {
        eventInterval = setInterval(nextEventImage, 3000);
    }

    function stopEventCarousel() {
        clearInterval(eventInterval);
    }

    // Initialize Event Carousel
    if (eventImages.length > 0) {
        showEventImage(eventCurrentIndex);
        startEventCarousel();

        // Event listeners for Event Carousel
        eventPrevButton.addEventListener('click', () => {
            stopEventCarousel();
            prevEventImage();
            startEventCarousel();
        });

        eventNextButton.addEventListener('click', () => {
            stopEventCarousel();
            nextEventImage();
            startEventCarousel();
        });

        // Pause on hover for Event Carousel
        const eventCarousel = document.querySelector('.event_carousel');
        eventCarousel.addEventListener('mouseenter', stopEventCarousel);
        eventCarousel.addEventListener('mouseleave', startEventCarousel);
    }

    // About Carousel
    const aboutImages = document.querySelectorAll('.about_carousel .carousel_image');
    const aboutPrevButton = document.querySelector('.about_carousel .carousel_prev');
    const aboutNextButton = document.querySelector('.about_carousel .carousel_next');
    let aboutCurrentIndex = 0;
    let aboutInterval;

    function showAboutImage(index) {
        aboutImages.forEach(img => img.classList.remove('active'));
        aboutImages[index].classList.add('active');
    }

    function nextAboutImage() {
        aboutCurrentIndex = (aboutCurrentIndex + 1) % aboutImages.length;
        showAboutImage(aboutCurrentIndex);
    }

    function prevAboutImage() {
        aboutCurrentIndex = (aboutCurrentIndex - 1 + aboutImages.length) % aboutImages.length;
        showAboutImage(aboutCurrentIndex);
    }

    function startAboutCarousel() {
        aboutInterval = setInterval(nextAboutImage, 5000);
    }

    function stopAboutCarousel() {
        clearInterval(aboutInterval);
    }

    // Initialize About Carousel
    if (aboutImages.length > 0) {
        showAboutImage(aboutCurrentIndex);
        startAboutCarousel();

        // Event listeners for About Carousel
        aboutPrevButton.addEventListener('click', () => {
            stopAboutCarousel();
            prevAboutImage();
            startAboutCarousel();
        });

        aboutNextButton.addEventListener('click', () => {
            stopAboutCarousel();
            nextAboutImage();
            startAboutCarousel();
        });

        // Pause on hover for About Carousel
        const aboutCarousel = document.querySelector('.about_carousel');
        aboutCarousel.addEventListener('mouseenter', stopAboutCarousel);
        aboutCarousel.addEventListener('mouseleave', startAboutCarousel);
    }
}); 