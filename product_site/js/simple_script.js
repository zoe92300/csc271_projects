document.addEventListener("DOMContentLoaded", function () {
    const hobbyElements = document.querySelectorAll('.hobby-item');
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);

    const counterDisplay = document.getElementById('counter');
    let counter = 0;
    const seenHobbies = new Set();
    const totalHobbies = hobbyElements.length;

    // Hobby class constructor
    function Hobby(title, picture, description, budget, material, famousArtists, starterKit) {
        this.title = title;
        this.picture = picture;
        this.description = description;
        this.budget = budget;
        this.material = material;
        this.famousArtists = famousArtists;
        this.starterKit = starterKit;

        // Method to suggest a starter kit
        this.getStarterKit = function () {
            return `To start ${this.title}, you will need: ${this.starterKit.join(", ")}.`;
        };
        this.displayHobbyDetails = function () {
            const hobbyDetailsContainer = document.getElementById("hobby-details");
            hobbyDetailsContainer.innerHTML = `
                <div class="hobby-detail-view"> 
                    <h2>${this.title}</h2>
                    <img src="${this.picture}" alt="${this.title}"">
                    <p><strong>Description:</strong> ${this.description}</p>
                    <p><strong>Budget:</strong> ${this.budget}</p>
                    <p><strong>Material:</strong> ${this.material.join(", ")}</p>
                    <p><strong>Famous Artists:</strong> ${this.famousArtists.join(", ")}</p>
                    <p><strong>Starter Kit:</strong> ${this.getStarterKit()}</p>
                </div>
            `;
            hobbyDetailsContainer.style.display = "block";
        }
    }

        // Method to display hobby details in the right section
    
    

    // Create hobby objects
    const painting = new Hobby(
        "Painting",
        "images/painting.svg",
        "Painting is a creative and expressive hobby that allows individuals to bring their imagination to life through color and brushstrokes.",
        "10 to 50$",
        ["paint", "brushes", "thick paper", "easel", "palette", "water cup", "paper towels"],
        ["Cecily Brown", "Peter Doig", "Julie Mehretu"],
        ["paint", "brushes", "thick paper", "water cup"]
    );

    const crochet = new Hobby(
        "Crochet",
        "images/crochet.svg",
        "Crochet is a relaxing hobby that uses hooks and yarn to create intricate patterns and designs.",
        "5 to 20$",
        ["yarn", "crochet hook", "scissors","stitch markers", "tapestry needle", "measuring tape", "filling"],
        ["Jane Doe", "Lucy Smith"],
        ["yarn", "crochet hook", "scissors"]
    );

    const tieanddye = new Hobby(
        "Tie and Dye",
        "images/clothes.svg",
        "Tie and Dye is a fun and colorful hobby that involves twisting, folding, and tying fabric before dyeing it to create unique patterns.",
        "20 to 50$",
        ["fabric", "elastics", "dye", "water", "gloves", "apron", "bucket", "plastic wrap", "soda ash"],
        ["Hugo Pineda", "Joshua Hudson"],
        ["fabric", "elastics", "dye", "water"]
    );
    const woodcarving = new Hobby(
        "Wood Carving",
        "images/wood.svg",
        "Wood Carving is a traditional hobby that involves shaping and carving wood into intricate designs and sculptures.",
        "60 to 100$",
        ["wood", "carve tool", "vacuum", "mask", "gloves", "apron", "sandpaper", "finish"],
        ["Ariele Alasko", "Christopher Kurtz"],
        ["wood", "carve tool", "vacuum"]
    );

    // Mapping hobbies to their HTML elements
    const hobbiesMap = {
        "Crochet": crochet,
        "Painting": painting,
        "Tie and Dye": tieanddye,
        "Wood Carving": woodcarving
    };

    // Function to update the counter display
    function updateCounterDisplay(currentCount, totalCount) {
        counterDisplay.textContent = `Seen hobbies: ${currentCount}/${totalCount}`;
    }

    // Process hobbies using a while loop
    if (totalHobbies > 0) {
        let index = 0;

        while (index < totalHobbies) {
            const hobbyElement = hobbyElements[index];
            const hobbyName = hobbyElement.textContent.trim();

            // On click
            hobbyElement.addEventListener("click", (event) => {
                event.preventDefault();
                // Récupérer l'objet hobby correspondant
                const selectedHobby = hobbiesMap[hobbyName];
                if (selectedHobby) {
                    document.getElementById("initial-mess").style.display = "none"; 
                    selectedHobby.displayHobbyDetails();
                    document.getElementById("hobby-details").style.display = "block"; 
                }

                // Check if the hobby has already been seen
                if (!seenHobbies.has(hobbyName)) {
                    seenHobbies.add(hobbyName);
                    counter++;
                    updateCounterDisplay(counter, totalHobbies);

                    // Display message when all hobbies are seen
                    if (counter === totalHobbies) {
                        const allSeenMessage = document.getElementById("all-seen-message");
                        allSeenMessage.style.display = "block";
                        allSeenMessage.textContent =
                            "All the hobbies have been seen. We recommend checking our More Information page for further details!";
                    }
                }

                // Retrieve hobby object and display details
                const hobbyObject = hobbiesMap[hobbyName];
                if (hobbyObject) {
                    // Adjust page layout to split into two sections
                    document.querySelector("main").style.display = "flex";
                    document.querySelector("main").style.justifyContent = "space-between";
                    hobbyDetailsContainer.style.width = "50%";

                    hobbyObject.displayHobbyDetails();
                }
            });

            // On hover
            hobbyElement.addEventListener('mouseover', () => {
                tooltip.textContent = hobbyElement.getAttribute('data-details');
                tooltip.style.display = 'block';

                const hobbyRect = hobbyElement.getBoundingClientRect();
                tooltip.style.top = `${hobbyRect.top + window.scrollY}px`;
                tooltip.style.left = `${hobbyRect.right + 10}px`;
            });

            // On mouseout
            hobbyElement.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });

            index++;
        }
    }

    // No-parameter function: Displays the recommended hobby
    function getHobby() {
        const freeTime = document.querySelector('input[name="free-time"]:checked')?.value;
        const budget = document.querySelector('input[name="budget"]:checked')?.value;
        const concentration = document.querySelector('input[name="concentration"]:checked')?.value;

        if (freeTime && budget && concentration) {
            let hobby = recommendHobby(freeTime, budget, concentration);
            document.getElementById("hobby-result").textContent = "Recommended Hobby: " + hobby;
        } else {
            document.getElementById("hobby-result").textContent = "Please complete all options to get a recommendation.";
        }
    }

    document.getElementById("hobby-submit")?.addEventListener("click", getHobby);

    // Function with three parameters: Returns a hobby recommendation based on user input
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

     // highlight the popularity cells with "High" value
    const highlightButton = document.getElementById("highlight-button");

    highlightButton.addEventListener("click", function () {
        const popularityCells = document.getElementsByClassName("popularity");

        for (let cell of popularityCells) {
            if (cell.textContent === "High") {
                cell.classList.toggle("highlight");
            }
        }
    });

    // Form submission and field validation
    let feedback = document.getElementById('feedback');

    let validName = false;
    let validWork = false;
    let validSocial = false;

    let fullname = document.getElementById('name');
    let work = document.getElementById('work');
    let socialmedia = document.getElementById('social-media');
    let comments = document.getElementById('comments');

    // Focus events
    fullname?.addEventListener("focus", () => {
        feedback.innerHTML = "Please enter the artist's name";
    });
    work?.addEventListener("focus", () => {
        feedback.innerHTML = "Please enter a platform";
    });
    socialmedia?.addEventListener("focus", () => {
        feedback.innerHTML = "Please enter a username for social media";
    });
    comments?.addEventListener("focus", () => {
        feedback.innerHTML = "Feel free to add comments";
    });

    // Blur events
    fullname?.addEventListener("blur", () => {
        if (!fullname.value.trim()) {
            fullname.style.borderColor = 'red';
            feedback.innerHTML = 'You did not enter a name. Please try again.';
            validName = false;
        } else {
            fullname.style.borderColor = '#ccc';
            feedback.innerHTML = '';
            validName = true;
        }
    });

    work?.addEventListener("blur", () => {
        if (!work.value.trim()) {
            work.style.borderColor = 'red';
            feedback.innerHTML = 'You did not enter a platform. Please try again.';
            validWork = false;
        } else {
            work.style.borderColor = '#ccc';
            feedback.innerHTML = '';
            validWork = true;
        }
    });

    socialmedia?.addEventListener("blur", () => {
        if (!socialmedia.value.trim()) {
            socialmedia.style.borderColor = 'red';
            feedback.innerHTML = 'You did not enter a social media username. Please try again.';
            validSocial = false;
        } else {
            socialmedia.style.borderColor = '#ccc';
            feedback.innerHTML = '';
            validSocial = true;
        }
    });

    // Form submission
    const form = document.getElementById('artist-form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validName && validWork && validSocial) {
            feedback.innerHTML = '<span style="color: green;">User responses successfully recorded. Thank you!</span>';
            form.reset();
            validName = false;
            validWork = false;
            validSocial = false;
        } else {
            feedback.innerHTML = 'Please complete all required fields correctly.';
        }
    });
});

const toggleListButton = document.getElementById("toggle-list-button");
const list = document.getElementsByTagName("ul")[0];

toggleListButton.addEventListener("click", function () {
    const currentDisplay = getComputedStyle(list).display; // Récupère le display calculé
    if (currentDisplay === "none") {
        list.style.display = "block"; // Affiche la liste
    } else {
        list.style.display = "none"; // Cache la liste
    }
});



