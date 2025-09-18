
function getCurrentStyle() {
    return localStorage.getItem('selectedStyle') || 'style1';
}


function saveStylePreference(style) {
    localStorage.setItem('selectedStyle', style);
}

// Apply the correct style based on saved preference
function applyStyle(styleName) {
    const style1 = document.getElementById('styleSheet1');
    const style2 = document.getElementById('styleSheet2');
    const button = document.getElementById('styleToggleButton');
    
    if (styleName === 'style2') {
        style1.disabled = true;
        style2.disabled = false;
        if (button) {
            button.textContent = 'Switch to Style 1';
        }
    } else {
        style1.disabled = false;
        style2.disabled = true;
        if (button) {
            button.textContent = 'Switch to Style 2';
        }
    }
}

// Toggle between styles
function toggleStyles() {
    const currentStyle = getCurrentStyle();
    const newStyle = currentStyle === 'style1' ? 'style2' : 'style1';
    
    saveStylePreference(newStyle);
    applyStyle(newStyle);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedStyle = getCurrentStyle();
    applyStyle(savedStyle);
});