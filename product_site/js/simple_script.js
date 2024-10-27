// Get all the hobby elements
const hobbyElements = document.querySelectorAll('.hobby-item');

// Counter for seen hobbies
const counterDisplay = document.getElementById('counter');
let counter = 0;
const seenHobbies = new Set();

hobbyElements.forEach((hobbyElement) => {
    hobbyElement.addEventListener('click', (event) => {
        event.preventDefault(); 
        const hobbyName = hobbyElement.textContent.trim();

        if (!seenHobbies.has(hobbyName)) { 
            seenHobbies.add(hobbyName); 
            counter += 1;
            counterDisplay.innerHTML = `Seen hobbies: ${counter}`;
        }
    });
});

// Create a tooltip element for each hobby element
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);


hobbyElements.forEach((hobbyElement) => {
    hobbyElement.addEventListener('mouseover', (event) => {
        
        tooltip.textContent = hobbyElement.getAttribute('data-details');
        tooltip.style.display = 'block';
        
        const hobbyRect = hobbyElement.getBoundingClientRect();
        tooltip.style.top = `${hobbyRect.top + window.scrollY}px`;
        tooltip.style.left = `${hobbyRect.right + 10}px`;
    });

    hobbyElement.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});

// Highlight the popularity cells with "High" value
document.addEventListener("DOMContentLoaded", function () {
    const highlightButton = document.getElementById("highlight-button"); 
    
    highlightButton.addEventListener("click", function () {
        const popularityCells = document.getElementsByClassName("popularity");

        for (let cell of popularityCells) {
            if (cell.textContent === "High") { 
                cell.classList.toggle("highlight"); 
            }
        }
    });
});

// Toggle the visibility of key points
document.addEventListener("DOMContentLoaded", function () {
    const toggleListButton = document.getElementById("toggle-list-button"); 
    const list = document.getElementsByTagName("ul")[0]; 

    toggleListButton.addEventListener("click", function () {
        if (list.style.display === "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    });
});
