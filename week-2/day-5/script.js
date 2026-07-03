// ==========================================
// 1. DOM Element Selection
// ==========================================
const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const greetingElement = document.getElementById('dynamic-greeting');

if (menuToggleBtn && sidebar) {
    menuToggleBtn.addEventListener('click', function() {

        sidebar.classList.toggle('sidebar--visible');
    });
}

function displayGreeting() {
    if (!greetingElement) return; // Safety check

    const currentHour = new Date().getHours();
    let greetingMessage = "Good Evening"; // Default fallback

    // Logic for morning, afternoon, and evening
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon";
    }

    // Inject the exact greeting into the span tag in the header
    greetingElement.textContent = greetingMessage + ", ";
}

// Execute the greeting function immediately when the page loads
displayGreeting();