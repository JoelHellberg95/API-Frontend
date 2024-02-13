fetch('https://localhost:7134/api/Videos')
    .then(response => response.json())
    .then(movies => {
let movieContainer = document.getElementById('card'); 
movies.forEach(movie => {
    let movieCard = document.createElement('div');
    movieCard.className = 'card';

    let title = document.createElement('h2');
    title.textContent = movie.title;

    let year = document.createElement('p');
    year.textContent = 'Year: ' + movie.date;

    movieCard.appendChild(title);
    movieCard.appendChild(document.createElement('hr'));
    movieCard.appendChild(year);
 
    movieContainer.appendChild(movieCard);
    });
});