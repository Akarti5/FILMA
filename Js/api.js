const resultSec = document.getElementsByClassName('results-section')[0];
const movieSearch = document.getElementById('movieSearch');
const searchBtn = document.getElementById('searchBtn');
const typeFilter = document.getElementById('typeFilter');
const yearFilter = document.getElementById('yearFilter');
const loadingSpinner = document.getElementById('loadingSpinner');
const movieResult = document.getElementById('movieResult');
const movieTitle = document.getElementsByClassName('movie-title')[0];
const year = document.getElementsByClassName('year')[0];
const score = document.getElementsByClassName('rating-score')[0];
const source = document.getElementsByClassName('rating-source')[0];
const source2= document.getElementsByClassName('rating-source')[1];
const image = document.getElementsByClassName('poster-img')[0];
const rated = document.getElementsByClassName('rated')[0];
const runtime = document.getElementsByClassName('runtime')[0];
const plot = document.getElementsByClassName('plot')[0];
const writter = document.getElementsByClassName('credit-value')[0];
const Actors = document.getElementsByClassName('credit-value')[1];
const language = document.getElementsByClassName('credit-value')[2];
const country = document.getElementsByClassName('credit-value')[3];
const score2 = document.getElementsByClassName('rating-value')[0];
const votes = document.getElementsByClassName('rating-value')[1];
const awards = document.getElementsByClassName('awards-text')[0];
const noResult = document.getElementsByClassName('no-results')[0];
const spinner = document.getElementById('loadingSpinner');
const result = document.getElementById('movieResult');



searchBtn.onclick = ()=>{
    let movieName = movieSearch.value;
   

   

    // result.style.display = (movieName != '') ? 'block' : 'none';

    const url = `https://www.omdbapi.com/?apikey=22eb955&t=${movieName}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data =>{
        
        resultSec.style.display = 'block';
        spinner.style.display = 'block';
        let res = `${data.Response}`;

       

        result.style.display = (res == 'True') ? 'block' : 'none';
        spinner.style.display = (res == 'True') ? 'none' : 'block';
        noResult.style.display = (res == 'True') ? 'none' : 'block';

        




        movieTitle.textContent = `${data.Title}`;
        year.textContent = `${data.Year}`;
        score.textContent = `${data.Ratings[0].Value}`;
        
        // source imdb
        let src = data.Ratings[0].Source;

        source.textContent = (src === 'Internet Movie Database') ? 'Imdb' : data.Ratings[0].Source;

        score.textContent = `${data.Ratings[0].Value}`;
        score2.textContent = `${data.Ratings[0].Value}`;
        image.src = `${data.Poster}`;
        image.alt = `${data.Title}`;
        rated.textContent = `${data.Rated}`;
        runtime.textContent = `${data.Runtime}`;
        plot.textContent = `${data.Plot}`;
        writter.textContent = `${data.Writer}`;
        Actors.textContent = `${data.Actors}`;
        language.textContent = `${data.Language}`;
        country.textContent = `${data.Country}`;
        source2.textContent = `${data.Ratings[0].Source}`;
        awards.textContent = `${data.Awards}`;
        votes.textContent = `${data.imdbVotes}`;
       
        
                 

})
.catch(error => {
    console.log("Error on api :",error);
});
};


