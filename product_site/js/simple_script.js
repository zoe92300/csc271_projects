const hobbyElements = document.querySelectorAll('.hobby-item');

// create tooltip element
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

const counterDisplay = document.getElementById('counter');
let counter = 0;
const seenHobbies = new Set();
const totalHobbies = hobbyElements.length;

// no parameter function - displays the recommended hobby
function getHobby() {
    const freeTime = document.querySelector('input[name="free-time"]:checked').value;
    const budget = document.querySelector('input[name="budget"]:checked').value;
    const concentration = document.querySelector('input[name="concentration"]:checked').value;
    
    let hobby = recommendHobby(freeTime, budget, concentration);
    document.getElementById("hobby-result").textContent = "Recommended Hobby: " + hobby;
}

// function with two parameters - updates the counter display
function updateCounterDisplay(currentCount, totalCount) {
    document.getElementById("counter").textContent = `Seen hobbies: ${currentCount} of ${totalCount}`;
}

// function with three parameters - returns a hobby recommendation based on user input
function recommendHobby(freeTime, budget, concentration) {
    if (freeTime === "a-lot") {
        return "Knitting";
    } else {
        if (budget === "high") {
            return "Pearl Jewelry";
        } else if (budget === "low" && concentration === "high") {
            return "Watercolor";
        } else if (budget === "low" && concentration === "low") {
            return "Stamp Painting";
        }
    }
    return "No recommendation available";
}


if (totalHobbies > 0) {
    let index = 0;

    // if there is still hobbies to see in the list
    while (index < totalHobbies) {
        const hobbyElement = hobbyElements[index];

        // on click
        hobbyElement.addEventListener('click', (event) => {
            event.preventDefault();
            const hobbyName = hobbyElement.textContent.trim();

            // hobby not seen
            if (!seenHobbies.has(hobbyName)) {
                seenHobbies.add(hobbyName);
                counter += 1;
                updateCounterDisplay(counter, totalHobbies);

                // if all hobbies seen already
                if (counter === totalHobbies) {
                    document.getElementById("all-seen-message").style.display = "block";
                    document.getElementById("all-seen-message").textContent = "All the hobbies have been seen. We recommend checking our More Information page for further details!";
                }
            }
        });

        // displaying message when all hobbies seen
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

// highlight the popularity cells with "High" value
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

// toggle the visibility of the key points
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
