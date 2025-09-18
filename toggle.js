
let isStyle1Active = true;

function toggleStyles() {
    const style1 = document.getElementById('styleSheet1');
    const style2 = document.getElementById('styleSheet2');
    const button = document.getElementById('styleToggleButton');
    
    if (isStyle1Active) {
        // Switch to Style 2
        style1.disabled = true;
        style2.disabled = false;
        button.textContent = 'Switch to Style 1';
        isStyle1Active = false;
    } else {
        // Switch to Style 1
        style1.disabled = false;
        style2.disabled = true;
        button.textContent = 'Switch to Style 2';
        isStyle1Active = true;
    }
}

// Set initial button text when page loads
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('styleToggleButton');
    if (button) {
        button.textContent = 'Switch to Style 2';
    }
});