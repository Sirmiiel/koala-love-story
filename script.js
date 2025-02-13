





// Add the swipe-up animation after 3 seconds
setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.transform = 'translateY(-100%)';
    loadingScreen.style.transition = 'transform 1s ease-in-out';
  }, 3000);
  
  // Add fade-in effects when sections come into view
  const fadeIns = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  fadeIns.forEach(element => observer.observe(element));
  





// Typewriter Effect
// Array of texts to type
const textsToType = [
    "your smile",
    "the way you walk",
    "your kindness",
    "your infectious laugh",
    "the way you make me feel",
    "your perfections",
    "your imperfections",
    "your beautiful heart",
    "your sparkling eyes",
    "your bright personality",
    "your caring nature",
    "the way you always know how to make me smile",
    "your gorgeous hair",
    "YOU 💖",
    "your sense of humor",
    "your adventurous spirit",
    "the way you always support me",
    "your generosity",
    "your intelligence",
    "your creativity",
    "the way you always challenge me to be my best self",
    "your loving touch",
    "the way you always listen to me"

  ];
  
  const typewriterElement = document.getElementById("typewriter");
  let textIndex = 0; // Track the current text
  let charIndex = 0; // Track the current character of the text
  let isDeleting = false; // State for typing or deleting
  
  function typeAndDeleteText() {
    const currentText = textsToType[textIndex];
  
    if (!isDeleting) {
      // Typing the text
      if (charIndex < currentText.length) {
        typewriterElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeAndDeleteText, 150); // Typing speed
      } else {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          typeAndDeleteText();
        }, 1000); // Pause before deleting (1 second)
      }
    } else {
      // Deleting the text
      if (charIndex > 0) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeAndDeleteText, 40); // Deleting speed
      } else {
        // Move to the next text
        isDeleting = false;
        textIndex = (textIndex + 1) % textsToType.length; // Loop back to the first text
        setTimeout(typeAndDeleteText, 500); // Pause before typing the next text
      }
    }
  }
  
  // Start the loop with a delay
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeAndDeleteText, 4000); // 4-second initial delay
  });
  

  window.addEventListener("scroll", () => {
    const parallaxSections = document.querySelectorAll(".parallax");
  
    parallaxSections.forEach((section) => {
      const offset = window.pageYOffset;
      section.style.backgroundPositionY = offset * 0.5 + "px";
    });
  });
  






// Get references to the buttons and image
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const koalaImage = document.getElementById("koala-image");
const buttonContainer = document.querySelector(".button-container"); // Parent div for buttons





// Function to generate a safe random position within the viewport
function getRandomPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Reduce the movement area to keep the button within safe bounds
  const maxX = screenWidth * 0.8 - buttonWidth; // 80% of screen width
  const maxY = screenHeight * 0.8 - buttonHeight; // 80% of screen height

  const randomX = Math.max(20, Math.random() * maxX);
  const randomY = Math.max(20, Math.random() * maxY);

  return { x: randomX, y: randomY };
}



// Function to move the NO button to a random position with animation
function moveNoButton() {
  const { x, y } = getRandomPosition();

  noButton.style.transition = "all 1s ease-in-out"; // Smooth transition
  noButton.style.position = "absolute";  // Allows it to move freely
  noButton.style.left = `${x}px`;  // New random X position
  noButton.style.top = `${y}px`;   // New random Y position
}

// Function to handle "YES" button click
yesButton.addEventListener("click", () => {
  // Change Koala to happy
  koalaImage.src = "./assets/img/happy-koala.svg";
  koalaImage.alt = "Happy Koala";

  // Hide the "NO" button
  noButton.style.display = "none";

  // Play "wee.mp3" sound
  const audio = new Audio('./assets/audio/wee.mp3');
  audio.play();

  // Confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 }
  });

    // Show "Good girl" text
    showGoodGirlText();

  // Add "Text me" button
  addWhatsAppButton();

});


// Function to show "Good girl" text
function showGoodGirlText() {
  // Check if the text already exists to prevent duplicates
  if (!document.querySelector('p.good-girl-text')) {
    const textContainer = document.createElement("p");
    textContainer.textContent = "Good girl 😏";
    textContainer.style.fontSize = "18px";
    textContainer.style.fontWeight = "bold";
    textContainer.style.color = "#fff";
    textContainer.style.textAlign = "center";
    textContainer.style.marginTop = "10px";
    textContainer.classList.add('good-girl-text'); // Add a class to identify the element

    // Insert text above the Koala image
    koalaImage.parentNode.insertBefore(textContainer, koalaImage);
  }
}




// Function to add a "Text me" button
function addWhatsAppButton() {
  const buttonContainer = document.getElementById("button-container");

  if (!buttonContainer) {
    console.error("Error: #button-container not found in the HTML!");
    return;
  }

  // Check if the button already exists to prevent duplicates
  if (document.getElementById("whatsapp-button")) return;

  // Create button element
  const whatsappButton = document.createElement("a");
  whatsappButton.id = "whatsapp-button";
  whatsappButton.href = "https://wa.me/+2348089936656"; // Replace with your WhatsApp number
  whatsappButton.textContent = "Text me, baby 💬";
  whatsappButton.target = "_blank"; // Open in new tab

  // Style the button
  whatsappButton.style.display = "inline-block";
  whatsappButton.style.marginTop = "20px";
  whatsappButton.style.padding = "10px 20px";
  whatsappButton.style.fontSize = "18px";
  whatsappButton.style.color = "#fff";
  whatsappButton.style.backgroundColor = "#25D366"; // WhatsApp green
  whatsappButton.style.borderRadius = "10px";
  whatsappButton.style.textDecoration = "none";
  whatsappButton.style.fontWeight = "bold";
  whatsappButton.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";

  console.log("Appending button to container...");
  buttonContainer.appendChild(whatsappButton);
}


// Function to handle "NO" button click
noButton.addEventListener("click", () => {
  // Change Koala to sad
  koalaImage.src = "./assets/img/sad-koala.png";
  koalaImage.alt = "Sad Koala";

  // Move "NO" button to a new position
  moveNoButton();
});













document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".fly-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Reset when out of view
        }
      });
    },
    { threshold: 0.35 } // Trigger when 20% of the section is visible
  );

  textElements.forEach((el) => observer.observe(el));
});








document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");
  const playBtn = document.getElementById("play-music");
  const noMusicBtn = document.getElementById("no-music");
  const overlay = document.getElementById("music-overlay");

  // Play music if user clicks "Play Music"
  playBtn.addEventListener("click", function () {
    audio.play().catch((error) => console.log("Autoplay blocked:", error));
    overlay.style.display = "none"; // Hide the popup
  });

  // Hide overlay if user clicks "Continue Without Music"
  noMusicBtn.addEventListener("click", function () {
    overlay.style.display = "none"; // Just remove the popup, no music plays
  });
});






