/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

const favoriteMovies = ["Mamma mia", "Pitch Perfect"];
const moviePosters = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPRLDV7MnijSQxdCn_Oxn7ZyKzlnBQdCukw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6c20MDnL2UcmO07BKFtEvpQniNxTzUjiUg&s"];
const movieLinks = ["mamma-mia.html", "https://oceanepoussin.rhody.dev/csc_271_projects-/Labs/lab8_uri_mdb-main/pitch-perfect.html"];
const movieRatings = [4, 4, 5];


/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/
const movieCards = document.querySelectorAll('.movie-card');
movieCards.forEach((movieCard, index) => {
	const movieImage = movieCard.querySelector('.movie-image');
	movieImage.src = moviePosters[index];
	movieImage.alt = favoriteMovies[index];

	const movieLink = movieCard.querySelector('.movie-link');
	movieLink.href = movieLinks[index];
	movieLink.textContent = favoriteMovies[index];

	const movieRating = movieCard.querySelector('.rating');
	let stars = '';
	for (let i = 1; i <= 5; i++) { // Set to 5 to allow full range of ratings
		if (i <= movieRatings[index]) {
			stars += '★';
		} else {
			stars += '☆';
		}
	}
	movieRating.textContent = stars;
});
