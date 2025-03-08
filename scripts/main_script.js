// ---------------------------------------------------------------------------------
// hero section title font change js logic
const fonts = ["Roboto","Newtonharward","Nasa","Norse"];
let currentFontIndex = 0;

function changeFont() {
    const title = document.querySelector(".hero_title");
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    title.style.fontFamily = fonts[currentFontIndex];
}

// ---------------------------------------------------------------------------------
// event timer js logic
// function startCountdown(eventDate) {
//     function updateTimer() {
//         const now = new Date().getTime();
//         const timeLeft = eventDate - now;

//         if (timeLeft <= 0) {
//             document.querySelector(".countdown").innerHTML = "<strong>Event Started!</strong>";
//             return;
//         }

//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//         document.getElementById("days").textContent = days.toString().padStart(2, '0');
//         document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
//         document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
//         document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
//     }

//     updateTimer();
//     setInterval(updateTimer, 1000);
// }

const eventDate = new Date("March 7, 2025 10:00:00").getTime();
startCountdown(eventDate);

// ---------------------------------------------------------------------------------
// hero section moving circle animation js logic
function createCircles() {
    let numCircles = window.innerWidth > 768 ? 20 : 8; // 20 circles for desktop, 8 for mobile
    const colors = ["#6A0DAD", "#7D3C98", "#8E44AD", "#A569BD", "#BB8FCE"];
    const container = document.body;

    for (let i = 0; i < numCircles; i++) {
        let circle = document.createElement("div");
        let size = Math.random() * 100 + 30; // Circle size between 30px - 130px
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;
        let color = colors[Math.floor(Math.random() * colors.length)];

        circle.classList.add("circle");
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;
        circle.style.background = color;
        circle.style.opacity = Math.random() * 0.5 + 0.2;
        circle.style.animationDuration = `${Math.random() * 5 + 5}s`;

        container.appendChild(circle);
    }
}

// Run function on page load
createCircles();

// Re-run when window resizes to adjust dynamically
window.addEventListener("resize", () => {
    document.querySelectorAll(".circle").forEach(circle => circle.remove()); // Remove existing circles
    createCircles(); // Recreate with new count
});
