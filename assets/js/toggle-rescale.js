// Function to toggle the "scaled" class
function toggleRescale() {
    document.body.classList.toggle('scaled');
    // Save the state to local storage
    const isScaled = document.body.classList.contains('scaled');
    localStorage.setItem('isScaled', isScaled);
  }
  
  // Event listener for the rescale toggle button
  document.getElementById('rescale-toggle').addEventListener('click', toggleRescale);
  
  // Check local storage on page load and set the initial state
  window.addEventListener('DOMContentLoaded', () => {
    const isScaled = localStorage.getItem('isScaled') === 'true';
    if (isScaled) {
      document.body.classList.add('scaled');
    }
  });
  