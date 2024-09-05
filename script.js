// Get the scroll-to-top button:
let mybutton = document.getElementById("myBtn");

// Show the button when user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top of the document when the user clicks on the button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Function to handle collapsible behavior and button toggling
function toggleCollapsible(buttonId, collapsibleDivId) {
  document.getElementById(buttonId).addEventListener('click', function() {
    var collapsibleDiv = document.getElementById(collapsibleDivId);
    
    if (collapsibleDiv.classList.contains('collapsed')) {
      collapsibleDiv.classList.remove('collapsed');
      collapsibleDiv.classList.add('collapse');
    } else {
      collapsibleDiv.classList.remove('collapse');
      collapsibleDiv.classList.add('collapsed');
    }

    // Toggle the button text content on click
    if (this.textContent === '-') {
      this.textContent = '+';
    } else {
      this.textContent = '-';
    }
  });
}

// Initialize the toggle functionality for each button and collapsible div
toggleCollapsible('toggleButton1', 'collapsibleDiv1');
toggleCollapsible('toggleButton2', 'collapsibleDiv2');
toggleCollapsible('toggleButton3', 'collapsibleDiv3');
