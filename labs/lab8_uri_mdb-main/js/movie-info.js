/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/
const favoriteMovie = {
    title: "Mamma Mia",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPRLDV7MnijSQxdCn_Oxn7ZyKzlnBQdCukw&s",
    rating: 4,
    synopsis: "The story of a bride-to-be trying to find her real father, told using hit songs by the popular 1970s group ABBA."
};

// Select and update the movie image element
const movieImage = document.querySelector('.movie-image');
movieImage.src = favoriteMovie.poster;
movieImage.alt = favoriteMovie.title;

// Select and update the movie name element
const movieName = document.querySelector('.movie-name');
movieName.textContent = favoriteMovie.title;

// Select and update the movie description element (correcting to .description)
const movieDescription = document.querySelector('.description');
movieDescription.textContent = favoriteMovie.synopsis;

// Select and update the movie rating element
const movieRating = document.querySelector('.rating');
let stars = '';
for (let i = 1; i <= 5; i++) { 
    if (i <= favoriteMovie.rating) {
        stars += '★';
    } else {
        stars += '☆';
    }
}
movieRating.textContent = stars;
movieRating.setAttribute('data-rating', favoriteMovie.rating); // Optionally, update data-rating
