/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

const usernames = ["MovieGeek67890", "YOda345", "I<3Movies"];
const dates = ["2024-10-30", "2024-10-30", "2024-10-30"];
const reviews = [
    "Terrific movie! If only I could watch for the first time again...",
    "Great movie! My family and I had a great time watching it for the first time.",
    "Not my genre, but overall pretty good movie and a lot of famous actors."
];
const ratings = [5, 4, 3];



/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/

const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((reviewCard, index) => {
    const reviewRating = reviewCard.querySelector('.review-rating');
    if (reviewRating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) { 
            stars += i <= ratings[index] ? '★' : '☆';
        }
        reviewRating.textContent = stars;
        reviewRating.setAttribute('data-rating', ratings[index]);
    } else {
        console.error("reviewRating element not found in card index:", index);
    }

    const reviewUsername = reviewCard.querySelector('.review-username');
    if (reviewUsername) {
        reviewUsername.textContent = usernames[index] + ' ';
    } else {
        console.error("reviewUsername element not found in card index:", index);
    }

    const reviewDate = reviewCard.querySelector('.review-date');
    if (reviewDate) {
        reviewDate.textContent = dates[index];
    } else {
        console.error("reviewDate element not found in card index:", index);
    }

    const reviewText = reviewCard.querySelector('.review-text');
    if (reviewText) {
        reviewText.textContent = reviews[index];
    } else {
        console.error("reviewText element not found in card index:", index);
    }
});


// Get the dropdown element for filtering ratings by its ID
const filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    const selected_rating = filterDropdown.value;


    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/

	reviewCards.forEach((reviewCard) => {
        const reviewRating = reviewCard.querySelector('.review-rating');
        const cardRating = reviewRating.getAttribute('data-rating');

        if (selected_rating === 'All' || selected_rating === cardRating) {
            reviewCard.style.display = 'block';
        } else {
            reviewCard.style.display = 'none';
        }
    });

});



