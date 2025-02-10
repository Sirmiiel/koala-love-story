document.addEventListener("DOMContentLoaded", function () {
    const swooshAudio = document.getElementById("swoosh-audio");
    const balloonSection = document.querySelector(".parallax.bg-pink-200");

    function handleScroll() {
        const rect = balloonSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Log the bounding rect values to see what's happening
        console.log("Section Position:", rect.top, rect.bottom, "Window Height:", windowHeight);

        // Check if the section is within the viewport (even partially)
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            console.log("Section is in view! Playing audio...");
            if (swooshAudio.paused) {
                swooshAudio.muted = false;
                swooshAudio.currentTime = 0; // Reset audio
                swooshAudio.play().catch(error => console.log("Autoplay blocked:", error));
            }
        } else {
            console.log("Section is out of view! Stopping audio...");
            swooshAudio.pause();
            swooshAudio.currentTime = 0; // Reset when out of view
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Unmute after user interaction to bypass autoplay restrictions
    document.addEventListener("click", () => {
        console.log("User interacted! Enabling audio...");
        swooshAudio.muted = false;
    });
});
