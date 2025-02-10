





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
    "perfections",
    "imperfections",
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

// Event listener for the "YES" button
yesButton.addEventListener("click", () => {
  koalaImage.src = "./assets/img/happy-koala.svg"; // Change to a happy Koala
  koalaImage.alt = "Happy Koala";
});

// Event listener for the "NO" button
noButton.addEventListener("click", () => {
  koalaImage.src = "./assets/img/sad-koala.png"; // Change to a sad Koala
  koalaImage.alt = "Sad Koala";
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

