
// --------------------------------------------------------------------------------------
// caurosel animation
const items = document.querySelectorAll('.quality_box');
const positions = ["left", "center", "right", "hidden"]; // Define positions based on classes
let autoSlide; // Variable to hold auto-slide interval

// Function to update class positions dynamically
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove("left", "center", "right", "hidden"); // Remove all classes
        item.classList.add(positions[index]); // Add the correct position class
    });
}

// Function to rotate items in the carousel
function rotateCarousel(direction) {
    if (direction === "next") {
        positions.unshift(positions.pop()); // Move last to first
    } else {
        positions.push(positions.shift()); // Move first to last
    }
    updateCarousel();
    restartAutoSlide(); // Restart auto-slide when user interacts
}

// Auto-slide function
function startAutoSlide() {
    autoSlide = setInterval(() => rotateCarousel("next"), 2000);
}

// Function to restart auto-slide after manual interaction
function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Initialize
updateCarousel();
startAutoSlide();


// --------------------------------------------------------------------------------------
// scroll animation 

gsap.registerPlugin(ScrollTrigger);

// Select all elements with "scroll-animated" class
document.querySelectorAll(".scroll-animated").forEach((element) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 },  
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element, 
                start: "top 80%",   
                end: "top 30%",   
                scrub: true
            }
        }
    );
});
