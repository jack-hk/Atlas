document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const overlay = document.getElementById('theme-overlay');

    // Check for saved theme preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    // Add event listener to the button
    toggleButton.addEventListener('click', function () {
        // Trigger fade effect
        overlay.style.opacity = '1'; // Show the overlay

        // Wait for fade-in to complete before toggling the theme
        setTimeout(() => {
            // Toggle dark and light modes
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode'); // Ensure the opposite mode is toggled as well

            // Save the theme preference in localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }

            // Fade out the overlay
            overlay.style.opacity = '0';
        }, 200); // Match the CSS transition duration (0.5s)
    });
});
