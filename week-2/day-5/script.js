// ==========================================
// 1. DOM Element Selection
// ==========================================
const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const greetingElement = document.getElementById('dynamic-greeting');

// ==========================================
// 2. Sidebar Toggle Logic (Mobile Menu)
// ==========================================
// Listen for a click on the menu button
if (menuToggleBtn && sidebar) {
    menuToggleBtn.addEventListener('click', function() {
        // Toggle the 'sidebar--visible' class on and off
        sidebar.classList.toggle('sidebar--visible');
    });
}

// ==========================================
// 3. Dynamic Time-Based Greeting
// ==========================================
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