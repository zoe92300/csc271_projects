
// get all the hobby elements
const hobbyElements = document.querySelectorAll('.hobby-item');

// tooltip element for each hobby item
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

// Counter for seen hobbies
const counterDisplay = document.getElementById('counter');
let counter = 0;
const seenHobbies = new Set();
const totalHobbies = hobbyElements.length;

if (totalHobbies > 0) {

    let index = 0;

    while (index < totalHobbies) {
        const hobbyElement = hobbyElements[index];

        hobbyElement.addEventListener('click', (event) => {
            event.preventDefault();
            const hobbyName = hobbyElement.textContent.trim();

            // hobby not seen yet counter incremented
            if (!seenHobbies.has(hobbyName)) { 
                seenHobbies.add(hobbyName); 
                counter += 1;
                counterDisplay.innerHTML = `Seen hobbies: ${counter}`;

                // check if all hobbies seen
                if (counter === totalHobbies) {
                    document.getElementById("all-seen-message").style.display = "block";
                    document.getElementById("all-seen-message").textContent = "All the hobbies have been seen. We recommend checking our More Information page for further details !";
                }
            }
        });

        // displaying details on hobbies when hovering
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

        index++; 
    }
}

// highlight popular cells with "High" value
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

// toggle the visibility of key points
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
